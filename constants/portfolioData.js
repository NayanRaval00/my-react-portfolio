export const PORTFOLIO_DATA = {
  personal: {
    name: 'Nayan Raval',
    title: 'Senior Backend Engineer & API Architect',
    tagline: 'Building Scalable Software Solutions for Growing Businesses',
    shortBio: 'Senior Backend Engineer with 5+ years of experience building enterprise applications using Laravel, Node.js, AWS, REST APIs, and modern cloud technologies.',
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
      title: 'Business Value First',
      description: 'Engineering systems with focus on cost optimization, security compliance, high availability, and clear alignment with business growth goals.'
    },
    {
      title: 'Solution Architecture',
      description: 'Designing distributed microservices, queue systems, caching strategies, and robust data models to handle complex transactional loads.'
    },
    {
      title: 'Technical Leadership',
      description: 'Mentoring junior developers, introducing code quality benchmarks, implementing TDD, and establishing reliable CI/CD release guidelines.'
    },
    {
      title: 'Problem Solving',
      description: 'Resolving difficult race conditions, performance bottlenecks, dynamic subscription billing issues, and third-party API sync lag.'
    }
  ],
  experience: [
    {
      company: 'Innoventix Solutions',
      role: 'Senior Backend Engineer & API Architect',
      period: 'Jan 2024 - Present',
      location: 'Ahmedabad, India',
      description: 'Leading solution architecture and AWS deployments for high-concurrency enterprise products and SaaS platforms.',
      responsibilities: [
        'Optimized PostgreSQL search queries and table structures, reducing API latency from 1.2s to sub-200ms for 10M+ rows.',
        'Architected and implemented RabbitMQ and Redis Streams ingest pipelines, supporting 5M+ daily transactional state triggers.',
        'Reduced AWS infrastructure monthly spending by 28% through auto-scaling groups, spot instance usage, and CloudFront caching optimization.',
        'Established test suites (PHPUnit, Jest) and automated Git release checks through GitHub Actions pipelines, reducing bugs in production by 40%.'
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
        { name: 'Laravel (PHP)', level: 'Expert', desc: 'Enterprise architecture, custom packages, Eloquent performance' },
        { name: 'Node.js', level: 'Advanced', desc: 'Asynchronous event engines, Socket.io, microservices' },
        { name: 'Express.js', level: 'Advanced', desc: 'Lightweight REST APIs and request routing routers' },
        { name: 'PHP OOP', level: 'Expert', desc: 'Clean coding standards, SOLID practices, namespaces' },
        { name: 'TypeScript', level: 'Advanced', desc: 'Statically typed microservices & clean design' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', level: 'Advanced', desc: 'Dynamic rendering, custom hooks, context state management' },
        { name: 'Next.js', level: 'Advanced', desc: 'Server-side rendering, routing structure, static site builds' },
        { name: 'Tailwind CSS', level: 'Expert', desc: 'Utility-first layout design, responsive themes, modern layouts' },
        { name: 'HTML5 & CSS3', level: 'Expert', desc: 'Semantic layouts, accessible templates, custom layouts' }
      ]
    },
    {
      category: 'Cloud',
      items: [
        { name: 'AWS Cloud', level: 'Advanced', desc: 'EC2, S3, RDS, AWS Lambda, IAM policies, Route53' },
        { name: 'AWS CDN & Cache', level: 'Advanced', desc: 'CloudFront caching rules, signed cookies, media storage' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', level: 'Expert', desc: 'Query indexing optimization, schema layouts, replication' },
        { name: 'PostgreSQL', level: 'Advanced', desc: 'JSONB optimization, partition rules, spatial indices' },
        { name: 'Redis Cache', level: 'Advanced', desc: 'Cache key management, locks, queuing, streams' }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Docker', level: 'Advanced', desc: 'Multi-container orchestration, compose build configurations' },
        { name: 'CI/CD Pipelines', level: 'Advanced', desc: 'GitHub Actions checks, pull request automations' },
        { name: 'Nginx Proxy', level: 'Advanced', desc: 'SSL installation, reverse proxy mappings, load routes' }
      ]
    },
    {
      category: 'Payments',
      items: [
        { name: 'Stripe Connect', level: 'Expert', desc: 'Custom charges, multi-party payouts, billing cycles' },
        { name: 'Razorpay API', level: 'Advanced', desc: 'Webhook processing, merchant validation, refunds' },
        { name: 'PayPal API', level: 'Advanced', desc: 'Multi-currency support, subscription billing rules' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Postman', level: 'Expert', desc: 'API documentations, collection tests, automation scripts' },
        { name: 'Git & GitHub', level: 'Expert', desc: 'Pull request reviews, conflict resolution, releases' },
        { name: 'Jira & Sprints', level: 'Advanced', desc: 'Sprint board milestones, task prioritization, tracking' }
      ]
    }
  ],
  projects: [
    {
      id: 'warehouse-management',
      title: 'Warehouse Management System (WMS)',
      category: 'System Architecture',
      subtitle: 'Real-time inventory coordination and scanning engine',
      problem: 'A retail distributor suffered from inventory inconsistencies and order completion delays. Stock changes took up to 15 seconds to sync, leading to double-allocation of goods and warehouse bottlenecks.',
      solution: 'Re-architected the legacy database into an event-driven stock updater using Node.js and Redis Streams. Barcode scanning logs are processed immediately in Redis, and changes are synced asynchronously to the Laravel database.',
      architecture: 'Client scanners ➔ Node.js Ingest Service ➔ Redis Streams ➔ Laravel Sync Workers ➔ PostgreSQL database storage.',
      technologies: ['Laravel', 'Node.js', 'Redis Streams', 'PostgreSQL', 'Docker', 'AWS ECS'],
      challenges: 'Resolving high-concurrency race conditions on stock decrements during flash sales. Implemented Redis optimistic locks and atomic operations to prevent double-allocations.',
      outcome: 'Reduced inventory sync delay from 15s to under 200ms. Eliminated 99.8% of stock discrepancies and boosted warehouse dispatch speeds by 45%.',
      screenshots: 'Interactive schema viewer showing data flow in real-time.',
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
      title: 'Event Ticket Booking System',
      category: 'API Engineering',
      subtitle: 'Seat allocation engine supporting high-load sales',
      problem: 'A popular entertainment platform suffered frequent database locking and crashed during major ticket drops, resulting in lost revenue.',
      solution: 'Developed an asynchronous reservation queue in Laravel using Redis-backed temporary seat-locking mechanisms. Created a WebSocket node server for pushing instant seat status updates.',
      architecture: 'Browser client ➔ Laravel API (Stripe holds) ➔ Redis lock cluster ➔ Socket.io broadcast. Ticket state finalized to MySQL database.',
      technologies: ['Laravel', 'Node.js', 'Socket.io', 'Redis', 'MySQL', 'AWS Elastic Beanstalk'],
      challenges: 'Preventing ticket hoarding where users add tickets to carts and hold them indefinitely. Solved this by setting automated 10-minute Redis cache TTLs paired with keyspace expiration events to restore unsold seats to the pool.',
      outcome: 'Handled traffic bursts of 50,000+ bookings per minute with zero double-bookings or database degradation.',
      screenshots: 'Seat map reservation overlay mockup.',
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
      id: 'dating-platform',
      title: 'Dating App Proximity Platform',
      category: 'Geo-location',
      subtitle: 'High-speed local discovery and chat backend system',
      problem: 'A dating app faced high latency (>3 seconds) when users queried matches nearby, leading to rapid session drops and user churn.',
      solution: 'Re-routed proximity matching queries to a dedicated Node.js microservice. Configured PostgreSQL with the PostGIS extension for spatial queries and cached location indexes in Redis.',
      architecture: 'Mobile Client ➔ Coordinates Ingestion ➔ Node.js API ➔ PostGIS geo-radius calculation ➔ Match outputs.',
      technologies: ['Node.js', 'Express', 'PostgreSQL (PostGIS)', 'Redis Geo', 'Docker'],
      challenges: 'Combining geographical radius checks with complex demographic preferences (age, tags, height) without degrading lookup speed. Solved by writing indexed multi-stage PostgreSQL queries.',
      outcome: 'Proximity search latency dropped by over 90% (from 3s to ~220ms), and user match rates rose by 35%.',
      screenshots: 'Geo-radius matching matrix mockup.',
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
      title: 'Music Streaming Media Engine',
      category: 'Cloud Engineering',
      subtitle: 'Tokenized content delivery network for copyrighted audio',
      problem: 'A media distribution startup suffered audio asset theft and slow streaming load times for global users due to direct public file path configurations.',
      solution: 'Implemented an AWS CloudFront CDN architecture with signed cookies and temporary URLs generated dynamically by a Laravel authentication service.',
      architecture: 'Media Client ➔ Auth request ➔ Laravel URL Signer ➔ CloudFront signed response ➔ Audio segments stream from S3.',
      technologies: ['Laravel', 'AWS S3', 'AWS CloudFront CDN', 'AWS Elemental MediaConvert', 'MySQL'],
      challenges: 'Optimizing and standardizing heterogeneous user-uploaded media types into streamable formats. Integrated AWS MediaConvert to transcode tracks into adaptive HLS (HTTP Live Streaming) segments automatically on upload.',
      outcome: 'Secured all audio tracks, lowered bandwidth egress costs by 35%, and improved playback start speeds by 60%.',
      screenshots: 'Media pipeline transcoder process schema.',
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
      title: 'Villa Booking Hospitality Engine',
      category: 'SaaS Platform',
      subtitle: 'Multi-channel dynamic billing and calendar synchronization system',
      problem: 'A high-end villa booking agency suffered double-bookings and revenue leakage due to asynchronous calendar syncs across Airbnb, Booking.com, and VRBO.',
      solution: 'Developed a booking engine with a dynamic pricing calculator and built an iCal parser worker scheduled to sync channels every 15 minutes.',
      architecture: 'iCal parser scheduler ➔ Laravel core sync controller ➔ Stripe deposit billing interface ➔ MySQL database.',
      technologies: ['Laravel', 'PHP', 'Stripe Connect API', 'Cron Scheduling', 'MySQL'],
      challenges: 'Reconciling divergent local tax rules and secure multi-tier deposit transactions. Implemented Stripe custom payment flows to authorize holds and capture payments based on scheduling rules.',
      outcome: 'Reduced calendar synchronization errors to absolute zero and increased dynamic margins by 18%.',
      screenshots: 'Multi-channel booking calendar dashboard.',
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
      id: 'lms-system',
      title: 'Learning Management System (LMS) Analytics Engine',
      category: 'Analytics',
      subtitle: 'Asynchronous event collector for SCORM and xAPI statements',
      problem: 'An enterprise corporate training portal had severe database lockups when generating compliance reports because user activity streams were being logged directly into transactional databases.',
      solution: 'Built an analytics ingestion pipeline with Node.js and RabbitMQ, routing logs asynchronously to Elasticsearch for real-time compliance reporting.',
      architecture: 'LMS user actions ➔ Node Ingestion API ➔ RabbitMQ buffer queue ➔ Bulk index parser ➔ Elasticsearch database.',
      technologies: ['Node.js', 'Express', 'RabbitMQ', 'Elasticsearch', 'MongoDB'],
      challenges: 'Ingesting heavy telemetry bursts during corporate-wide learning events without losing progress logs. Implemented RabbitMQ message buffers and bulk database writing queues.',
      outcome: 'Successfully logged 10 million activity logs daily with zero performance impact on core training portals.',
      screenshots: 'Elasticsearch real-time compliance reporting graph.',
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
      id: 'travel-application',
      title: 'Travel Search Aggregator API',
      category: 'API Engineering',
      subtitle: 'Parallel flight and hotel aggregator engine',
      problem: 'A travel booking application loaded pages slowly (up to 12s) because it fetched results sequentially from multiple airline and hotel APIs.',
      solution: 'Rebuilt the aggregator engine to perform parallel API calls using Laravel HTTP Client (powered by Guzzle multi-curl hooks) and configured Redis cache adapters for static route identifiers.',
      architecture: 'Search request ➔ Laravel HTTP Client Parallel Fetcher ➔ External provider APIs ➔ Redis consolidator ➔ REST output.',
      technologies: ['Laravel', 'PHP', 'Guzzle Multi-curl', 'Redis', 'AWS Lambda'],
      challenges: 'Handling slow or failed responses from legacy travel provider APIs. Built custom adapter wrappers and timeout rules to guarantee partial results load immediately.',
      outcome: 'Cut search response time from 12s to under 3s, boosting travel checkout completions by 22%.',
      screenshots: 'Aggregated route search comparison table.',
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
      title: 'Backend Development',
      description: 'Designing highly robust, scalable, and secure server-side logic in Laravel and Node.js. Optimized for microservices architectures, caching integration, and background jobs.',
      features: ['Laravel & Express custom design', 'Robust multi-threading', 'Memory profiling', 'Background job schedulers']
    },
    {
      title: 'API Development',
      description: 'Developing low-latency RESTful, GraphQL, and WebSocket APIs. Focused on strict versioning schemas, security standards, and self-documenting codebases.',
      features: ['Swagger / OpenAPI specs', 'JWT & OAuth integrations', 'Rate limiting and throttling', 'Socket.io WebSocket channels']
    },
    {
      title: 'SaaS Development',
      description: 'Engineering multi-tenant software architectures featuring robust schema isolation, flexible plans, and integration of core CRM and analytical plugins.',
      features: ['Multi-tenant database engines', 'Dynamic subscription controls', 'Third-party app bindings', 'Custom SaaS logic design']
    },
    {
      title: 'AI Integration',
      description: 'Adding artificial intelligence engines (OpenAI, Gemini APIs) into business workflows. Building smart content classifiers, context parsers, and semantic search tools.',
      features: ['Inference request pooling', 'Context window management', 'Structured JSON outputs', 'AI-driven task pipelines']
    },
    {
      title: 'AWS Deployment',
      description: 'Automating continuous integration, container packaging, and hosting deployments on AWS cloud infrastructures configured for high availability.',
      features: ['Docker multi-container builds', 'AWS ECS & EC2 scaling setup', 'RDS database clustering', 'CloudFront cache optimizations']
    },
    {
      title: 'Performance Optimization',
      description: 'Tuning query statements, optimizing indices, profiling runtime structures, and setting up caching tiers to solve scaling bottlenecks.',
      features: ['MySQL / Postgres query audits', 'Redis cache caching strategies', 'API latency minimization', 'Bandwidth billing audits']
    },
    {
      title: 'Database Design',
      description: 'Structuring highly normalized relational database engines, NoSQL document collections, and cache stores built for speed and referential integrity.',
      features: ['Complex schema normalizations', 'PostGIS spatial indexing', 'Redis optimistic lock clusters', 'Read-write partition profiles']
    },
    {
      title: 'System Architecture',
      description: 'Authoring architectural blueprints for distributed software projects. Resolving message queuing, data sync flows, and single-point-of-failures.',
      features: ['RabbitMQ / Redis Streams layouts', 'Event-driven designs', 'Microservice separation rules', 'High-availability diagrams']
    },
    {
      title: 'Technical Consulting',
      description: 'Providing business-minded advisory to CTOs and startup founders, validating requirements, estimating costs, and auditing third-party codebases.',
      features: ['Infrastructure cost validation', 'Security audits', 'Requirement analysis support', 'Developer onboarding blueprints']
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
