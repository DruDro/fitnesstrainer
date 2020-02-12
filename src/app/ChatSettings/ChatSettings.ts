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
    Router
} from '@angular/router';
import {
    ExportedClass as DataService
} from '../scripts/custom/DataService';
import {
    ExportedClass as BackendService
} from '../scripts/custom/BackendService';
import {
    ExportedClass as GroupChatService
} from '../scripts/custom/GroupChatService';
import {
    Chat
} from '../scripts/interfaces';
@Component({
    templateUrl: 'ChatSettings.html',
    selector: 'page-chat-settings',
    styleUrls: ['ChatSettings.scss']
})
export class ChatSettings {
    public chat: Chat;
    public chatName: string;
    public pendingContacts: any;
    public picture: string;
    public currentItem: any = null;
    public mappingData: any = {};
    createChat() {
        this.chatService.createChat(this.chatName).then(chat => this.router.navigate([`home/ChatList/chat/${chat.id}`], {
            replaceUrl: true
        }))
    }
    takePhoto() {
        // function setOptions(srcType) {
        //     var options = {
        //         // Some common settings are 20, 50, and 100
        //         quality: 50,
        //         destinationType: Camera.DestinationType.FILE_URI,
        //         // In this app, dynamically set the picture source, Camera or photo gallery
        //         sourceType: srcType,
        //         encodingType: Camera.EncodingType.JPEG,
        //         mediaType: Camera.MediaType.PICTURE,
        //         allowEdit: false,
        //         correctOrientation: true  //Corrects Android orientation quirks
        //     }
        //     return options;
        // }
        // var srcType = window.Camera.PictureSourceType.CAMERA;
        // var options = setOptions(srcType);
        // window.navigator.camera.getPicture(function cameraSuccess(imageUri) {
        //     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        //         window.resolveLocalFileSystemURL(window.cordova.file.externalCacheDirectory, function (dirEntry) {
        //             var fileName = imageUri.substr(imageUri.lastIndexOf('/')+1);
        //             dirEntry.getFile(fileName, { create: true, exclusive: false }, function(fileEntry) {
        //                 fileEntry.file(function (file) {
        //                     var reader = new FileReader();
        //                     reader.onloadend = function () {
        //                         // Create a blob based on the FileReader "result", which we asked to be retrieved as an ArrayBuffer
        //                         var blob = new Blob([new Uint8Array(this.result)], {type: "image/jpg"});
        //                         var uri = encodeURI("https://api.appery.io/rest/1/db/files/" + fileName);
        //                         var oReq = new XMLHttpRequest();
        //                         oReq.open("POST", uri, true);
        //                         oReq.setRequestHeader('X-Appery-Database-Id', '5d6951182e22d7186fa77060');
        //                         oReq.setRequestHeader('X-Appery-Master-Key' , '804f152e-629a-41f1-9874-badbdb260ab5');
        //                         oReq.onload = function (oEvent) {
        //                             // all done!
        //                         };
        //                         // Pass the blob in to XHR's send method
        //                         oReq.send(blob);
        //                     };
        //                     // Read the file as an ArrayBuffer
        //                     reader.readAsArrayBuffer(file);
        //                 }, function (err) {
        //                     console.error('error getting fileentry file!',err);
        //                 })
        //             })
        //         }, function (err) {
        //             console.error('error getting file! ', err);
        //         });
        //     }, function (err) {
        //         console.error('error getting persistent fs! ', err);
        //     });
        // }, function cameraError(error) {
        //     console.debug("Unable to obtain picture: " + error, "app");
        // }, options);
    }
    async ngOnInit() {
        const trainers = await this.backendService.getTrainers();
        const users = await this.backendService.getUsers();
        let contacts = [...trainers, ...users];
        let chatUsers = [];
        for (let contact of this.chatService.pendingContacts) {
            const user = contacts.find(c => c._id === contact);
            chatUsers.push(user)
        }
        this.pendingContacts = chatUsers;
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public chatService: GroupChatService, public dataService: DataService, public backendService: BackendService, public router: Router) {}
}