/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "Chat": {
        "type": "object",
        "properties": {
            "users": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "uid": {
                "type": "string"
            },
            "lastVisited": {
                "type": "object",
                "properties": {}
            },
            "picture": {
                "type": "string"
            },
            "createdAt": {
                "type": "Date"
            },
            "updatedAt": {
                "type": "Date"
            },
            "name": {
                "type": "string"
            },
            "lastMessage": {
                "type": "ChatMessage"
            }
        }
    },
    "PlanWorkout": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "activities": {
                "type": "array",
                "items": [{
                    "type": "PlanWorkoutActivity"
                }]
            }
        }
    },
    "UserLogin": {
        "type": "object",
        "properties": {
            "username": {
                "type": "string"
            },
            "password": {
                "type": "string"
            }
        }
    },
    "WorkoutType": {
        "type": "object",
        "properties": {
            "icon": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "Function_0": {
        "type": "Function"
    },
    "Card_0": {
        "type": "object",
        "properties": {
            "cardProvider": {
                "type": "string"
            },
            "cardType": {
                "type": "string"
            },
            "lastFourDigits": {
                "type": "string"
            },
            "expirationDate": {
                "type": "object",
                "properties": {
                    "year": {
                        "type": "string"
                    },
                    "month": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "PlanWorkout_0": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "activities": {
                "type": "array",
                "items": [{
                    "type": "PlanWorkoutActivity_0"
                }]
            }
        }
    },
    "ChatMessage_0": {
        "type": "object",
        "properties": {
            "text": {
                "type": "string"
            },
            "richLinks": {
                "type": "array",
                "items": [{
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string"
                        },
                        "image": {
                            "type": "string"
                        }
                    }
                }]
            },
            "uid": {
                "type": "string"
            },
            "createdAt": {
                "type": "Date_0"
            }
        }
    },
    "Date_0": {
        "type": "object",
        "properties": {}
    },
    "Any_0": {
        "type": "any"
    },
    "Observable_0": {
        "type": "Observable"
    },
    "Chat_0": {
        "type": "object",
        "properties": {
            "users": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "updatedAt": {
                "type": "Date_0"
            },
            "name": {
                "type": "string"
            },
            "picture": {
                "type": "string"
            },
            "uid": {
                "type": "string"
            },
            "lastVisited": {
                "type": "object",
                "properties": {}
            },
            "lastMessage": {
                "type": "ChatMessage_0"
            },
            "createdAt": {
                "type": "Date_0"
            }
        }
    },
    "Subscription": {
        "type": "object",
        "properties": {
            "id": {
                "type": "any"
            },
            "discount": {
                "type": "number"
            },
            "isCurrent": {
                "type": "boolean"
            },
            "invoiceSent": {
                "type": "boolean"
            },
            "price": {
                "type": "number"
            },
            "title": {
                "type": "string"
            },
            "pricePerClass": {
                "type": "number"
            }
        }
    },
    "User": {
        "type": "object",
        "properties": {
            "avatar": {
                "type": "string"
            },
            "location": {
                "type": "any"
            },
            "regDate": {
                "type": "Date"
            },
            "lastName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "_id": {
                "type": "string"
            },
            "org": {
                "type": "Org"
            }
        }
    },
    "Trainer_0": {
        "type": "object",
        "properties": {
            "lastName": {
                "type": "string"
            },
            "workouts": {
                "type": "array",
                "items": [{
                    "type": "any"
                }]
            },
            "firstName": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "fullName": {
                "type": "string"
            },
            "avatar": {
                "type": "string"
            },
            "_id": {
                "type": "string"
            },
            "workoutKey": {
                "type": "string"
            }
        }
    },
    "PlanWorkoutActivity_0": {
        "type": "object",
        "properties": {
            "days": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "time": {
                "type": "string"
            },
            "workoutType": {
                "type": "string"
            },
            "trainer": {
                "type": "string"
            }
        }
    },
    "ChatMessage": {
        "type": "object",
        "properties": {
            "uid": {
                "type": "string"
            },
            "text": {
                "type": "string"
            },
            "richLinks": {
                "type": "array",
                "items": [{
                    "type": "object",
                    "properties": {
                        "description": {
                            "type": "string"
                        },
                        "image": {
                            "type": "string"
                        },
                        "title": {
                            "type": "string"
                        }
                    }
                }]
            },
            "createdAt": {
                "type": "Date"
            }
        }
    },
    "Org_0": {
        "type": "object",
        "properties": {
            "ad": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "colorTheme": {
                "type": "number"
            },
            "_id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "Org": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "ad": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "colorTheme": {
                "type": "number"
            },
            "_id": {
                "type": "string"
            }
        }
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Observable": {
        "type": "Observable"
    },
    "Workout_0": {
        "type": "object",
        "properties": {
            "trainer_id": {
                "type": "string"
            },
            "date": {
                "type": "Date_0"
            },
            "_id": {
                "type": "string"
            },
            "trainer": {
                "type": "Trainer_0"
            },
            "time": {
                "type": "string"
            },
            "place": {
                "type": "string"
            },
            "workoutType": {
                "type": "WorkoutType_0"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "WorkoutType_0": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "icon": {
                "type": "string"
            }
        }
    },
    "User_0": {
        "type": "object",
        "properties": {
            "regDate": {
                "type": "Date_0"
            },
            "location": {
                "type": "any"
            },
            "_id": {
                "type": "string"
            },
            "org": {
                "type": "Org_0"
            },
            "avatar": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "PlanWorkoutActivity": {
        "type": "object",
        "properties": {
            "workoutType": {
                "type": "string"
            },
            "days": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "time": {
                "type": "string"
            },
            "trainer": {
                "type": "string"
            }
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "Subscription_0": {
        "type": "object",
        "properties": {
            "id": {
                "type": "any"
            },
            "discount": {
                "type": "number"
            },
            "price": {
                "type": "number"
            },
            "title": {
                "type": "string"
            },
            "pricePerClass": {
                "type": "number"
            },
            "invoiceSent": {
                "type": "boolean"
            },
            "isCurrent": {
                "type": "boolean"
            }
        }
    },
    "Date": {
        "type": "object",
        "properties": {}
    },
    "Promise_0": {
        "type": "Promise"
    },
    "Number": {
        "type": "number"
    },
    "Trainer": {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string"
            },
            "fullName": {
                "type": "string"
            },
            "_id": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "workoutKey": {
                "type": "string"
            },
            "workouts": {
                "type": "array",
                "items": [{
                    "type": "any"
                }]
            },
            "position": {
                "type": "string"
            },
            "avatar": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "Workout": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "workoutType": {
                "type": "WorkoutType"
            },
            "trainer_id": {
                "type": "string"
            },
            "time": {
                "type": "string"
            },
            "trainer": {
                "type": "Trainer"
            },
            "date": {
                "type": "Date"
            },
            "place": {
                "type": "string"
            }
        }
    },
    "Card": {
        "type": "object",
        "properties": {
            "expirationDate": {
                "type": "object",
                "properties": {
                    "year": {
                        "type": "string"
                    },
                    "month": {
                        "type": "string"
                    }
                }
            },
            "cardProvider": {
                "type": "string"
            },
            "cardType": {
                "type": "string"
            },
            "lastFourDigits": {
                "type": "string"
            }
        }
    },
    "UserLogin_0": {
        "type": "object",
        "properties": {
            "username": {
                "type": "string"
            },
            "password": {
                "type": "string"
            }
        }
    },
    "fitness2_family_workouts_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/4d4a8b00-01f2-407c-bbdd-ef016efa7133/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_locations_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/04b002db-e951-4777-8d15-ad9a0dfe2033/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "orgId": {
                                "type": "string",
                                "default": "5d722f4e2e22d7186fb68cde"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_create_workout_plan_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/76642d9a-1c7c-4fff-919f-46f040eec798/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            },
                            "workoutPlan": {
                                "type": "string",
                                "default": "{ \"name\": \"my test\", \"activities\": [{ \"trainer\": \"5dce8d9a0f0d313ba86c8253\", \"workoutType\": \"5dcbe8de2e22d74e29b21411\", \"time\": \"9:00 AM\", \"days\": [\"Monday\", \"Wednesday\"]}]}"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "text/plain"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_family_users_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/ec2bb8f2-5238-40b0-bd04-88d9e4790065/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_court_schedule_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/5c0c8b79-7e5c-422a-852a-24f74bb21135/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "date": {
                                "type": "string",
                                "default": "1579035600000"
                            },
                            "orgId": {
                                "type": "string",
                                "default": "5d722f4e2e22d7186fb68cde"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_courts_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/690ca317-e723-42b3-bf40-b4ffd385a2e2/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "orgId": {
                                "type": "string",
                                "default": "5d722f4e2e22d7186fb68cde"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_camp_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/705d060e-9efc-48e7-8602-a187b824fd71/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "campTermId": {
                                "type": "string",
                                "default": "5ddced372e22d74c51b2d3dd"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_camps_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/42f9820b-dbc0-4569-a076-9454a2cf6a17/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "orgId": {
                                "type": "string",
                                "default": "5d722f4e2e22d7186fb68cde"
                            },
                            "term": {
                                "type": "string",
                                "default": "1"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_workout_types_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/1872cc9c-276a-4a8e-8a24-418dd0aba8e7/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_login_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/c967c4d4-caca-4f78-bca2-b81b0847d969/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data",
                                "default": "{ \"username\": \"c@exadel.com\", \"password\": \"1\" }"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "text/plain"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "abc_chatbot": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/ai/chatbots/conversation/321592f2-b596-4c9c-8eca-b18ec9ee753c"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "text": {
                                "type": "string",
                                "default": "hello"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "user_id": {
                                "type": "string",
                                "default": "change_me"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "responses": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "text": {
                                            "type": "string"
                                        },
                                        "markdown": {
                                            "type": "string"
                                        },
                                        "type": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_users_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/a64ea320-bb59-4d4d-9f6c-5b8e4f27f97b/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "locationId": {
                                "type": "string",
                                "default": "5dcab1440f0d310a1a8e4be5"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_workout_plans_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/e1593872-46d6-489f-863e-f51fbd95f6cf/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_trainers_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/e00c62b4-bf14-4010-ad60-c8aab94ef247/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "locationId": {
                                "type": "string",
                                "default": "5dcab1440f0d310a1a8e4be5"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_user_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/cdb491d9-d25f-4a8b-992f-cb0990647dc8/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_next_workout_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/08236d1f-f624-420b-9a6f-e62fc742b956/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_trainer_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/79a132da-62c0-4bc8-8cb8-725a17ddc605/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "trainerId": {
                                "type": "string",
                                "default": "5dcaba010f0d310a1a8e4bf5"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_delete_workout_plan_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/12aa4ba9-b291-402c-a5bd-7dee546cf07d/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string",
                                "default": "5e26a9dc26c8a73c69d6d25c"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "25613b7d-4fa7-439e-b44a-a1859bae2a3c"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "text/plain"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_book_court_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/2ee341a3-5a9b-450c-8087-db93cdf4fda2/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data",
                                "default": "null"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_book_workout_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/e3f6d9af-2499-4ea5-b207-27a3fd7184a5/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5da21dc50f0d314ec169e36c"
                            },
                            "workoutId": {
                                "type": "string",
                                "default": "5e15475426c8a76f1e4e8e10"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "text/plain"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_available_workouts_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/48590cf5-b9bc-4dd5-8e21-398a63cc2689/exec"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "userId": {
                                "type": "string",
                                "default": "5d698bad0f0d3118ea5a28f8"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestBody": {
                                        "type": "string"
                                    },
                                    "requestParams": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "fitness2_book_camp_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/code/50ad198b-7b69-4016-973f-c2a955d56de9/exec"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data",
                                "default": "{ \"users\": [\"5da21de20f0d314ec169e36e\"] }"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "campTermId": {
                                "type": "string",
                                "default": "5ddced372e22d74c51b2d3e1"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string",
                                "default": "{Settings.sessionToken}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "requestParams": {
                                        "type": "string"
                                    },
                                    "requestBody": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "ContactsService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {}
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */