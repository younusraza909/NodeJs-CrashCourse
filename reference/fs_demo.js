const fs = require("fs");
const path = require("path");

//Create fr
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created");
// });

//Create And Write File
//It over writes
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File Written to....");
//   }
// );

//Append File
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File Written to....");

//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I Love Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("File Written to....");
//       }
//     );
//   }
// );

//Read File
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "Hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Renamed");
  }
);
