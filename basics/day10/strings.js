var str1 = 'This is my TEst string        '
var str2 = 'This is the string to join.'

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

console.log(str1.charAt(5))
console.log(str1.concat(str2))
console.log(str2.endsWith('.'))
console.log(str2.includes('the'))
console.log(str2.replace('is','was'))
// console.log(str2.replaceAll('is','was'))
console.log(str2.lastIndexOf('to'))
console.log(str1.slice(1,10)) //extracts part of string
console.log(str1.split(" "))
console.log(str1.split(" ").reverse().join(""))
console.log(str1.substr(1,5))
console.log(str1.trim())
console.log(str1.length)

