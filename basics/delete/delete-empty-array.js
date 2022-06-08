// delete the mealType which has an empty array of items
const order = [
    {
        "2022/06/08": {
            "Breakfast": {
                "items": [
                    "item1",
                    "item2",
                    "item3"
                ]
            },
            "Lunch": {
                "items": []
            },
            "Dinner": {
                "items": [
                    "item1",
                    "item2",
                    "item3"
                ]
            }
        }
    },
    {
        "2022/06/09": {
            "Breakfast": {
                "items": []
            },
            "Lunch": {
                "items": []
            },
            "Dinner": {
                "items": [
                    "item1",
                    "item2",
                    "item3"
                ]
            }
        }
    },
    {
        "2022/06/10": {
            "Breakfast": {
                "items": []
            },
            "Lunch": {
                "items": []
            },
            "Dinner": {
                "items": []
            }
        }
    }
]

order.forEach(orderObj => {
    for (let obj in orderObj) {
        // console.log(orderObj[obj])
        for (let mealType in orderObj[obj]) {
            // console.log(orderObj[obj][mealType].items.length)
            if (orderObj[obj][mealType].items.length === 0) {
                delete orderObj[obj][mealType]
            }
        }
    }
})

console.log(order)