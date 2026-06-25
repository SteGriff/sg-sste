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
