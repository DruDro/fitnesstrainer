import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './Login/Login.module#LoginPageModule',
    },
    {
        path: 'schedule',
        loadChildren: './Schedule/Schedule.module#SchedulePageModule',
    },
    {
        path: 'home',
        loadChildren: './Root/Root.module#RootPageModule',
    },
    {
        path: 'barcode',
        loadChildren: './Barcode/Barcode.module#BarcodePageModule',
    },
    {
        path: 'welcome',
        loadChildren: './Home/Home.module#HomePageModule',
    },
    {
        path: 'profile',
        loadChildren: './Profile/Profile.module#ProfilePageModule',
    },
    {
        path: 'chatbot',
        loadChildren: './ChatBot/ChatBot.module#ChatBotPageModule',
    },
    {
        path: 'referrals',
        loadChildren: './Referrals/Referrals.module#ReferralsPageModule',
    },
    {
        path: 'accountdetails',
        loadChildren: './AccountDetails/AccountDetails.module#AccountDetailsPageModule',
    },
    {
        path: 'trainers',
        loadChildren: './Trainers/Trainers.module#TrainersPageModule',
    },
    {
        path: 'trainer/:id',
        loadChildren: './TrainerDetails/TrainerDetails.module#TrainerDetailsPageModule',
    },
    {
        path: 'testhealthkit',
        loadChildren: './TESTHealthKit/TESTHealthKit.module#TESTHealthKitPageModule',
    },
    {
        path: 'profile/edit',
        loadChildren: './EditProfile/EditProfile.module#EditProfilePageModule',
    },
    {
        path: 'subscriptions',
        loadChildren: './Subscriptions/Subscriptions.module#SubscriptionsPageModule',
    },
    {
        path: 'locations',
        loadChildren: './Locations/Locations.module#LocationsPageModule',
    },
    {
        path: 'chat/:id',
        loadChildren: './Chat/Chat.module#ChatPageModule',
    },
    {
        path: 'chatlist',
        loadChildren: './ChatList/ChatList.module#ChatListPageModule',
    },
    {
        path: 'chatsettings',
        loadChildren: './ChatSettings/ChatSettings.module#ChatSettingsPageModule',
    },
    {
        path: 'creategroupchat',
        loadChildren: './CreateGroupChat/CreateGroupChat.module#CreateGroupChatPageModule',
    },
    {
        path: 'newmessage',
        loadChildren: './NewMessage/NewMessage.module#NewMessagePageModule',
    },
    {
        path: 'checkout',
        loadChildren: './Checkout/Checkout.module#CheckoutPageModule',
    },
    {
        path: 'camps',
        loadChildren: './Camps/Camps.module#CampsPageModule',
    },
    {
        path: 'camp/:id',
        loadChildren: './Camp/Camp.module#CampPageModule',
    },
    {
        path: 'courts',
        loadChildren: './TennisCourts/TennisCourts.module#TennisCourtsPageModule',
    },
    {
        path: 'settings',
        loadChildren: './Settings/Settings.module#SettingsPageModule',
    },
    {
        path: 'chatdetails/:id',
        loadChildren: './ChatDetails/ChatDetails.module#ChatDetailsPageModule',
    },
    {
        path: 'myworkouts',
        loadChildren: './MyWorkouts/MyWorkouts.module#MyWorkoutsPageModule',
    },
    {
        path: 'planbrowseactivities',
        loadChildren: './PlanBrowseActivities/PlanBrowseActivities.module#PlanBrowseActivitiesPageModule',
    },
    {
        path: 'plancreateworkouts',
        loadChildren: './PlanCreateWorkouts/PlanCreateWorkouts.module#PlanCreateWorkoutsPageModule',
    },
    {
        path: 'planselectcoach',
        loadChildren: './PlanSelectCoach/PlanSelectCoach.module#PlanSelectCoachPageModule',
    },
    {
        path: 'planselecttime',
        loadChildren: './PlanSelectTime/PlanSelectTime.module#PlanSelectTimePageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}