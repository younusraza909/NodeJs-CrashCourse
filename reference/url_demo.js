const url = require("url");

const myUrl = new URL(
  "hhtp://mywebsite.com:800/hello.html?id=100&status=active"
);

//Serialize URL
console.log(myUrl.href);

//Host(root Domain)
console.log(myUrl.host);

//Host Name DOes Not get port
console.log(myUrl.hostname);

//Path Name
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add Param
console.log(myUrl.searchParams.append("abc", "123"));
console.log(myUrl.searchParams);

//Loop

myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));

myUrl.searchParams.forEach((value) => console.log(`${value}`));
