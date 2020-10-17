const characters = require("../data/characters")

module.exports = function (app) {

    app.get("/api/characters", (req, res) => {
        return res.json(characters);
    });

    app.get("/api/characters/:character", (req, res) => {
        let chosen = req.params.character;
        for (let i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }
        return res.json(false);
    })

    app.post("/api/characters/new", (req, res) => {
        let newCharacter = req.body;
        newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
        characters.push(newCharacter);
        res.json(newCharacter);
    });


}

