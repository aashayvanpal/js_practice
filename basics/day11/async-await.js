const posts = [
    { title: 'post1', body: 'body1' },
    { title: 'post2', body: 'body2' },
    { title: 'post3', body: 'body3' },
]


function getPosts() {
    let output = ''
    setTimeout(() => {
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        })
        console.log(output)
        document.getElementById('myPosts').innerHTML = output
    }, 3000)
}

// getPosts()

// function createNewPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)

// }


// createNewPost({ title: 'new post', body: 'new body' })



function createNewPost(post) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post)

            const error = false
            if (!error) {
                res()
            } else {
                rej('something is wrong')
            }
        }, 2000)
    })


}

// Async await 
// async function init() {
//     await createNewPost({ title: 'new post', body: 'new body' })

//     getPosts()
// }

// init()




// Async await fetch
async function getUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await users.json()
    // setTimeout(() => { console.log(data) }, 5000)
    console.log('data', data)
    let output = ''
    data.forEach(user => {
        output += `<li>${user.name}</li>`
    })
    console.log('output :', output)
    document.getElementById('myPosts').innerHTML = output

}
getUsers()



// createNewPost({ title: 'new post', body: 'new body' })
//     .then(getPosts)
//     .catch(msg => { console.log(msg) })


// // promise.all
// const promise1 = Promise.resolve('Hi aashay')
// const promise2 = 20
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'goodbye is resolved')
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//     console.log(values)
// })

