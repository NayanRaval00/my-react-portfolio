export const PORTFOLIO_DATA = {
  personal: {
    name: 'Nayan Raval',
    title: 'Senior Backend Engineer & API Architect',
    tagline: 'Building Scalable Backend Systems & AI-Powered Business Solutions',
    shortBio: 'I specialize in designing and deploying enterprise-grade backend architectures, resilient APIs, and automated cloud systems. With 5+ years of experience in Laravel, Node.js, and AWS, I help startups and enterprises optimize performance, secure payment infrastructures, and integrate intelligent AI solutions.',
    email: 'ravalnayan029@gmail.com',
    location: 'Ahmedabad, Gujarat, India',
    experienceYears: '5+',
    linkedin: 'https://www.linkedin.com/in/nayan-raval-224969170/',
    github: 'https://github.com/NayanRaval00',
    dailydev: 'https://app.daily.dev/nayanraval',
    codepen: 'https://codepen.io/nayan029'
  },
  pillars: [
    {
      title: 'Scalable Architecture',
      description: 'Designing distributed microservices, load-balanced server environments, and database clusters that seamlessly scale to support millions of active users.'
    },
    {
      title: 'Resilient API Engineering',
      description: 'Building secure, rate-limited, and versioned RESTful and GraphQL APIs with comprehensive documentation to fuel web and mobile ecosystems.'
    },
    {
      title: 'Cloud Orchestration & AWS',
      description: 'Automating continuous integration, containerization (Docker), and provisioning reliable AWS infrastructures optimized for cost and speed.'
    },
    {
      title: 'AI & Data Integration',
      description: 'Integrating large language models (LLMs), semantic search indices, and message queues (Redis, RabbitMQ) to power intelligent business automation.'
    }
  ],
  experience: [
    {
      company: 'Innoventix Solutions',
      role: 'Senior Backend Engineer & API Architect',
      period: 'Jan 2024 - Present',
      location: 'Ahmedabad, India',
      description: 'Lead developer for enterprise API architectures, cloud infrastructure management, and high-performance server integrations.',
      responsibilities: [
        'Designed and optimized multi-tenant SaaS backend databases, reducing search query latency by 45%.',
        'Implemented event-driven microservices utilizing Redis Streams and RabbitMQ for distributed tasks.',
        'Architected and managed AWS infrastructure including auto-scaling EC2 groups, secure S3, RDS clustering, and CloudFront CDN integration.',
        'Mentored junior developers, introduced test-driven development (TDD), and automated deployment pipelines via GitHub Actions.'
      ],
      technologies: ['Laravel', 'Node.js', 'AWS', 'Redis', 'Docker', 'PostgreSQL', 'GitHub Actions']
    },
    {
      company: 'KudosIntech Software Partners',
      role: 'Backend Developer',
      period: 'Jul 2021 - Dec 2023',
      location: 'Ahmedabad, India',
      description: 'Engineered web applications, custom databases, and secure payment integrations for global enterprise clients.',
      responsibilities: [
        'Built a real-time reservation system utilizing Redis locks, resolving ticket double-bookings during peak traffic spikes.',
        'Integrated complex multi-currency payment gateways (Stripe Connect, Razorpay) with automated invoice generation.',
        'Designed database schemas and implemented high-volume data import workers handling 500k+ rows daily.',
        'Developed modular REST APIs for hybrid mobile applications with OAuth2 and Sanctum authentication.'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'Stripe', 'Redis', 'RESTful APIs', 'Git']
    },
    {
      company: 'Virtual Height IT Services',
      role: 'Junior Backend Developer',
      period: 'Jun 2020 - Jun 2021',
      location: 'Ahmedabad, India',
      description: 'Contributed to server-side business logic development, database administration, and third-party API integrations.',
      responsibilities: [
        'Designed relational database structures, optimized indexes, and tuned queries to improve loading speeds by 30%.',
        'Built backend APIs for travel planning portals and corporate learning management systems (LMS).',
        'Collaborated with frontend teams to resolve cross-origin issues and implement secure cookie-based session handling.',
        'Participated in daily agile stand-ups, code reviews, and bug resolution sprints.'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Postman']
    }
  ],
  skills: [
    {
      category: 'Backend',
      items: [
        { name: 'Laravel (PHP)', level: 'Expert', desc: 'Enterprise frameworks, clean architecture' },
        { name: 'Node.js', level: 'Advanced', desc: 'Asynchronous workers & WebSocket servers' },
        { name: 'Express.js', level: 'Advanced', desc: 'Lightweight, rapid API microservices' },
        { name: 'PHP', level: 'Expert', desc: 'Modern OOP patterns and standard libraries' },
        { name: 'TypeScript', level: 'Advanced', desc: 'Strict static typings & modular code' },
        { name: 'JavaScript', level: 'Expert', desc: 'ES6+, async operations, event loops' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS Cloud', level: 'Advanced', desc: 'EC2, S3, RDS, Lambda, VPC, ECS' },
        { name: 'Docker', level: 'Advanced', desc: 'Containerized multi-service development' },
        { name: 'Nginx', level: 'Advanced', desc: 'Reverse proxy, load balancing & SSL config' },
        { name: 'GitHub Actions', level: 'Advanced', desc: 'CI/CD pipelines & automated testing' }
      ]
    },
    {
      category: 'Database & Caching',
      items: [
        { name: 'MySQL', level: 'Expert', desc: 'Query tuning, profiling & indexing' },
        { name: 'PostgreSQL', level: 'Advanced', desc: 'Relational design & JSONB query optimizations' },
        { name: 'Redis', level: 'Advanced', desc: 'High-speed caching, queues & locking' },
        { name: 'MongoDB', level: 'Intermediate', desc: 'NoSQL document stores & aggregations' }
      ]
    },
    {
      category: 'Payments & Integrations',
      items: [
        { name: 'Stripe API', level: 'Expert', desc: 'Connect, subscriptions & webhooks' },
        { name: 'Razorpay', level: 'Advanced', desc: 'Local bank transfers & checkouts' },
        { name: 'PayPal API', level: 'Advanced', desc: 'Global digital transactions' }
      ]
    },
    {
      category: 'AI & Automation',
      items: [
        { name: 'Gemini API', level: 'Advanced', desc: 'Semantic inference & LLM actions' },
        { name: 'OpenAI API', level: 'Advanced', desc: 'Text classification & structured output' },
        { name: 'AI Agents', level: 'Advanced', desc: 'Autonomous execution pipelines' }
      ]
    },
    {
      category: 'Frontend (Responsive)',
      items: [
        { name: 'React.js', level: 'Advanced', desc: 'SPA state systems & custom hooks' },
        { name: 'Next.js', level: 'Advanced', desc: 'Server-side rendering & API routes' },
        { name: 'Tailwind CSS', level: 'Expert', desc: 'Utility-first utility layouts & custom themes' },
        { name: 'HTML5 & CSS3', level: 'Expert', desc: 'Semantic structures & animations' }
      ]
    },
    {
      category: 'Tools & Workflows',
      items: [
        { name: 'Postman', level: 'Expert', desc: 'API testing, mock servers & scripting' },
        { name: 'Git & GitHub', level: 'Expert', desc: 'Trunk development & merge request reviews' },
        { name: 'Jira & Trello', level: 'Advanced', desc: 'Agile sprints, tasks & milestones' },
        { name: 'Figma', level: 'Advanced', desc: 'Developer mockups & asset extractions' }
      ]
    }
  ],
  projects: [
    {
      id: 'warehouse-management',
      title: 'Enterprise Warehouse Management System (WMS)',
      category: 'System Architecture',
      subtitle: 'Real-time inventory orchestration and synchronization engine',
      problem: 'A retail distributor faced inventory discrepancies and order completion delays due to a legacy database system. Stock changes took up to 15 seconds to sync, leading to double-allocation of goods and warehouse bottlenecks.',
      solution: 'Re-architected the inventory system into a hybrid service. Designed an event-driven stock updater using Node.js and Redis Streams that syncs barcode scanners in real-time. Created secure Laravel REST endpoints for order validations and reporting.',
      challenges: 'Solving high-concurrency race conditions on stock decrements during massive promotional flash sales. Resolved this by leveraging Redis Optimistic Locking and atomic transaction evaluations.',
      outcome: 'Reduced inventory sync delay from 15s to less than 200ms. Eliminated 99.8% of stock discrepancies and boosted warehouse dispatch speeds by 45%.',
      technologies: ['Laravel', 'Node.js', 'Redis Streams', 'PostgreSQL', 'Docker', 'AWS ECS'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+     Real-time scans     +-------------------+
| Barcode Scanners | ----------------------> | Node.js Redis Ingest|
+------------------+                         +-------------------+
                                                       |
                                                       v
+------------------+     Sync endpoints      +-------------------+
|  Laravel REST    | <---------------------- | Redis Stream Queue|
|  Database Engine |                         +-------------------+
+------------------+
        |
        v
+------------------+
|  PostgreSQL DB   |
+------------------+
`
    },
    {
      id: 'event-ticket-booking',
      title: 'High-Concurrency Event Ticket Booking Engine',
      category: 'API Engineering',
      subtitle: 'Real-time seat allocation engine supporting high-load sales',
      problem: 'A popular entertainment platform suffered frequent database locking and crashed during major concert ticket drops, resulting in lost revenue and negative user sentiment.',
      solution: 'Developed an asynchronous reservation queue using Laravel Jobs and a Redis-backed temporary seat-locking mechanism. Created a WebSocket node server for push updates of available seats.',
      challenges: 'Preventing ticket hoarding where users add tickets to carts and hold them indefinitely. Solved this by setting automated 10-minute Redis cache TTLs paired with keyspace expiration events to restore unsold seats to the pool.',
      outcome: 'Handled traffic bursts of 50,000+ bookings per minute with zero double-bookings or database degradation.',
      technologies: ['Laravel', 'Node.js', 'Socket.io', 'Redis', 'MySQL', 'AWS Elastic Beanstalk'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+     Check Availability  +-------------------+
|  Client Browser  | ----------------------> |   WebSocket Hub   |
+------------------+                         +-------------------+
        |                                              |
        v  (Reserve Ticket)                            v  (Temp Lock)
+------------------+                         +-------------------+
|   Laravel API    | ----------------------> | Redis Cache Locks |
+------------------+                         +-------------------+
        |
        v
+------------------+
|  MySQL Master DB |
+------------------+
`
    },
    {
      id: 'dating-app-backend',
      title: 'Geo-Spatial Matching dating App API',
      category: 'Geo-location',
      subtitle: 'High-speed local discovery and chat backend system',
      problem: 'A dating startup faced high API response latency (>3 seconds) when users queried matches nearby, leading to rapid session drops and high churn rates.',
      solution: 'Re-routed proximity matching queries to a dedicated Node.js microservice. Configured PostgreSQL with the PostGIS extension for spatial queries and cached location indexes in Redis.',
      challenges: 'Combining geographical radius checks with complex demographic preferences (age, tags, height) without degrading lookup speed. Solved by writing indexed multi-stage PostgreSQL queries.',
      outcome: 'Proximity search latency dropped by over 90% (from 3s to ~220ms), and user match rates rose by 35%.',
      technologies: ['Node.js', 'Express', 'PostgreSQL (PostGIS)', 'Redis Geo', 'Docker'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+     Coordinates         +-------------------+
|  Mobile Client   | ----------------------> |  Node Proximity   |
+------------------+                         |    Microservice   |
        ^                                    +-------------------+
        |  (Real-Time Matches)                         |
        |                                              v
+------------------+                         +-------------------+
|    Redis Cache   | <---------------------- | PostgreSQL + GIS  |
+------------------+                         +-------------------+
`
    },
    {
      id: 'music-streaming',
      title: 'Secure Media Streaming Engine',
      category: 'Cloud Engineering',
      subtitle: 'Tokenized content delivery network for copyrighted audio',
      problem: 'A media distribution startup suffered audio asset theft and slow streaming load times for global users due to direct public file path configurations.',
      solution: 'Implemented an AWS CloudFront CDN architecture with signed cookies and temporary URLs generated dynamically by a Laravel authentication service.',
      challenges: 'Optimizing and standardizing heterogeneous user-uploaded media types into streamable formats. Integrated AWS MediaConvert to transcode tracks into adaptive HLS (HTTP Live Streaming) segments automatically on upload.',
      outcome: 'Secured all audio tracks, lowered bandwidth egress costs by 35%, and improved playback start speeds by 60%.',
      technologies: ['Laravel', 'AWS S3', 'AWS CloudFront CDN', 'AWS Elemental MediaConvert', 'MySQL'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+     Request Track       +-------------------+
|   Media Client   | ----------------------> |  Laravel Auth API |
+------------------+                         +-------------------+
        |                                              |
        v  (Get Stream with Signed URL)                v  (Sign URL)
+------------------+                         +-------------------+
|  AWS CloudFront  | <---------------------- | AWS CloudFront Key|
+------------------+                         +-------------------+
        |
        v  (HLS Segments)
+------------------+
|    AWS S3 Bucket |
+------------------+
`
    },
    {
      id: 'villa-booking',
      title: 'Dynamic Pricing & Calendar Sync Hotel Engine',
      category: 'SaaS Platform',
      subtitle: 'Multi-channel dynamic billing and calendar synchronization system',
      problem: 'A high-end villa booking agency suffered double-bookings and revenue leakage due to asynchronous calendar syncs across Airbnb, Booking.com, and VRBO.',
      solution: 'Developed a booking engine with a dynamic pricing calculator and built an iCal parser worker scheduled to sync channels every 15 minutes.',
      challenges: 'Reconciling divergent local tax rules and secure multi-tier deposit transactions. Implemented Stripe custom payment flows to authorize holds and capture payments based on scheduling rules.',
      outcome: 'Reduced channel synchronization errors to absolute zero and increased dynamic margins by 18%.',
      technologies: ['Laravel', 'PHP', 'Stripe Connect API', 'Cron Scheduling', 'MySQL'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+    Trigger Sync         +-------------------+
|   iCal Channels  | ----------------------> |   Laravel Sync    |
| (Airbnb, Booking)|                         |   Cron Workers    |
+------------------+                         +-------------------+
                                                       |
                                                       v
+------------------+    Authorize Hold       +-------------------+
|  Stripe Checkout | <---------------------- |   Booking Engine  |
+------------------+                         +-------------------+
                                                       |
                                                       v
                                             +-------------------+
                                             |  MySQL Database   |
                                             +-------------------+
`
    },
    {
      id: 'lms-event-tracking',
      title: 'Enterprise Learning Analytics Tracker (LMS)',
      category: 'Analytics',
      subtitle: 'Asynchronous event collector for SCORM and xAPI statements',
      problem: 'An enterprise corporate training portal had severe database lockups when generating compliance reports because user activity streams were being logged directly into transactional databases.',
      solution: 'Built an analytics ingestion pipeline with Node.js and RabbitMQ, routing logs asynchronously to Elasticsearch for real-time compliance reporting.',
      challenges: 'Ingesting heavy telemetry bursts during corporate-wide learning events without losing progress logs. Implemented RabbitMQ message buffers and bulk database writing queues.',
      outcome: 'Successfully logged 10 million activity logs daily with zero performance impact on core training portals.',
      technologies: ['Node.js', 'Express', 'RabbitMQ', 'Elasticsearch', 'MongoDB'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+    SCORM Telemetry      +-------------------+
|    Learner UI    | ----------------------> |  Node.js Ingest   |
+------------------+                         +-------------------+
                                                       |
                                                       v
+------------------+    Batch indexing       +-------------------+
|  Elasticsearch   | <---------------------- |   RabbitMQ Queue  |
+------------------+                         +-------------------+
`
    },
    {
      id: 'travel-planner-aggregator',
      title: 'Multi-API Travel Search Aggregator',
      category: 'API Engineering',
      subtitle: 'Parallel data fetcher and custom parsing engine',
      problem: 'A travel booking application loaded pages slowly (up to 12s) because it fetched results sequentially from multiple airline and hotel APIs.',
      solution: 'Rebuilt the aggregator engine to perform parallel API calls using Laravel HTTP Client (powered by Guzzle multi-curl hooks) and configured Redis cache adapters for static route identifiers.',
      challenges: 'Handling slow or failed responses from legacy travel provider APIs. Built custom adapter wrappers and timeout rules to guarantee partial results load immediately.',
      outcome: 'Cut search response time from 12s to under 3s, boosting travel checkout completions by 22%.',
      technologies: ['Laravel', 'PHP', 'Guzzle Multi-curl', 'Redis', 'AWS Lambda'],
      github: 'https://github.com/NayanRaval00',
      live: '#',
      diagram: `
+------------------+    Query Request        +-------------------+
|   Client Search  | ----------------------> |  Laravel Search   |
+------------------+                         |    Aggregator     |
        ^                                    +-------------------+
        | (Consolidated Result)                        |
        |                                              v (Parallel Calls)
+------------------+                         +-------------------+
|    Redis Cache   | <---------------------- | GDS & Hotel APIs  |
+------------------+                         +-------------------+
`
    }
  ],
  services: [
    {
      title: 'Backend Systems Engineering',
      description: 'Designing highly efficient server structures, microservices, and databases using Laravel and Node.js. Tailored for heavy business logic and massive scalability.',
      features: ['Distributed Microservices', 'Process Clustering', 'Memory Profiling', 'Database Optimizations']
    },
    {
      title: 'API Design & Architecture',
      description: 'Developing high-availability RESTful, GraphQL, and WebSocket APIs. Focus on low latencies, granular security controls, and clean developer documentations.',
      features: ['Swagger & OpenApi schemas', 'OAuth2 & Sanctum auth', 'Dynamic Rate Limiting', 'Real-Time WebSockets']
    },
    {
      title: 'SaaS Platform Development',
      description: 'Building multi-tenant software-as-a-service engines featuring secure database isolation, dynamic billing subscription rules, and custom integrations.',
      features: ['Stripe & Razorpay Connect', 'Dynamic Pricing Rules', 'iCal Calendar Syncs', 'SaaS Database Isolation']
    },
    {
      title: 'AI Integrations & Automation',
      description: 'Connecting large language models (LLMs), automated agents, semantic data parsers, and custom vector search utilities into existing business architectures.',
      features: ['OpenAI & Gemini Integrations', 'Autonomous Agent Sprints', 'Vector Embeddings', 'Intelligent Chat Workflows']
    },
    {
      title: 'AWS Cloud Deployment',
      description: 'Setting up secure, fail-proof, and auto-scaling cloud servers. Managing continuous integration and deployment pipelines to keep updates quick and safe.',
      features: ['Auto-scaling ECS & EC2', 'AWS RDS & S3 setups', 'CI/CD GitHub Actions', 'Docker Containers']
    },
    {
      title: 'Technical Consulting & Performance Tuning',
      description: 'Analyzing performance blocks, debugging database queries, auditing API securities, and providing high-level tech advice to business owners.',
      features: ['Database Index Tuning', 'Security Vulnerability Audits', 'Infrastructure Cost Auditing', 'Software Design Architecture']
    }
  ],
  whyWorkWithMe: [
    {
      title: '5+ Years Professional Depth',
      description: 'Proven track record of coding, building, and deploying real-world production code for global businesses and start-up products.'
    },
    {
      title: 'Enterprise Scalability Focus',
      description: 'Expertise in databases and queues (Redis, RabbitMQ) that ensure services stay fast and online during heavy traffic spikes.'
    },
    {
      title: 'AWS Cloud Expertise',
      description: 'Familiarity with cloud infrastructures, allowing me to build robust hosting configurations that minimize monthly billings.'
    },
    {
      title: 'Payment Infrastructure Expertise',
      description: 'In-depth experience integrating complex payment flows, dynamic subscriptions, and multi-party checkouts securely.'
    },
    {
      title: 'Business & Product Driven',
      description: 'I understand business goals. I translate product ideas into technical requirements that drive revenue and protect assets.'
    },
    {
      title: 'Clean Code & TDD Advocate',
      description: 'Committed to writing testable, well-documented, clean code following SOLID principles, making systems easy to maintain.'
    }
  ],
  certifications: [
    { id: 1, name: 'Google AI Professional Certificate', image: '/imgs/google_certificate.png', issuer: 'Google AI' }
  ],
  blog: [
    {
      id: 1,
      title: 'Optimizing Laravel Database Performance for 10M+ Records',
      category: 'Laravel & Database',
      description: 'How to use database indexing, subqueries, cursor pagination, and query caching in Laravel to keep page response times under 200ms when processing millions of data rows.',
      time: '6 min read',
      date: 'Jun 12, 2026'
    },
    {
      id: 2,
      title: 'Architecting Real-Time Microservices with Node.js and Redis Streams',
      category: 'System Design & Node.js',
      description: 'A step-by-step look at building a highly concurrent, event-driven backend system. We cover message validation, consumer groups, and handling race conditions.',
      time: '8 min read',
      date: 'May 28, 2026'
    },
    {
      id: 3,
      title: 'AWS Deployment Best Practices for High Availability & Low Cost',
      category: 'DevOps & AWS',
      description: 'Step-by-step guidelines for provisioning AWS EC2 auto-scaling groups, configuring RDS clusters, and optimizing CDN caching strategies to reduce infrastructure costs.',
      time: '10 min read',
      date: 'Apr 15, 2026'
    },
    {
      id: 4,
      title: 'Integrating Gemini & OpenAI APIs into Laravel Backend Architectures',
      category: 'AI Integration',
      description: 'Best practices for handling large model responses, structured JSON outputs, queue jobs for rate limits, and implementing secure API key storages.',
      time: '7 min read',
      date: 'Mar 10, 2026'
    },
    {
      id: 5,
      title: 'Designing Resilient RESTful APIs: Rate Limiting, Versioning & JWT',
      category: 'API Security',
      description: 'How to build production-grade APIs that protect database resources from brute-force queries and provide clean, versioned integrations for third-party clients.',
      time: '5 min read',
      date: 'Jan 22, 2026'
    }
  ]
};
