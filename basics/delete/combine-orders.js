// task -> combine all orders , seperate customer 
// combine 2 orders and make into given format
const order1 = {
    "_id": "628680d825e6670b978dfac1",
    "items": [
        {
            "category": [
                "all",
                "breakfast",
                "snacks"
            ],
            "_id": "60bbe5107c404b00155f507d",
            "name": "Sabudana khichdi",
            "price": "70",
            "measured": "plate",
            "imgUrl": "default.png",
            "display": true,
            "ingredients": "",
            "recipie": "",
            "__v": 0,
            "isSelected": true,
            "quantity": "13"
        }
    ],
    "customer": {
        "fullName": "Hemanth Belsare",
        "phoneNumber": 9902875111.0,
        "email": "test@gmail.com",
        "address": "Rohan Vasanta Appt. Marathahalli",
        "queries": "",
        "eventName": "Upanayana",
        "numberOfPeople": 15,
        "eventDate": "2022-05-19T17:38:37.715Z",
        "eventTime": "23:08",
        "homeDelivery": true,
        "service": false,
        "customer_id": "5f5dec1c7eef4a2e47018f6e"
    },
    "status": "completed",
    "__v": 0
}
const order2 = {
    "_id": "628681e925e6670b978dfac2",
    "items": [
        {
            "category": [
                "all",
                "breakfast",
                "snacks"
            ],
            "_id": "5f1a6e530bb9761000e7b8a5",
            "name": "Coconut chutney",
            "price": 20,
            "imgUrl": "Coconut-chutney.jpeg",
            "display": true,
            "__v": 0,
            "measured": "plate",
            "isSelected": true,
            "quantity": "8"
        },
        {
            "category": [
                "all",
                "lunch",
                "dinner"
            ],
            "_id": "5f0e98411406c00fc3e4ba9f",
            "name": "Dal rice (Varan bhat)",
            "price": "50",
            "imgUrl": "Varan-bhat.jpeg",
            "display": true,
            "__v": 0,
            "measured": "plate",
            "ingredients": "",
            "recipie": "",
            "isSelected": true,
            "quantity": "8"
        },
        {
            "category": [
                "all",
                "lunch",
                "dinner"
            ],
            "_id": "5f5a5a8b39040a0ff812c7dc",
            "name": "Aamrakhand",
            "price": "60",
            "imgUrl": "Aamrakhand.jpeg",
            "display": true,
            "__v": 0,
            "measured": "plate",
            "isSelected": true,
            "quantity": "8"
        },
        {
            "category": [
                "all",
                "lunch",
                "dinner"
            ],
            "_id": "5f8fdb2fb4b194857212035f",
            "name": "Ladiesfinger curry (Bhendi-chi bhaaji)",
            "price": "60",
            "imgUrl": "bhendi image",
            "display": true,
            "__v": 0,
            "measured": "plate",
            "isSelected": true,
            "quantity": "8"
        },
        {
            "category": [
                "all",
                "lunch",
                "dinner"
            ],
            "_id": "5f0e97ec1406c00fc3e4ba9e",
            "name": "Chapati (Poli)",
            "price": "20",
            "imgUrl": "chapati.jpg",
            "display": true,
            "__v": 0,
            "measured": "plate",
            "ingredients": "Wheat floor \nsalt \noil\nwater",
            "recipie": "step1 : make dough with water,flour, salt and oil\nstep 2 : mix mould\nstep 3 : make chapati\nstep 4 : roast on tava",
            "isSelected": true,
            "quantity": "8"
        },
        {
            "category": [
                "all",
                "Lunch",
                "Dinner"
            ],
            "_id": "60b2485f0516e5001591827f",
            "name": "Pickle",
            "price": 10,
            "measured": "plate",
            "imgUrl": "Pickle",
            "display": true,
            "ingredients": "",
            "recipie": "",
            "__v": 0,
            "isSelected": true,
            "quantity": "8"
        },
        {
            "category": [
                "all",
                "lunch",
                "dinner"
            ],
            "_id": "60bbcba67c404b00155f5076",
            "name": "Plain papad",
            "price": "20",
            "measured": "pc",
            "imgUrl": "default.png",
            "display": true,
            "ingredients": "",
            "recipie": "",
            "__v": 0,
            "isSelected": true,
            "quantity": "8"
        }
    ],
    "customer": {
        "fullName": "Hemanth Belsare",
        "phoneNumber": 9902875111.0,
        "email": "test@gmail.com",
        "address": "Rohan Vasanta Appt. Marathahalli",
        "queries": "",
        "eventName": "Upanayana",
        "numberOfPeople": 8,
        "eventDate": "2022-05-19T05:30:00.152Z",
        "eventTime": "11:00",
        "homeDelivery": true,
        "service": false,
        "customer_id": "5f5dec1c7eef4a2e47018f6e"
    },
    "status": "completed",
    "__v": 0,
    "transport": {
        "medium": "Auto",
        "rate": 890
    }
}

const order3 = { Dates: [] }

const extractCustomerObject = (order) => {
    return {
        fullName: order.customer.fullName,
        phoneNumber: order.customer.phoneNumber,
        email: order.customer.email,
        address: order.customer.address,
        customer_id: order.customer.customer_id,
    }
}

const extractOrderInfo = (order) => {
    return {
        eventName: order.customer.eventName,
        eventDate: order.customer.eventDate,
        eventTime: order.customer.eventTime,
        numberOfPeople: order.customer.numberOfPeople,
        queries: order.customer.queries,
        homeDelivery: order.customer.homeDelivery,
        service: order.customer.service,
    }
}

// Step0 : verify matching customer id/ names
if (order1.customer.fullName === order2.customer.fullName) {
    console.log('names are same!')

    // Step1 : extract customer object and remove quries,eventName,NoOfPeople,eventDate,eventTime,homeDelievery,service
    const customer = extractCustomerObject(order1)
    // Step 2: create the customer object
    // console.log('customer extracted:', customer)

    // Step 3: Creating Dates[]:
    const date = extractOrderInfo(order1)
    // console.log('Date extracted:', date)

    console.log(date)
    order3.customer = customer
    order3.Dates[date.eventDate] = date
    // console.log(order3)

    // order3.Dates.push[]


}
else { console.log('names do not match error !') }



// if date is same : check for eventTime
// if eventTime > 7am && eventTime < 11am => add breakfast Property
// if eventTime > 11am && eventTime < 4pm => add Lunch Property
// if eventTime > 4am && eventTime < 12pm => add Dinner Property

// add items[],quries,eventName,NoOfPeople,eventDate,eventTime,homeDelievery,service properties based on eventTime




// const order3 =

//     order3.customer = order1.customer
// order3.Dates[order1.customer.eventDate].push(...order1.items)
// console.log(order3)

// console.log(order3)