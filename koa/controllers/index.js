module.exports = {
  "GET /": async (ctx, next) => {
    ctx.render("index.html", {
      title: "首页",
    });
  },
};
