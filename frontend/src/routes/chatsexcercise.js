const router = require("express").Router();
let Excercise = require("../modals/chat.modal");

router.route("/").get((req, res) => {
  Excercise.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req, res);

  const newExcercise = new Excercise({ username, description, duration, date });
  newExcercise
    .save()
    .then(() => res.json("username"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
