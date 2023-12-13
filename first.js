const fs = require("fs");

const text = "这是一段测试文字，node写入文件";

// 读取文件
const readFile = (path) => {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("data", data);
      writeFileToLocal(data);
    }
  });
};

const timeNow = Date.now().valueOf().toString();

// 写入文件
const writeFileToLocal = (data, fileName = timeNow) => {
  fs.writeFile(fileName, data, function (err) {
    if (!err) {
      console.log("写入成功");
    } else {
      console.log(err);
    }
  });
};

// readFile("../easy_car/yyc-ui/public/favicon.ico");

// 异步打开文件
// console.log("准备打开文件！");
// fs.open("write.txt", "r+", function (err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("文件打开成功！");
// });
// var http = require("http");
// var querystring = require("querystring");

// var postHTML =
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   "<body>" +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   "</form>" +
//   "</body></html>";

// http
//   .createServer(function (req, res) {
//     var body = "";
//     req.on("data", function (chunk) {
//       body += chunk;
//     });
//     req.on("end", function () {
//       // 解析参数
//       body = querystring.parse(body);
//       // 设置响应头部信息及编码
//       res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });

//       if (body.name && body.url) {
//         console.log("输出提交的数据");
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//       } else {
//         console.log("输出html");
//         // 输出表单
//         res.write(postHTML);
//       }
//       res.end();
//     });
//   })
//   .listen(3000);

// const Koa = require('')
