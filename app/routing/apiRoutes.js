
const users = require("../data/users.js");

module.exports = function (app) {

  app.get("/api/users", (req, res) => {
    res.json(users)
  });

  app.post("/api/users", (req, res) => {
    const newUser     = req.body;
    let divergenceArr = [];
    let matches;

    users.forEach((user) => {
      divergenceArr.push(divergence(newUser, user));
    });
    
    const bestMatch = Math.min.apply(null, divergenceArr)

    divergenceArr.forEach((diff, i) => {
      if (diff === bestMatch) {
        matches = users[i] 
      }
    });

    users.push(newUser);
    users.push(matches)
    
  });


  function divergence(x, y) {
    return x.scores.reduce((accumulator, currentScore, i) => {
      return accumulator + Math.abs(currentScore - y.scores[i])
    },0)
  }

}
 

