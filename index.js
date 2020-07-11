const http = require("http");
const path = require("path");
const fs = require("fs");
const { extname } = require("path");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Bad Smith", age: 48 },
  //       { name: "John Doe", age: 30 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  //Build File Path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension of file
  let extName = path.extname(filePath);

  //initial content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "img/png";
      break;
    case ".jpg":
      contentType = "img/jpg";
      break;
  }

  //Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        //Some Server Error
        res.writeHead(500);
        res.end(`server Error:${(err, code)}`);
      }
    } else {
      //success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
