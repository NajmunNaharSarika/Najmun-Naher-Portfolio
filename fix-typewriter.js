const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', 'utf8');

c = c.replace('import { TypewriterText } from "./TypewriterText";\n', '');
c = c.replace('import { FiArrowRight, FiDownload, FiMapPin, FiBriefcase } from "react-icons/fi";', 'import { FiArrowRight, FiDownload, FiMapPin, FiBriefcase } from "react-icons/fi";\nimport { useState, useEffect } from "react";');

const typewriterComponent = `
function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const speed = isDeleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, idx, texts]);

  return (
    <span className="font-heading">
      {displayed}
      <span className="animate-cursor ml-0.5 inline-block w-[2px] h-[0.9em] bg-black dark:bg-rose-500 align-middle" />
    </span>
  );
}
`;

c = c.replace('export function Hero', typewriterComponent + '\nexport function Hero');
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', c);
console.log('Fixed TypewriterText');
