import { Store } from "@tanstack/store";

const seedUsers = [
    [
        {
            "id": "514717466",
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Kristina",
                "last": "Jenkins"
            },
            "location": {
                "street": {
                    "number": 7269,
                    "name": "Shady Ln Dr"
                },
                "city": "Orange",
                "state": "Western Australia",
                "country": "Australia",
                "postcode": 4157,
                "coordinates": {
                    "latitude": "-83.2896",
                    "longitude": "75.0612"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "kristina.jenkins@example.com",
            "login": {
                "uuid": "87dbbcaf-8d3a-4c34-a451-13a5a00a0a42",
                "username": "bigbutterfly312",
                "password": "farley",
                "salt": "YoOXopkq",
                "md5": "f4772f2bb716300d4413674927f5f49d",
                "sha1": "732511d1542d87a18c3b9d56c8a7ba2271e6e83c",
                "sha256": "ac50b7702c2d7ba2fddc03f8198ca138b34b4c637dd3cb65d8465e574aa7b1f5"
            },
            "dob": {
                "date": "1982-03-03T00:01:00.803Z",
                "age": 43
            },
            "registered": {
                "date": "2009-03-31T10:59:01.772Z",
                "age": 15
            },
            "phone": "00-0606-2112",
            "cell": "0425-790-523",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/65.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Servando",
                "last": "Barela"
            },
            "location": {
                "street": {
                    "number": 6373,
                    "name": "Prolongación Alemán"
                },
                "city": "Etzatlán",
                "state": "Nuevo Leon",
                "country": "Mexico",
                "postcode": 38176,
                "coordinates": {
                    "latitude": "28.0344",
                    "longitude": "-143.4680"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "servando.barela@example.com",
            "login": {
                "uuid": "e19ad495-f957-48a9-b97a-c1ebfd5a6651",
                "username": "heavymouse792",
                "password": "monaco",
                "salt": "9LwDFNLm",
                "md5": "e8df2f24fb5b7995760f9ee822f8b6c3",
                "sha1": "8ec28e161c4ae5e436fa69e2cd67e851e76b44fb",
                "sha256": "b814c5bba3c456521588a507c220a9d1e3950dcd827f648bffa72c4d7626ae3a"
            },
            "dob": {
                "date": "1949-08-06T12:46:46.739Z",
                "age": 75
            },
            "registered": {
                "date": "2020-01-11T11:38:40.851Z",
                "age": 5
            },
            "phone": "(698) 363 4309",
            "cell": "(610) 561 5408",
            "id": "25 80 48 4591 2",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/74.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
            },
            "nat": "MX"
        }
    ]
]
const userStore = new Store(seedUsers)
export default userStore;
