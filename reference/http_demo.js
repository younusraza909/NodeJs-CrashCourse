const http = require("http");

//create Server
http
  .createServer((req, res) => {
    //Write Response
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => {
    console.log("Server Running");
  });
