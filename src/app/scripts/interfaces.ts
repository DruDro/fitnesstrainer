// Appery.io models
//
interface __Chat_sub_002 {}
interface __Chat_sub_001 extends Array < string > {}
export interface Chat {
    "users": __Chat_sub_001,
    "uid": string,
    "lastVisited": __Chat_sub_002,
    "picture": string,
    "createdAt": Date,
    "updatedAt": Date,
    "name": string,
    "lastMessage": ChatMessage
}
interface __PlanWorkout_sub_001 extends Array < PlanWorkoutActivity > {}
export interface PlanWorkout {
    "name": string,
    "activities": __PlanWorkout_sub_001
}
export interface UserLogin {
    "username": string,
    "password": string
}
export interface WorkoutType {
    "icon": string,
    "name": string
}
interface __Card_0_sub_001 {
    "year": string,
    "month": string
}
export interface Card_0 {
    "cardProvider": string,
    "cardType": string,
    "lastFourDigits": string,
    "expirationDate": __Card_0_sub_001
}
interface __PlanWorkout_0_sub_001 extends Array < PlanWorkoutActivity_0 > {}
export interface PlanWorkout_0 {
    "name": string,
    "activities": __PlanWorkout_0_sub_001
}
interface __ChatMessage_0_sub_002 {
    "title": string,
    "description": string,
    "image": string
}
interface __ChatMessage_0_sub_001 extends Array < __ChatMessage_0_sub_002 > {}
export interface ChatMessage_0 {
    "text": string,
    "richLinks": __ChatMessage_0_sub_001,
    "uid": string,
    "createdAt": Date_0
}
export interface Date_0 {}
interface __Chat_0_sub_002 {}
interface __Chat_0_sub_001 extends Array < string > {}
export interface Chat_0 {
    "users": __Chat_0_sub_001,
    "updatedAt": Date_0,
    "name": string,
    "picture": string,
    "uid": string,
    "lastVisited": __Chat_0_sub_002,
    "lastMessage": ChatMessage_0,
    "createdAt": Date_0
}
export interface Subscription {
    "id": any,
    "discount": number,
    "isCurrent": boolean,
    "invoiceSent": boolean,
    "price": number,
    "title": string,
    "pricePerClass": number
}
export interface User {
    "avatar": string,
    "location": any,
    "regDate": Date,
    "lastName": string,
    "firstName": string,
    "_id": string,
    "org": Org
}
interface __Trainer_0_sub_001 extends Array < any > {}
export interface Trainer_0 {
    "lastName": string,
    "workouts": __Trainer_0_sub_001,
    "firstName": string,
    "phone": string,
    "name": string,
    "position": string,
    "fullName": string,
    "avatar": string,
    "_id": string,
    "workoutKey": string
}
interface __PlanWorkoutActivity_0_sub_001 extends Array < string > {}
export interface PlanWorkoutActivity_0 {
    "days": __PlanWorkoutActivity_0_sub_001,
    "time": string,
    "workoutType": string,
    "trainer": string
}
interface __ChatMessage_sub_002 {
    "description": string,
    "image": string,
    "title": string
}
interface __ChatMessage_sub_001 extends Array < __ChatMessage_sub_002 > {}
export interface ChatMessage {
    "uid": string,
    "text": string,
    "richLinks": __ChatMessage_sub_001,
    "createdAt": Date
}
interface __Org_0_sub_001 extends Array < string > {}
export interface Org_0 {
    "ad": __Org_0_sub_001,
    "colorTheme": number,
    "_id": string,
    "name": string
}
interface __Org_sub_001 extends Array < string > {}
export interface Org {
    "name": string,
    "ad": __Org_sub_001,
    "colorTheme": number,
    "_id": string
}
export interface Workout_0 {
    "trainer_id": string,
    "date": Date_0,
    "_id": string,
    "trainer": Trainer_0,
    "time": string,
    "place": string,
    "workoutType": WorkoutType_0,
    "name": string
}
export interface WorkoutType_0 {
    "name": string,
    "icon": string
}
export interface User_0 {
    "regDate": Date_0,
    "location": any,
    "_id": string,
    "org": Org_0,
    "avatar": string,
    "lastName": string,
    "firstName": string
}
interface __PlanWorkoutActivity_sub_001 extends Array < string > {}
export interface PlanWorkoutActivity {
    "workoutType": string,
    "days": __PlanWorkoutActivity_sub_001,
    "time": string,
    "trainer": string
}
export interface Subscription_0 {
    "id": any,
    "discount": number,
    "price": number,
    "title": string,
    "pricePerClass": number,
    "invoiceSent": boolean,
    "isCurrent": boolean
}
export interface Date {}
interface __Trainer_sub_001 extends Array < any > {}
export interface Trainer {
    "firstName": string,
    "fullName": string,
    "_id": string,
    "phone": string,
    "lastName": string,
    "workoutKey": string,
    "workouts": __Trainer_sub_001,
    "position": string,
    "avatar": string,
    "name": string
}
export interface Workout {
    "_id": string,
    "name": string,
    "workoutType": WorkoutType,
    "trainer_id": string,
    "time": string,
    "trainer": Trainer,
    "date": Date,
    "place": string
}
interface __Card_sub_001 {
    "year": string,
    "month": string
}
export interface Card {
    "expirationDate": __Card_sub_001,
    "cardProvider": string,
    "cardType": string,
    "lastFourDigits": string
}
export interface UserLogin_0 {
    "username": string,
    "password": string
}
//
export interface fitness2_family_workouts_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_locations_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_create_workout_plan_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_family_users_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_court_schedule_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_courts_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_camp_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_camps_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_workout_types_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_login_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
interface __abc_chatbotResponse_sub_002 {
    "text": string,
    "markdown": string,
    "type": string
}
interface __abc_chatbotResponse_sub_001 extends Array < __abc_chatbotResponse_sub_002 > {}
export interface abc_chatbotResponse {
    "responses": __abc_chatbotResponse_sub_001
}
//
export interface fitness2_users_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_workout_plans_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_trainers_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_user_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_next_workout_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_trainer_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_delete_workout_plan_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_book_court_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_book_workout_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface fitness2_available_workouts_serviceResponse {
    "requestBody": string,
    "requestParams": string
}
//
export interface fitness2_book_camp_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface ContactsServiceResponse {}