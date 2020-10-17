const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

const characters = require("./data/characters")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});