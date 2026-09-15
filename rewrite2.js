const fs = require('fs');

function rewriteLightMode(filePath, generateLightModeContent) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the exact line containing {/* LIGHT MODE
  const lines = content.split('\n');
  let lightStartIndex = -1;
  let darkStartIndex = -1;

  for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('{/* LIGHT MODE')) {
          // go up to the separator line if it exists
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
    console.log('Markers not found in', filePath, 'L:', lightStartIndex, 'D:', darkStartIndex);
    return;
  }

  const beforeLight = lines.slice(0, lightStartIndex).join('\n') + '\n';
  const darkSection = lines.slice(darkStartIndex).join('\n');
  
  const newLightMode = generateLightModeContent();
  
  fs.writeFileSync(filePath, beforeLight + newLightMode + darkSection);
  console.log('Updated:', filePath);
}

// 2. Projects.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Professional & Clean                                          */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects & Portfolio
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A professional showcase of enterprise .NET applications, clean architecture implementations, and modern web solutions.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  className={\`px-4 py-2 rounded-md text-sm font-semibold transition-colors \${
                    filter === opt.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }\`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          {featuredProject && filter === "all" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
                
                {/* Visual Preview Left */}
                <div className="lg:col-span-6 relative p-8 flex flex-col justify-center bg-slate-100/50">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold uppercase">
                      Featured Work
                    </span>
                    <span className="text-xs font-medium text-slate-500">ASP.NET Core</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies?.slice(0, 5).map((tech, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-white border border-slate-200 text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info & Features Right */}
                <div className="lg:col-span-6 p-8 flex flex-col justify-center border-l border-slate-200 bg-white">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Key Features</h4>
                  {featuredProject.features && (
                    <div className="space-y-3 mb-8">
                      {featuredProject.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                          <FiCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={\`/projects/\${featuredProject.id}\`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm">
                      View Case Study <FiArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors shadow-sm">
                      <FaGithub className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider">
                        {getProjectCategory(project)}
                      </span>
                      <FiFolder className="w-5 h-5 text-slate-400" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies?.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 rounded bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <Link href={\`/projects/\${project.id}\`} className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Details <FiArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center pb-8">
             <a href="https://github.com/NajmunNaharSarika" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-sm">
                <FaGithub className="w-4 h-4" /> View All on GitHub
             </a>
          </div>

        </div>
      </div>
\n`);

// 3. Contact.tsx
rewriteLightMode('c:/Users/USER/Documents/Portfolio/src/components/Contact.tsx', () => `
      {/* ========================================================================= */}
      {/* LIGHT MODE: Professional & Clean                                          */}
      {/* ========================================================================= */}
      <div className="block dark:hidden bg-slate-50 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-base text-slate-600">
              Available for full-time Software Engineer positions, enterprise .NET development, and innovative collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Left */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                    <a href={\`mailto:\${personalInfo.contact.email}\`} className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FiPhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <a href={\`tel:\${personalInfo.contact.phone1}\`} className="text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors block">
                      {personalInfo.contact.phone1}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-sm font-medium text-slate-900">
                      {personalInfo.address.current}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-slate-900">Curriculum Vitae</span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">PDF · 156 KB</span>
                </div>
                <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-sm">
                  <FiDownload className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-center gap-2 mb-6">
                <FiMessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
              </div>

              {errorMessage && (
                <div className="p-4 mb-6 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-600 mb-6">Thank you for reaching out. I'll get back to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="px-6 py-2.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <input type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea required rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none bg-slate-50 focus:bg-white" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors disabled:opacity-70 shadow-sm mt-2">
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <FiSend className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
\n`);
