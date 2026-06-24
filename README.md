# sg-sste

Ste's simple templating engine

## Tech

- ES Modules
- Node 14+
- Express

## Usage

The base template is always `main.htm`

Whatever template you specify in `res.render` will be inserted into `main.htm` in place of the `<content/>` placeholder.