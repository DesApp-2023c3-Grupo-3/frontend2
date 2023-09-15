import { Message } from "../../types";

export const advertisingMessages : Message [] = [
    {
        "topic": "advertising", 
        "id":1,
        "data": {
            "advertisingTypeId": 1,
            "id": 1,
            "payload": "imagen1.png",
            "title": "imagen"
        }
    },
    {
        "topic": "advertising", 
        "id":2,
        "data": {
            "advertisingTypeId": 2,
            "id": 2,
            "payload": "imagen2.png",
            "title": "imagen"
        }
    },
    {
        "topic": "advertising",
        "id":3, 
        "data": {
            "advertisingTypeId": 3,
            "id": 3,
            "payload": "imagen3.png",
            "title": "imagen"
        }
    }
]