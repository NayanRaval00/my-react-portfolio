import HyperOne from '../customH1/HyperOne';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaServer, FaCode, FaRocket } from 'react-icons/fa';

const projectsList = [
  {
    id: 1,
    title: 'E-Commerce Microservices Engine',
    category: 'Backend Architecture',
    description: 'A highly scalable, event-driven e-commerce backend built with Node.js and Express. Integrates RabbitMQ for queue management, Redis for high-speed caching, and PostgreSQL for persistent data. Fully containerized with Docker.',
    tech: ['Node.js', 'Express', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Docker'],
    icon: <FaServer className="text-4xl text-sky-400" />,
    github: 'https://github.com/NayanRaval00',
    live: '#'
  },
  {
    id: 2,
    title: 'Robust Laravel RESTful API',
    category: 'API Development',
    description: 'A Laravel-based API engine featuring role-based access control, advanced query filtering, rate limiting, and complete API documentation via Swagger. Built with Sanctum authentication for security.',
    tech: ['Laravel', 'PHP', 'Sanctum', 'MySQL', 'Swagger', 'JWT'],
    icon: <FaCode className="text-4xl text-indigo-400" />,
    github: 'https://github.com/NayanRaval00',
    live: '#'
  },
  {
    id: 3,
    title: 'Real-Time Chat Infrastructure',
    category: 'WebSockets',
    description: 'A high-performance WebSocket server utilizing Socket.io and a Redis adapter for pub/sub message distribution across multiple nodes. Manages thousands of active connections with low latency.',
    tech: ['Node.js', 'WebSockets', 'Socket.io', 'Redis', 'Express'],
    icon: <FaRocket className="text-4xl text-emerald-400" />,
    github: 'https://github.com/NayanRaval00',
    live: '#'
  },
  {
    id: 4,
    title: 'Automated CI/CD Testing Suite',
    category: 'DevOps & QA',
    description: 'End-to-end integration testing infrastructure using WebDriverIO and Cucumber. Integrated with GitHub Actions for automated pull request checks and deployment gates.',
    tech: ['WebDriverIO', 'Cucumber JS', 'JavaScript', 'GitHub Actions'],
    icon: <FaDatabase className="text-4xl text-amber-400" />,
    github: 'https://github.com/NayanRaval00',
    live: '#'
  }
];

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto px-4 my-20">
      <div className="flex flex-col items-center mb-12">
        <HyperOne value={'Projects'} />
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify mt-2 max-w-4xl">
          Here is a curated selection of backend architectures, robust REST APIs, real-time services, and testing frameworks that I have designed and deployed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="glass-card p-6 flex flex-col justify-between h-full hover:scale-[1.02] duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
                <div className="p-2 bg-slate-200/50 dark:bg-white/5 rounded-lg">
                  {project.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-base mb-6 text-justify leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-200/50 text-slate-700 dark:bg-white/10 dark:text-gray-200 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 border-t border-slate-200 dark:border-white/10 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  <FaGithub className="mr-2 text-lg" /> Source Code
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2 text-sm" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
