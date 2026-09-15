const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/app/globals.css', 'utf8');

const scrollbarCode = `/* Scrollbar Styling */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 9999px;
}
.dark ::-webkit-scrollbar-thumb {
  background: rgba(244, 63, 94, 0.3);
}`;

c = c.replace(scrollbarCode, '');
c = c.replace(/::-webkit-scrollbar[\s\S]*?\}/g, '');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/app/globals.css', c);
