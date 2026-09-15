const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', 'utf8');

const regex = /\{\/\* Decorative abstract elements \*\/\}[\s\S]*?border-black\/20"[\s\S]*?\/>/g;
c = c.replace(regex, '');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', c);
