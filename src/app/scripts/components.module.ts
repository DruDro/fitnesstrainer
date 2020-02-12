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
    IonicModule
} from '@ionic/angular';
import {
    PipesModule
} from './pipes.module';
import {
    DirectivesModule
} from './directives.module';
import {
    ExportedClass as TrainerSchedule
} from './custom/TrainerSchedule';
import {
    ExportedClass as CourtSchedule
} from './custom/CourtSchedule';
import {
    ExportedClass as PlanActivity
} from './custom/PlanActivity';
import {
    ExportedClass as DateSwitcher
} from './custom/DateSwitcher';
import {
    ExportedClass as Calendar
} from './custom/Calendar';
import {
    ExportedClass as WorkoutCard
} from './custom/WorkoutCard';
import {
    ExportedClass as UserListItem
} from './custom/UserListItem';
import {
    ExportedClass as CreditCard
} from './custom/CreditCard';
import {
    ExportedClass as SubscriptionCard
} from './custom/SubscriptionCard';
import {
    ExportedClass as ActivityFilter
} from './custom/ActivityFilter';
import {
    ExportedClass as CoachFilter
} from './custom/CoachFilter';
import {
    ExportedClass as LocationFilter
} from './custom/LocationFilter';
import {
    ExportedClass as UserWorkoutCard
} from './custom/UserWorkoutCard';
import {
    ExportedClass as WorkoutPlan
} from './custom/WorkoutPlan';
@NgModule({
    declarations: [
        TrainerSchedule,
        CourtSchedule,
        PlanActivity,
        DateSwitcher,
        Calendar,
        WorkoutCard,
        UserListItem,
        CreditCard,
        SubscriptionCard,
        ActivityFilter,
        CoachFilter,
        LocationFilter,
        UserWorkoutCard,
        WorkoutPlan,
    ],
    imports: [CommonModule, FormsModule, RouterModule, IonicModule, PipesModule, DirectivesModule],
    exports: [
        TrainerSchedule,
        CourtSchedule,
        PlanActivity,
        DateSwitcher,
        Calendar,
        WorkoutCard,
        UserListItem,
        CreditCard,
        SubscriptionCard,
        ActivityFilter,
        CoachFilter,
        LocationFilter,
        UserWorkoutCard,
        WorkoutPlan,
    ]
})
export class ComponentsModule {}