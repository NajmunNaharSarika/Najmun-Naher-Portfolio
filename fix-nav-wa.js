const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Navbar.tsx', 'utf8');
c = c.replace('<FaWhatsapp className="w-3.5 h-3.5 text-black dark:text-black" />', '<FaWhatsapp className="w-3.5 h-3.5" />');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Navbar.tsx', c);
console.log('Fixed WhatsApp icon color');
