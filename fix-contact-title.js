const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', 'utf8');

c = c.replace('<div className="w-1.5 h-12 bg-black mb-6" />\n            <h2', '<h2');
c = c.replace('Let\'s Talk\n            </h2>', 'Let\'s Talk\n            </h2>\n            <div className="w-16 h-1 bg-black mx-auto mb-6" />');

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', c);
