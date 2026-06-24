import express from "express";
import * as dotenv from "dotenv";
import path from "path";
import { sste } from "./sste.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Express
const app = express();

// Set the view engine to our custom engine
app.engine('htm', sste);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'htm');

app.use(express.static("public"));

// Route to render a view
app.get('/', (req, res) => {
    res.render('index');
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

