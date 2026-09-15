const fs = require('fs');

let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/app/layout.tsx', 'utf8');
c = c.replace('defaultTheme="system"', 'defaultTheme="light"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/app/layout.tsx', c);

console.log('Theme set to light');
