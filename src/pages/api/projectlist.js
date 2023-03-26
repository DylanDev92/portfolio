const fs = require("fs");
const path = require('path');

const file = path.join(process.cwd(), 'data', 'myprojects.json');
const stringified = fs.readFileSync(file, 'utf8');

var list = JSON.parse(stringified);

export default function handler(req, res) {

  console.log(list);

  res.status(200).json(list);
}
