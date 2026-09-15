const fs = require('fs');

// Fix Education.tsx
let edu = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Education.tsx', 'utf8');
edu = edu.replace('className="block dark:hidden bg-slate-50 text-black pt-12 pb-24 relative overflow-hidden"', 'className="block dark:hidden bg-slate-50 text-black pt-12 pb-12 relative overflow-hidden"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Education.tsx', edu);

// Fix Contact.tsx
let contact = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', 'utf8');
contact = contact.replace('<section id="contact" className="py-24 relative overflow-hidden">', '<section id="contact" className="relative overflow-hidden">');
contact = contact.replace('className="block dark:hidden bg-white text-black py-24 relative overflow-hidden"', 'className="block dark:hidden bg-white text-black pt-12 pb-24 relative overflow-hidden"');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', contact);

console.log('Padding adjusted');
