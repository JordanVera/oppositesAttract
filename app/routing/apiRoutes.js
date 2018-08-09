
const users = require("../data/users.js");

module.exports = function (app) {

  app.get("/api/users", (req, res) => res.json(users));

  app.post("/api/users", (req, res) => {
    const newIndividual = req.body;
	
    let divergences = []
  }
}
