const express = require("express");
const app = express();
const port = 3000;

const { Band } = require("./Band");
const { Musician } = require("./Musician");
const { sequelize } = require("./db");

app.get("/bands", async (req, res) => {
  try {
    let bands = await Band.findAll({ include: [{ model: Musician }] });
    res.json(bands);
  } catch (err) {
    res.send(err.message);
  }
});

app.get("/bands/:id", async (req, res) => {
  try {
    let band = await Band.findAll({
      include: [{ model: Musician }],
      where: { id: req.params.id },
    });
    res.json(band);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(port, () => {
  sequelize.sync();
  console.log("App listening on port " + port);
});
