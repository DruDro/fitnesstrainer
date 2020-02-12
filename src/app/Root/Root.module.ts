import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    Routes
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    Root
} from './Root';
import {
    PipesModule
} from '../scripts/pipes.module';
import {
    DirectivesModule
} from '../scripts/directives.module';
import {
    ComponentsModule
} from '../scripts/components.module';
import {
    CustomModulesModule
} from '../scripts/custom-modules.module';
const routes: Routes = [{
    path: '',
    component: Root,
    children: [{
            path: 'Home',
            children: [{
                path: '',
                loadChildren: '../Home/Home.module#HomePageModule'
            }, {
                path: "locations",
                loadChildren: '../Locations/Locations.module#LocationsPageModule'
            }, {
                path: "trainers",
                loadChildren: '../Trainers/Trainers.module#TrainersPageModule'
            }, {
                path: "trainer/:id",
                loadChildren: '../TrainerDetails/TrainerDetails.module#TrainerDetailsPageModule'
            }]
        },
        {
            path: 'Schedule',
            children: [{
                path: '',
                loadChildren: '../Schedule/Schedule.module#SchedulePageModule'
            }, {
                path: "camps",
                loadChildren: '../Camps/Camps.module#CampsPageModule'
            }, {
                path: "courts",
                loadChildren: '../TennisCourts/TennisCourts.module#TennisCourtsPageModule'
            }, {
                path: "camp/:id",
                loadChildren: '../Camp/Camp.module#CampPageModule'
            }, {
                path: "schedule",
                loadChildren: '../Schedule/Schedule.module#SchedulePageModule'
            }, {
                path: "planbrowseactivities",
                loadChildren: '../PlanBrowseActivities/PlanBrowseActivities.module#PlanBrowseActivitiesPageModule'
            }, {
                path: "plancreateworkouts",
                loadChildren: '../PlanCreateWorkouts/PlanCreateWorkouts.module#PlanCreateWorkoutsPageModule'
            }, {
                path: "planselectcoach",
                loadChildren: '../PlanSelectCoach/PlanSelectCoach.module#PlanSelectCoachPageModule'
            }, {
                path: "planselecttime",
                loadChildren: '../PlanSelectTime/PlanSelectTime.module#PlanSelectTimePageModule'
            }, {
                path: "myworkouts",
                loadChildren: '../MyWorkouts/MyWorkouts.module#MyWorkoutsPageModule'
            }]
        },
        {
            path: 'ChatList',
            children: [{
                path: '',
                loadChildren: '../ChatList/ChatList.module#ChatListPageModule'
            }, {
                path: "chat/:id",
                loadChildren: '../Chat/Chat.module#ChatPageModule'
            }, {
                path: "chatlist",
                loadChildren: '../ChatList/ChatList.module#ChatListPageModule'
            }, {
                path: "chatsettings",
                loadChildren: '../ChatSettings/ChatSettings.module#ChatSettingsPageModule'
            }, {
                path: "chatdetails/:id",
                loadChildren: '../ChatDetails/ChatDetails.module#ChatDetailsPageModule'
            }, {
                path: "creategroupchat",
                loadChildren: '../CreateGroupChat/CreateGroupChat.module#CreateGroupChatPageModule'
            }, {
                path: "newmessage",
                loadChildren: '../NewMessage/NewMessage.module#NewMessagePageModule'
            }]
        },
        {
            path: 'Referrals',
            children: [{
                path: '',
                loadChildren: '../Referrals/Referrals.module#ReferralsPageModule'
            }]
        },
        {
            path: 'Profile',
            children: [{
                path: '',
                loadChildren: '../Profile/Profile.module#ProfilePageModule'
            }, {
                path: "accountdetails",
                loadChildren: '../AccountDetails/AccountDetails.module#AccountDetailsPageModule'
            }, {
                path: "subscriptions",
                loadChildren: '../Subscriptions/Subscriptions.module#SubscriptionsPageModule'
            }, {
                path: "checkout",
                loadChildren: '../Checkout/Checkout.module#CheckoutPageModule'
            }, {
                path: "profile/edit",
                loadChildren: '../EditProfile/EditProfile.module#EditProfilePageModule'
            }, {
                path: "referrals",
                loadChildren: '../Referrals/Referrals.module#ReferralsPageModule'
            }]
        },
        {
            path: '',
            redirectTo: 'Home',
            pathMatch: 'full'
        }
    ]
}];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PageRoutingModule {}
@NgModule({
    declarations: [
        Root
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        CustomModulesModule, PageRoutingModule
    ],
    exports: [
        Root
    ]
})
export class RootPageModule {}