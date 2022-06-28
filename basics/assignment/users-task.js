var mongoose = require('mongoose');

// connection 
mongoose.connect('mongodb://localhost:27017/assignment');

// getting reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connection Successful!");

    // defining Schema

    // Table Name: users
    // Columns: name, mobile, email, is_active, created_at(All mandatory fields)
    var UserSchema = mongoose.Schema({
        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        email: { type: String, required: true },
        is_active: { type: Boolean, required: true },
        created_at: { type: String, required: true }
    })


    // Table Name: user_profiles
    // Columns: user: <users table ref>, age, dob, marital_status (only "user, dob age"
    //     mandatory fields)
    var User_ProfileSchema = mongoose.Schema({
        user: { type: String, required: true },
        age: { type: Number, required: true },
        dob: { type: String, required: true },
        marital_status: String
    })

    // schema modelling

    var User = mongoose.model('User', UserSchema);
    var User_Profile = mongoose.model('User_Profile', User_ProfileSchema);


    // adding 10 documents
    var user1 = new User({
        name: 'user1',
        mobile: 1235789415,
        email: 'test1@gmail.com',
        is_active: true,
        created_at: 1656337892653
    });

    var user2 = new User({
        name: 'user2',
        mobile: 1285789415,
        email: 'test2@gmail.com',
        is_active: false,
        created_at: 1656887892653
    });

    var user3 = new User({
        name: 'user3',
        mobile: 1235969415,
        email: 'test3@gmail.com',
        is_active: true,
        created_at: 1656647892653
    });

    var user4 = new User({
        name: 'user4',
        mobile: 1995789415,
        email: 'test4@gmail.com',
        is_active: true,
        created_at: 1656475892653
    });

    var user5 = new User({
        name: 'user5',
        mobile: 1235669415,
        email: 'test5@gmail.com',
        is_active: false,
        created_at: 1656334392653
    });

    var user6 = new User({
        name: 'user6',
        mobile: 1235499415,
        email: 'test6@gmail.com',
        is_active: true,
        created_at: 1657777892653
    });

    var user7 = new User({
        name: 'user7',
        mobile: 1235744415,
        email: 'test7@gmail.com',
        is_active: true,
        created_at: 1656431582653
    });

    var user8 = new User({
        name: 'user8',
        mobile: 1235784715,
        email: 'test8@gmail.com',
        is_active: false,
        created_at: 1647337892653
    });

    var user9 = new User({
        name: 'user9',
        mobile: 1235711415,
        email: 'test9@gmail.com',
        is_active: true,
        created_at: 1654737892653
    });

    var user10 = new User({
        name: 'user10',
        mobile: 1235733415,
        email: 'test10@gmail.com',
        is_active: true,
        created_at: 1336337892653
    });


    [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10].forEach(user => {
        user.save(function (err, user) {
            if (err) return console.error(err);
            console.log(user.name + " saved to users collection.");
        });
    })


    var user_profile1 = new User_Profile({
        user: 1336337892653,
        age: 22,
        dob: '2020-10-04T10:00:00.000Z',
        marital_status: 'married'
    })

    var user_profile2 = new User_Profile({
        user: 1654737892653,
        age: 16,
        dob: '1999-11-01T10:00:00.000Z',
        marital_status: 'single'
    })

    var user_profile3 = new User_Profile({
        user: 1656431582653,
        age: 18,
        dob: '1745-02-06T10:00:00.000Z',
        marital_status: 'married'
    })

    var user_profile4 = new User_Profile({
        user: 1336337892653,
        age: 22,
        dob: '2021-04-08T10:00:00.000Z',
        marital_status: 'married'
    })

    var user_profile5 = new User_Profile({
        user: 1656431582653,
        age: 22,
        dob: '1985-07-10T10:00:00.000Z',
        marital_status: null
    })

    var user_profile6 = new User_Profile({
        user: 1656887892653,
        age: 60,
        dob: '1846-05-09T10:00:00.000Z',
        marital_status: 'single'
    })

    var user_profile7 = new User_Profile({
        user: 1656431582653,
        age: 80,
        dob: '2016-12-12T10:00:00.000Z',
        marital_status: 'married'
    })
    var user_profile8 = new User_Profile({
        user: 1656337892653,
        age: 14,
        dob: '2015-08-02T10:00:00.000Z',
        marital_status: 'married'
    })

    var user_profile9 = new User_Profile({
        user: 1656887892653,
        age: 22,
        dob: '2019-11-11T10:00:00.000Z',
        marital_status: null
    })

    var user_profile10 = new User_Profile({
        user: 1656337892653,
        age: 22,
        dob: '2020-08-05T10:00:00.000Z',
        marital_status: 'married'
    })


    const arr = [user_profile1, user_profile2, user_profile3, user_profile4, user_profile5, user_profile6, user_profile7, user_profile8, user_profile9, user_profile10,]
    arr.forEach(profile => {
        profile.save(function (err, user) {
            if (err) return console.error(err);
            console.log(profile.user + " saved to users_profile collection.");
        });
    })

})