const items = [
    {
        "category": [
            "all",
            "lunch",
            "dinner"
        ],
        "_id": "5f0e97ec1406c00fc3e4ba9e",
        "name": "Chapati",
        "price": 15,
        "imgUrl": "chapati.jpg",
        "display": true,
        "__v": 0,
        "measured": "plate",
        "ingredients": "Wheat floor \nsalt \noil\nwater",
        "recipie": "step1 : make dough with water,flour, salt and oil\nstep 2 : mix mould\nstep 3 : make chapati\nstep 4 : roast on tava",
        "isSelected": true,
        "quantity": "30",
        "rating": 3
    },
    {
        "category": [
            "all",
            "breakfast",
            "snacks"
        ],
        "_id": "5f1a6e530bb9761000e7b8a5",
        "name": "Coconut chutney",
        "price": 10,
        "imgUrl": "Coconut-chutney.jpeg",
        "display": true,
        "__v": 0,
        "measured": "plate",
        "isSelected": true,
        "quantity": "10",
        "rating": 4
    },
    {
        "category": [
            "all",
            "snacks"
        ],
        "_id": "5f1a6ed60bb9761000e7b8ab",
        "name": "Mix Pakoda",
        "price": 45,
        "imgUrl": "Mix-pakoda.jpeg",
        "display": true,
        "__v": 0,
        "measured": "plate",
        "isSelected": true,
        "quantity": "10"
    },
    {
        "category": [
            "all",
            "lunch",
            "dinner"
        ],
        "_id": "5f901a8cb4b194857212036e",
        "name": "Moong usal",
        "price": 40,
        "imgUrl": "moog usal image",
        "display": true,
        "__v": 0,
        "measured": "plate",
        "isSelected": true,
        "quantity": "10"
    },
    {
        "category": [
            "all",
            "lunch",
            "dinner"
        ],
        "_id": "5fcbcf78b9349432c792b713",
        "name": "Pulao",
        "price": 60,
        "measured": "plate",
        "imgUrl": "Plao image",
        "display": true,
        "__v": 0,
        "isSelected": true,
        "quantity": "10"
    },
    {
        "category": [
            "all",
            "Sweets"
        ],
        "_id": "60b246b10516e5001591827b",
        "name": "Basundi",
        "price": 50,
        "measured": "plate",
        "imgUrl": "Basundi",
        "display": true,
        "ingredients": "",
        "recipie": "",
        "__v": 0,
        "isSelected": true,
        "quantity": "10"
    },
    {
        "category": [
            "all",
            "Lunch",
            "Dinnet"
        ],
        "_id": "60b247050516e5001591827c",
        "name": "Capsicum sabji",
        "price": 45,
        "measured": "plate",
        "imgUrl": "Capsi",
        "display": true,
        "ingredients": "",
        "recipie": "",
        "__v": 0,
        "isSelected": true,
        "quantity": "10"
    },
    {
        "category": [
            "all",
            "Lunch",
            "Dinner"
        ],
        "_id": "60b2485f0516e5001591827f",
        "name": "Pickle",
        "price": 5,
        "measured": "plate",
        "imgUrl": "Pickle",
        "display": true,
        "ingredients": "",
        "recipie": "",
        "__v": 0,
        "isSelected": true,
        "quantity": "10"
    }
]


// console.log(items)



//Find index of specific object using findIndex method.    
objIndex = items.findIndex((obj => obj._id == "5f0e97ec1406c00fc3e4ba9e"));

//Log object to Console.
console.log("Before update: ", items[objIndex])

//Update object's name property.
items[objIndex].rating = 5

//Log object to console again.
console.log("After update: ", items[objIndex])