const fs = require('fs');

function rewriteLightMode(filePath, generateLightModeContent) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const lines = content.split('\n');
  let lightStartIndex = -1;
  let darkStartIndex = -1;

  for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('{/* LIGHT MODE')) {
          if (i > 0 && lines[i-1].includes('=====')) {
              lightStartIndex = i - 1;
          } else {
              lightStartIndex = i;
          }
      }
      if (lines[i].includes('{/* DARK MODE')) {
          if (i > 0 && lines[i-1].includes('=====')) {
              darkStartIndex = i - 1;
          } else {
              darkStartIndex = i;
          }
      }
  }

  if (lightStartIndex === -1 || darkStartIndex === -1) {
    console.log('Markers not found in', filePath);
    return;
  }

  const beforeLight = lines.slice(0, lightStartIndex).join('\n') + '\n';
  const darkSection = lines.slice(darkStartIndex).join('\n');
  
  const newLightMode = generateLightModeContent();
  
  fs.writeFileSync(filePath, beforeLight + newLightMode + darkSection);
  console.log('Updated:', filePath);
}

// 1. Hero.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Monochromatic & Highly Aesthetic                              */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-white text-black relative selection:bg-black selection:text-white overflow-hidden">
        
        {/* Subtle animated background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 min-h-screen flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
            
            {/* ── LEFT: Text Content ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/20 text-black/70 text-xs font-semibold mb-8 uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-500 cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Available for Roles
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter mb-4 leading-[0.9]"
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center gap-4 mb-8 h-8"
              >
                <div className="w-8 h-[2px] bg-black" />
                <div className="text-lg sm:text-xl font-medium text-black/60 uppercase tracking-widest">
                  <TypewriterText texts={roles} />
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg text-black/60 leading-relaxed max-w-lg mb-10 font-light"
              >
                {personalInfo.summary}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium text-sm overflow-hidden rounded-none">
                  <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10">Hire Me</span>
                  <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 bg-slate-900 z-10">
                    Hire Me <FiArrowRight className="w-4 h-4" />
                  </span>
                </a>
                
                <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="group inline-flex items-center gap-2 px-8 py-4 border border-black hover:bg-black hover:text-white font-medium text-sm transition-colors duration-500 rounded-none">
                  <FiDownload className="w-4 h-4 group-hover:animate-bounce" /> Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Highly Aesthetic Photo Card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5 flex justify-center items-center lg:justify-end relative"
            >
              <div className="relative group perspective-1000">
                {/* Decorative abstract elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 border border-black/10 rounded-full"
                />
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 w-24 h-24 border border-black/20"
                />

                <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] overflow-hidden bg-slate-100 shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-transform duration-700 hover:-translate-y-2 hover:-translate-x-2 border-2 border-black">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    priority
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm border border-black translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-black font-bold uppercase tracking-widest text-xs mb-1">Software Engineer</p>
                    <p className="text-black/60 text-[10px] uppercase tracking-widest">{personalInfo.address.current}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Minimalist Stat Bar ── */}
        <div className="border-t border-black/10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-black/10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center pt-6 sm:pt-0"
                >
                  <span className="text-4xl sm:text-5xl font-black text-black mb-2">{stat.value}</span>
                  <span className="text-xs text-black/50 font-bold uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
\n`);

// 2. Projects.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Aesthetic Slider & Monochromatic                              */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-slate-50 text-black py-24 relative overflow-hidden">
        
        {/* Abstract background typography */}
        <div className="absolute top-0 left-0 text-[15rem] font-black text-black/[0.02] -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none">
          WORK
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="w-12 h-1 bg-black mb-6" />
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
                Selected Works.
              </h2>
              <p className="text-black/60 text-lg font-light">
                A showcase of technical architecture, clean code, and elegant solutions. Swipe or click through to explore.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex gap-4"
            >
               {/* Controls for the slider */}
               <button 
                 onClick={() => {
                   const container = document.getElementById('project-slider');
                   if(container) container.scrollBy({ left: -350, behavior: 'smooth' });
                 }}
                 className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
               >
                 <FiArrowRight className="w-5 h-5 rotate-180" />
               </button>
               <button 
                 onClick={() => {
                   const container = document.getElementById('project-slider');
                   if(container) container.scrollBy({ left: 350, behavior: 'smooth' });
                 }}
                 className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
               >
                 <FiArrowRight className="w-5 h-5" />
               </button>
            </motion.div>
          </div>

          {/* Filter Chips */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={\`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 \${
                  filter === opt.id
                    ? "bg-black text-white"
                    : "bg-transparent text-black/50 border border-black/20 hover:border-black hover:text-black"
                }\`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>

          {/* Horizontal Scrolling Slider */}
          <div 
            id="project-slider"
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] snap-center shrink-0 flex flex-col"
                >
                  <div className="group relative bg-white border border-black/10 overflow-hidden h-[500px] flex flex-col hover:border-black transition-colors duration-500">
                    
                    {/* Project Image Area */}
                    <div className="relative h-56 w-full bg-slate-100 border-b border-black/10 overflow-hidden">
                      <Image 
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      />
                      <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        {getProjectCategory(project)}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:underline underline-offset-4 decoration-2">
                          {project.title}
                        </h3>
                        <p className="text-black/60 text-sm line-clamp-3 font-light leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies?.slice(0, 3).map((tech, tIdx) => (
                            <span key={tIdx} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-black/70">
                              {tech}
                            </span>
                          ))}
                          {project.technologies?.length > 3 && (
                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black/40">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between border-t border-black/10 pt-6">
                          <Link href={\`/projects/\${project.id}\`} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-50 transition-opacity">
                            View Case Study <FiArrowRight />
                          </Link>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors">
                            <FaGithub className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
\n`);

// 3. Skills.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Monochromatic & Highly Aesthetic                              */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-white text-black py-24 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-6 uppercase">
              Technical Arsenal
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6" />
            <p className="text-lg text-black/60 font-light">
              Mastery across the stack. Focused on enterprise architecture, robust backends, and modern frontend ecosystems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Category 1: Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="border-b-2 border-black pb-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 block">01</span>
                <h3 className="text-xl font-bold tracking-tight">Languages</h3>
              </div>
              <ul className="space-y-4">
                {skills.languages.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-sm font-medium text-black/80 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" /> {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Category 2: Frameworks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="border-b-2 border-black pb-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 block">02</span>
                <h3 className="text-xl font-bold tracking-tight">Frameworks</h3>
              </div>
              <ul className="space-y-4">
                {skills.frameworks.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-sm font-medium text-black/80 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" /> {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Category 3: Databases */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="border-b-2 border-black pb-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 block">03</span>
                <h3 className="text-xl font-bold tracking-tight">Data & Architecture</h3>
              </div>
              <ul className="space-y-4">
                {skills.databases_and_patterns.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-sm font-medium text-black/80 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" /> {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Category 4: Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="border-b-2 border-black pb-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 block">04</span>
                <h3 className="text-xl font-bold tracking-tight">Tools & AI</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    className="px-3 py-1.5 border border-black/20 text-xs font-bold uppercase tracking-wider text-black/70 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
\n`);

// 4. Education.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Education.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Monochromatic & Highly Aesthetic                              */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-slate-50 text-black py-24 relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase">
              Background
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                  <FiBookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Academics</h3>
              </div>

              <div className="space-y-12 pl-6 border-l-2 border-black/10">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-4 border-black rounded-full group-hover:scale-150 transition-transform duration-300" />
                    
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1">
                        {edu.year}
                      </span>
                      <span className="text-xs font-bold text-black/50">
                        {edu.result}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold leading-tight mb-2 group-hover:underline underline-offset-4 decoration-2">{edu.degree}</h4>
                    <p className="text-black/60 font-light text-sm">{edu.institute}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Training Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 border-2 border-black text-black flex items-center justify-center rounded-full">
                  <FiAward className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
              </div>

              <div className="space-y-12 pl-6 border-l-2 border-black/10">
                {training.map((train, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white border-4 border-black/40 rounded-full group-hover:border-black group-hover:scale-150 transition-all duration-300" />
                    
                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest border border-black/20 text-black/70 px-2 py-1">
                        {train.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold leading-tight mb-2 group-hover:underline underline-offset-4 decoration-2">{train.course}</h4>
                    <p className="text-black/60 font-light text-sm">{train.institute}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
\n`);

// 5. Contact.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Monochromatic & Highly Aesthetic                              */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-white text-black py-24 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-20"
          >
            <div className="w-1.5 h-12 bg-black mb-6" />
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter uppercase mb-6">
              Let's Talk
            </h2>
            <p className="text-lg text-black/60 max-w-lg font-light">
              Available for full-time engineering roles. Send a message and I'll reply promptly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Minimalist Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-8">Direct Contact</h3>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Email Address</p>
                    <a href={\`mailto:\${personalInfo.contact.email}\`} className="text-lg sm:text-xl font-medium border-b border-black/20 pb-1 group-hover:border-black transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </div>

                  <div className="group">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Phone / WhatsApp</p>
                    <a href={\`tel:\${personalInfo.contact.phone1}\`} className="text-lg sm:text-xl font-medium border-b border-black/20 pb-1 group-hover:border-black transition-colors">
                      {personalInfo.contact.phone1}
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Location</p>
                    <p className="text-lg sm:text-xl font-medium text-black/80">
                      {personalInfo.address.current}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-black/10">
                <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="group inline-flex items-center justify-between w-full p-6 bg-slate-50 border border-black/10 hover:border-black transition-colors">
                  <div>
                    <span className="block font-bold text-lg mb-1">Curriculum Vitae</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">PDF FORMAT · 156 KB</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <FiDownload className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Animated Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 border border-black/10 relative"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-black -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-black translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-black -translate-x-1/2 translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-black translate-x-1/2 translate-y-1/2" />

              <h3 className="text-2xl font-bold tracking-tight mb-8">Send Inquiry</h3>

              {errorMessage && (
                <div className="p-4 mb-6 bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center gap-3">
                  <FiAlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Transmission Successful</h4>
                  <p className="text-black/60 font-light mb-8">I have received your message and will respond shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="px-8 py-3 border border-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="peer w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent" placeholder="Name" />
                      <label className="absolute left-0 top-3 text-xs font-bold uppercase tracking-widest text-black/40 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black transition-all peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-black">Your Name</label>
                    </div>
                    <div className="relative group">
                      <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="peer w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent" placeholder="Email" />
                      <label className="absolute left-0 top-3 text-xs font-bold uppercase tracking-widest text-black/40 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black transition-all peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-black">Email Address</label>
                    </div>
                  </div>
                  <div className="relative group">
                    <input type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="peer w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent" placeholder="Subject" />
                    <label className="absolute left-0 top-3 text-xs font-bold uppercase tracking-widest text-black/40 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black transition-all peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-black">Subject</label>
                  </div>
                  <div className="relative group">
                    <textarea required rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="peer w-full bg-transparent border-b-2 border-black/20 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent resize-none" placeholder="Message" />
                    <label className="absolute left-0 top-3 text-xs font-bold uppercase tracking-widest text-black/40 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-black transition-all peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-black">Message Details</label>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="group relative w-full overflow-hidden bg-black text-white py-4 font-bold text-xs uppercase tracking-widest disabled:opacity-70">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? "Initiating Transfer..." : "Submit Message"} <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </div>
\n`);
