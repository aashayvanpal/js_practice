const bcryptjs = require('bcryptjs')

bcryptjs.genSalt(10)
    .then(function (salt) {
        bcryptjs.hash('nanekure', salt)
            .then(function (encryptedPassword) {
                console.log(encryptedPassword)
            })
    })

bcryptjs.compare('nanekure', '$2a$10$ILG97rfVr/S2tDQ5kfiPfuS7AmGC9dX0sEar.FjFwl3xJi5t6hHRa')
    .then(function (result) {
        console.log(result)
    })