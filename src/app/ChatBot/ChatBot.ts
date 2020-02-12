import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    HttpClient
} from '@angular/common/http';
import {
    HttpParams
} from '@angular/common/http';
import {
    HttpHeaders
} from '@angular/common/http';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    SpeechRecognition
} from '@ionic-native/speech-recognition/ngx';
@Component({
    templateUrl: 'ChatBot.html',
    selector: 'page-chat-bot',
    styleUrls: ['ChatBot.scss']
})
export class ChatBot {
    public message: string = '';
    public messages: any;
    public hints: any = [];
    public IN: string = 'in';
    public OUT: string = 'out';
    public action: string = 'send';
    public ref: any;
    public userId: string;
    public timeout: any;
    public currentItem: any = null;
    public mappingData: any = {};
    ionViewWillEnter() {
        this.messages = [];
        this.send(`${this.dataService.user.firstName} ${this.dataService.user.lastName}`);
        this.ref = this.$aio_changeDetector;
        this.userId = Math.random().toString(36).substring(7);
    }
    async speechRecognition() {
        this.Apperyio.showModal("SpeechRecognitionModal", {
                showBackdrop: true,
                backdropDismiss: false,
                cssClass: "filter",
                animated: true,
                keyboardClose: true
            })
            .then(modal => {
                modal.present();
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned.data) {
                        if (dataReturned.data.cancelled) {
                            this.message = ''
                        } else {
                            console.log(dataReturned);
                            this.message = dataReturned.data;
                        }
                    } else {
                        alert("Sorry, could you please repeat?");
                    }
                });
            });
    }
    buttonClick() {
        if (this.message) {
            this.sendMessage();
        } else {
            this.speechRecognition();
        }
    }
    checkForLinks(text) {
        const re_weburl = RegExp(
            "^" +
            // protocol identifier
            "(?:(?:https?|ftp)://)?" +
            // user:pass authentication
            "(?:\\S+(?::\\S*)?@)?" +
            "(?:" +
            // IP address exclusion
            // private & local networks
            "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
            "|" +
            // host name
            "(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)" +
            // domain name
            "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*" +
            // TLD identifier
            "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
            ")" +
            // port number
            "(?::\\d{2,5})?" +
            // resource path
            "(?:/[^\\s]*)?" +
            "$", "i");
        if (text) {
            return text.match(re_weburl);
        }
    }
    async sendMessage(hintMessage ? ) {
        console.log(hintMessage);
        let msg = hintMessage || this.message;
        const linksInMessage = this.checkForLinks(msg);
        if (linksInMessage) {
            const richLinks = await this.getLinkPreviews(linksInMessage);
            for (let i = 0; i < linksInMessage.length; i++) {
                msg = msg.replace(new RegExp(linksInMessage[i], "g"), `<a class="replacedLink" href="${richLinks[i].url}" target="_blank">${linksInMessage[i]}</a>`)
            }
            this.messages.push({
                msg,
                richLinks,
                type: this.OUT
            });
        } else {
            this.messages.push({
                msg,
                type: this.OUT
            });
        }
        this.send(msg);
        this.message = "";
        this.hints = [];
    }
    async getLinkPreviews(links) {
        let previews = [];
        const imageExtensions = ['png', 'gif', 'jpg', 'jpeg', 'svg', 'bmp'];
        const isImage = (fileExtensions, link) => {
            return fileExtensions.some(function(ext) {
                return link.endsWith(ext);
            });
        };
        for (let link of links) {
            if (isImage(imageExtensions, link)) {
                const resLink = {
                    url: link,
                    image: link,
                    title: "",
                    description: ""
                };
                previews.push(resLink)
            } else {
                try {
                    const resLink = await this.http.get(`https://api.linkpreview.net/?key=5d94a40d00eb9cc7acaa016a5685dfc5997392695add4&q=${link}`).toPromise()
                    previews.push(resLink)
                } catch (err) {
                    console.log(err)
                }
            }
        }
        return previews;
    }
    async send(msg) {
        const service = await this.Apperyio.getService("abc_chatbot");
        if (!service) {
            console.log("Error. Service was not found.");
            return;
        }
        const data = await service.execute({
            data: {
                "text": msg
            },
            params: {
                "user_id": this.userId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).toPromise();
        console.log(data);
        if (data.responses && data.responses.length) {
            console.log(data.responses);
            let msgObj = {
                type: this.IN,
                msg: null,
                richLinks: null
            };
            if (data.responses[data.responses.length - 1].type === "custom") {
                this.hints = data.responses[data.responses.length - 1].quick_replies.map(({
                    title
                }) => title);
                if (data.responses.length === 2) {
                    return;
                }
                msgObj.msg = data.responses[data.responses.length - 3].text;
            } else {
                msgObj.msg = data.responses[data.responses.length - 1].text;
            }
            const linksInMessage = this.checkForLinks(msgObj.msg);
            if (linksInMessage) {
                msgObj.richLinks = await this.getLinkPreviews(linksInMessage);
                for (let i = 0; i < linksInMessage.length; i++) {
                    msgObj.msg = msgObj.msg.replace(new RegExp(linksInMessage[i], "g"), `<a class="replacedLink" href="${msgObj.richLinks[i].url}" target="_blank">${linksInMessage[i]}</a>`)
                }
            }
            this.messages.push(msgObj);
            setTimeout(() => {
                const element = document.getElementById("messages");
                element.scrollTop = element.scrollHeight - element.clientHeight;
            }, 500);
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public http: HttpClient, public speech: SpeechRecognition, public dataService: DataService) {}
}