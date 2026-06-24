# sg-sste

Ste's Simple Templating Engine

Blog post: <https://stegriff.co.uk/upblog/why-i-made-an-express-template-engine/>

## Tech

- ES Modules
- Node 14+
- Express

## Usage

The base template is always `main.htm`

Whatever template you specify in `res.render` will be inserted into `main.htm` in place of the `<content/>` placeholder.
