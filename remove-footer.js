const fs = require('fs');

let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Footer.tsx', 'utf8');
const textToRemove = `<p className="flex items-center gap-1.5 font-medium">
            <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
          </p>`;

c = c.replace(textToRemove, '');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Footer.tsx', c);
console.log('Removed');
