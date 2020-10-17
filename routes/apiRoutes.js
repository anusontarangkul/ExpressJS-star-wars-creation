const characters = require("../data/characters")

module.exports = function (app) {
    app.get("/api/characters", (req, res) => {
        return res.json(characters);

    });

}

// app.get("/add", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/add.html"))
// })