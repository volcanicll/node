module.exports = {
  "POST /signin": async (ctx, next) => {
    var email = ctx.request.body.email || "",
      password = ctx.request.body.password || "";
    if (email === "admin@example.com" && password === "123456") {
      ctx.render("signin-ok.html", {
        title: "登录成功",
        name: "Mr Node",
      });
    } else {
      ctx.render("signin-failed.html", {
        title: "登录失败",
      });
    }
  },
};
