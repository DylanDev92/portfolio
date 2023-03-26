const fs = require("fs");

var list = JSON.parse(fs.readFileSync("data/myprojects.json"));

export default function handler(req, res) {

  console.log(list);

  res.status(200).json(list);
}
