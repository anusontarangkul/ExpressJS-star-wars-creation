const characters = require("../data/characters")

module.exports = function (app) {

    app.get("/api/characters", (req, res) => {
        return res.json(characters);
    });

    app.post("/api/characters/new", (req, res) => {
        let newCharacter = req.body;
        newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
        characters.push(newCharacter);
        res.json(newCharacter);
    });


}

// app.get("/add", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/add.html"))
// })