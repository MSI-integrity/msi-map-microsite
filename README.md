# MSI Map Microsite

## Steps for development
- Install gulp and bower with `npm install -g  gulp bower`
- Install dependencies with `npm install && bower install`
- Build Sass and JS with `npm run build`
- Run server with `npm start` (access at localhost:3000)
- For development, watch source files with `npm run watch`
- JSON must be manually generated with `yarn convert-data`, which reads from data/data.xlsx and writes to data/data.json. Then check in data.json into
git
