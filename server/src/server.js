const express = require(`express`);
const app = express();
const port = 8000;

//
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, "src", "App.js"));
});



app.listen((port, () => {
  console.log(`Listening on localhost:${ port }`);
}));
