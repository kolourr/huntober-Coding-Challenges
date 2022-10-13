// Make sure you understand these before taking a look at the question:
// Replace (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
// Split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet


function domainName(str){

let arr  =  str.replace('www.', '').split('//')
let url = arr.filter(item => !item.includes(':') )
return url.join("").split(".")[0]


}


console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
console.log(domainName("http://google.com"))
console.log(domainName("https://youtube.com"))

console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))

