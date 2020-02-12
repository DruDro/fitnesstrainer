import {
    Injectable
} from '@angular/core';
@Injectable()
export class ModalScreensService {
    private modalScreens: {
        [name: string]: any
    } = {};
    async getModalScreen(screenName: string) {
        if (!this.modalScreens[screenName]) {
            let modalImport;
            switch (screenName) {
                case "SpeechRecognitionModal":
                    modalImport = await
                    import (`../../SpeechRecognitionModal/SpeechRecognitionModal`);
                    break;
                case "SavedWorkoutModal":
                    modalImport = await
                    import (`../../SavedWorkoutModal/SavedWorkoutModal`);
                    break;
                case "DirectionsDetailsModal":
                    modalImport = await
                    import (`../../DirectionsDetailsModal/DirectionsDetailsModal`);
                    break;
                case "ScheduleNavigationModal":
                    modalImport = await
                    import (`../../ScheduleNavigationModal/ScheduleNavigationModal`);
                    break;
                case "ScheduleFilterModal":
                    modalImport = await
                    import (`../../ScheduleFilterModal/ScheduleFilterModal`);
                    break;
            }
            if (modalImport) {
                this.modalScreens[screenName] = modalImport[screenName];
            }
        }
        return this.modalScreens[screenName]
    }
};