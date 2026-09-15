const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/app/globals.css', 'utf8');

c = c.replace("--font-inter: 'Inter', system-ui, -apple-system, sans-serif;", "--font-inter: 'Century Gothic', system-ui, -apple-system, sans-serif;");
c = c.replace("--font-outfit: 'Outfit', 'Inter', system-ui, sans-serif;", "--font-outfit: 'Century Gothic', 'Inter', system-ui, sans-serif;");

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/app/globals.css', c);
console.log('Fixed fonts in globals.css');
