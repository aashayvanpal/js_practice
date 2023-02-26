const orderDates = [
    {
        "20/07/2022": {
            "Breakfast": {
                "items": [
                    {
                        "category": [
                            "all",
                            "lunch",
                            "dinner"
                        ],
                        "_id": "5f0e97ec1406c00fc3e4ba9e",
                        "name": "Chapati (Poli)",
                        "price": 30,
                        "imgUrl": "chapati.jpg",
                        "display": true,
                        "__v": 0,
                        "measured": "plate",
                        "ingredients": "Wheat floor \nsalt \noil\nwater",
                        "recipie": "step1 : make dough with water,flour, salt and oil\nstep 2 : mix mould\nstep 3 : make chapati\nstep 4 : roast on tava",
                        "isSelected": true,
                        "quantity": 1
                    },
                    {
                        "category": [
                            "all",
                            "lunch",
                            "dinner"
                        ],
                        "_id": "5f0e98411406c00fc3e4ba9f",
                        "name": "Dal rice (Varan bhat)",
                        "price": 45,
                        "imgUrl": "Varan-bhat.jpeg",
                        "display": true,
                        "__v": 0,
                        "measured": "plate",
                        "ingredients": "",
                        "recipie": "",
                        "isSelected": true,
                        "quantity": 1
                    }
                ],
                "amount": 75
            },
            "Lunch": {
                "items": [
                    {
                        "category": [
                            "all",
                            "snacks",
                            "lunch",
                            "dinner"
                        ],
                        "_id": "5f0ed242b29adb2f2e871e74",
                        "name": "Pav Bhaji",
                        "price": 120,
                        "imgUrl": "Pav-bhaji.jpg",
                        "display": true,
                        "__v": 0,
                        "measured": "plate",
                        "isSelected": true,
                        "quantity": 1
                    },
                    {
                        "category": [
                            "all",
                            "lunch",
                            "dinner"
                        ],
                        "_id": "5f0e986a1406c00fc3e4baa0",
                        "name": "Koshimbir",
                        "price": 20,
                        "imgUrl": "https://4.bp.blogspot.com/-NFiP0gTnPMI/UXagKVV0mJI/AAAAAAAAH34/3ZEVOqvNc2s/s1600/Romaine+Lettuce+Salad+or+Koshimbir.JPG",
                        "display": true,
                        "__v": 0,
                        "measured": "plate",
                        "ingredients": "cucumber",
                        "recipie": "mix",
                        "isSelected": true,
                        "quantity": 1
                    }
                ],
                "amount": 140
            },
            "Dinner": {
                "items": []
            }
        }
    },
    {
        "21/07/2022": {
            "Dinner": {
                "items": [
                    {
                        "category": [
                            "all",
                            "breakfast",
                            "snacks"
                        ],
                        "_id": "5f111c8db49da512d92abee5",
                        "name": "Dosa",
                        "price": 70,
                        "imgUrl": "Dosa.jpg",
                        "display": true,
                        "__v": 0,
                        "measured": "plate",
                        "isSelected": true,
                        "quantity": 1
                    },
                    {
                        "category": [
                            "all",
                            "breakfast"
                        ],
                        "_id": "5f13ed53b24c191f839c1d9d",
                        "name": "Lemon Rice",
                        "price": 40,
                        "imgUrl": "Lemon-rice.jpeg",
                        "display": true,
                        "__v": 0,
                        "measured": "plate",
                        "isSelected": true,
                        "quantity": 1
                    }
                ],
                "amount": 110
            },
            "Breakfast": {
                "items": []
            },
            "Lunch": {
                "items": []
            }
        }
    }
]

// console.log(orderDates)

let amounts = []
for (let index in orderDates) {
    for (let date in orderDates[index]) {
        for (let orderType in orderDates[index][date]) {
            amounts.push(orderDates[index][date][orderType].amount)
        }
    }
}
console.log(amounts)

amounts = amounts.filter((element) => element !== undefined).reduce((acc, sum) => sum += acc)

console.log(amounts)
