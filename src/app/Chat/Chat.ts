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
    ActivatedRoute
} from '@angular/router';
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
    Observable
} from 'rxjs/Observable';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as GroupChatService
} from '../scripts/custom/GroupChatService';
import {
    ExportedClass as ContactsService
} from '../scripts/custom/ContactsService';
import {
    AngularFirestore
} from '@angular/fire/firestore';
import {
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import {
    SpeechRecognition
} from '@ionic-native/speech-recognition/ngx';
@Component({
    templateUrl: 'Chat.html',
    selector: 'page-chat',
    styleUrls: ['Chat.scss']
})
export class Chat {
    public chat: Observable < any > ;
    public chatDoc: AngularFirestoreDocument;
    public messages: any;
    public message: string;
    public messagesRef: AngularFirestoreCollection;
    public id: string;
    public currentItem: any = null;
    public mappingData: any = {};
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.chatService.chatId = this.id;
        this.chat = this.chatService.getChat(this.id);
        this.messages = this.chatService.getMessages();
        this.updateLastVisited()
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
    async sendMessage() {
        if (this.message) {
            const linksInMessage = this.checkForLinks(this.message);
            let msg = {
                text: this.message,
                uid: this.dataService.user._id,
                createdAt: new Date(),
                richLinks: []
            }
            if (linksInMessage) {
                for (let link of linksInMessage) {
                    try {
                        const preview = await (await fetch(`https://api.linkpreview.net/?key=5d94a40d00eb9cc7acaa016a5685dfc5997392695add4&q=${link}`)).json();
                        msg.richLinks.push(preview)
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
            this.chatService.sendMessage(msg).then(res => {
                setTimeout(this.scrollToBottom, 300);
                this.message = "";
            })
        }
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
    scrollToBottom() {
        const element = document.getElementById("messages");
        element.scrollTop = element.scrollHeight - element.clientHeight;
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
    ngOnDestroy() {
        this.updateLastVisited();
    }
    updateLastVisited() {
        this.chatService.updateLastVisited()
    }
    ionViewDidEnter() {
        setTimeout(this.scrollToBottom, 300);
    }
    openChatDetails() {
        this.Apperyio.navigateTo("home/ChatList/chatdetails/", this.id);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public afs: AngularFirestore, public http: HttpClient, public dataService: DataService, public speech: SpeechRecognition, public chatService: GroupChatService, public contactsService: ContactsService, public route: ActivatedRoute) {}
}