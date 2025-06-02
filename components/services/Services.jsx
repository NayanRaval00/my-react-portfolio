import ServicesCard from './ServiceCard';
import HyperOne from '../customH1/HyperOne';

const cards = [
  // {
  //   src: '/svg/frontend.svg',
  //   alt: 'Agile Testing & Sprint Management',
  //   title: 'Agile Testing & Sprint Management',
  //   description:
  //     'Streamline QA processes in Agile to ensure timely and well-tested feature deliveries.',
  // },
  {
    src: '/svg/api.svg',
    alt: 'Backend Architecture & API Design',
    title: 'Backend Architecture & API Design',
    description:
      'Design clean, scalable backend architecture and RESTful APIs to support robust and maintainable systems.',
  },
  {
    src: '/svg/database.svg',
    alt: 'Database Management & Optimization',
    title: 'Database Management & Optimization',
    description:
      'Build and optimize relational databases using MySQL or PostgreSQL for high-performance and secure data handling.',
  },
  {
    src: '/svg/backend.svg',
    alt: 'Authentication & Security',
    title: 'Authentication & Security',
    description:
      'Implement secure authentication, authorization, and data protection using Laravel Sanctum, JWT, and best practices.',
  },
  {
    src: '/svg/devops.jpg',
    alt: 'DevOps & API Deployment',
    title: 'DevOps & API Deployment',
    description:
      'Automate deployment pipelines and manage versioned APIs for seamless and reliable product releases.',
  }

];

const Services = () => {
  const breif = `As a skilled Backend Developer, I specialize in building secure, scalable, and high-performance server-side applications. With expertise in Laravel, Node.js, and PHP, I design robust RESTful APIs, manage efficient databases, and architect backend systems that ensure reliability and seamless user experiences. From designing clean code structures to integrating CI/CD workflows, I bring development efficiency and technical excellence to every project.`;
  return (
    <div id="services">
      <HyperOne value={'Services'} />
      <div className="my-5">
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {breif}
        </p>
      </div>
      <div className="my-12 grid lg:grid-cols-4 sm:grid-cols-1 m-5 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
            className={`logo${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
