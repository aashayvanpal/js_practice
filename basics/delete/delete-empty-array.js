// delete the mealType which has an empty array of items
const util = require('util')

const order = [
    {
        "2022/06/09": {
            "Breakfast": {
                "items": []
            },
            "Lunch": {
                "items": [
                    "item1",
                    "item2",
                    "item3"
                ]
            },
            "Dinner": {
                "items": []
            }
        }
    },
    {
        "2022/06/10": {
            "Breakfast": {
                "items": []
            },
            "Lunch": {
                "items": [
                    "item1",
                    "item2",
                    "item3"
                ]
            },
            "Dinner": {
                "items": []
            }
        }
    },
    {
        "2022/06/15": {
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

// console.log(order)
console.log(util.inspect(order, false, null, true /* enable colors */))
// console.log(JSON.stringify(util.inspect(order, false, null, true /* enable colors */)))
