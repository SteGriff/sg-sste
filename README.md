# sg-sste

Ste's Simple Templating Engine

Blog post: <https://stegriff.co.uk/upblog/why-i-made-an-express-template-engine/>

## Tech

- ES Modules
- Node 14+
- Express

## Usage

The base template is always `main.htm`

Whatever template you specify in `res.render` will be inserted into `main.htm` in place of the `<content />` placeholder.

Whatever options/data are passed to the view will be inserted into your view or template in place of the `_STE_DATA` placeholder.

## Install

Add the single file `sste.js` to the project.

Add the import and deps (built-ins):

```
import path from "path";
import { sste } from "./sste.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Set the view engine:

```
app.engine('htm', sste);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'htm');
```
