const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', 'utf8');
c = c.replace('className="block dark:hidden bg-white text-black py-24 relative overflow-hidden"', 'className="block dark:hidden bg-white text-black pt-12 pb-24 relative overflow-hidden"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', c);
