const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(fs.readFileSync("index.html"));
      res.end();
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(fs.readFileSync("about.html"));
      res.end();
      break;
    case "/contact":
    case "/contact-me":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(fs.readFileSync("contact-me.html"));
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.write(fs.readFileSync("404.html"));
      res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
