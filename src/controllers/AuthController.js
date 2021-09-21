const fetch = require("node-fetch");

module.exports = {
  registerView(req, res) {
    return res.render(`signup`);
  },

  loginView(req, res) {
    return res.render(`login`);
  },

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const response = await fetch("http://localhost:3000/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const [, [, token]] = Object.entries(await response.json());
      console.log(token);
      res.cookie("token", token);
      return res.redirect("/configs");
    } catch (error) {
      console.log("erro", error);
      return res.status(401).end();
    }
  },
};
