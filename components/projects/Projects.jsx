import { useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolioData';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { FiExternalLink, FiX, FiCode, FiCheckCircle, FiAlertCircle, FiLayers, FiImage } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const projects = PORTFOLIO_DATA.projects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Case Studies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Enterprise Architecture & Projects
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card p-6 flex flex-col justify-between h-full group cursor-pointer hover:scale-[1.01] transition-transform duration-200"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/10">
                  {project.category}
                </span>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-250">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed text-justify">
                  {project.problem}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center group-hover:translate-x-1 transition-transform duration-200">
                  Case Study <FaArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Full Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 scrollbar-none animate-fade-in"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 px-6 py-4 flex justify-between items-center z-20">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/10">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">id: {selectedProject.id}</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium font-heading">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {/* Problem & Solution Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5 flex flex-col space-y-2">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center">
                        <FiAlertCircle className="h-4 w-4 mr-1.5" />
                        Business Problem
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-5 flex flex-col space-y-2">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center">
                        <FiCheckCircle className="h-4 w-4 mr-1.5" />
                        Solution Implemented
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                      Technology Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture & Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center">
                        <FiLayers className="h-4 w-4 mr-1.5 text-indigo-500" />
                        Solution Architecture Description:
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
                        {selectedProject.architecture}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center">
                        <FiCheckCircle className="h-4 w-4 mr-1.5 text-emerald-500" />
                        Business Outcomes & Metrics:
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify font-semibold">
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Technical Challenges */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                      Key Engineering Challenges & Resolutions:
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  {/* Visual Schema / Mockup Representation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Flowchart Diagram */}
                    {selectedProject.diagram && (
                      <div className="space-y-3">
                        <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center">
                          <FiCode className="h-4 w-4 mr-1.5 text-sky-600 dark:text-sky-400" />
                          Architecture Flowchart:
                        </h4>
                        <pre className="bg-slate-950 dark:bg-black/60 border border-slate-800 dark:border-white/5 p-4 rounded-xl font-mono text-[10px] sm:text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
                          {selectedProject.diagram}
                        </pre>
                      </div>
                    )}

                    {/* Screenshot Mockup Container */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center">
                        <FiImage className="h-4 w-4 mr-1.5 text-indigo-600 dark:text-indigo-400" />
                        UI & Console Mockup details:
                      </h4>
                      <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl p-5 flex flex-col justify-center items-center h-48 sm:h-56 relative overflow-hidden group">
                        <div className="absolute top-2 left-2 flex space-x-1">
                          <span className="h-2 w-2 rounded-full bg-red-400" />
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        </div>
                        <FiImage className="h-10 w-10 text-slate-400 dark:text-slate-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 text-center">
                          {selectedProject.screenshots}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-500 mt-2 font-mono text-center">
                          Simulated system snapshot
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Code links */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-slate-200 dark:border-white/5">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <FaGithub className="mr-2 h-4 w-4" /> Source Code
                    </a>
                    {selectedProject.live !== '#' && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
                      >
                        <FiExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
