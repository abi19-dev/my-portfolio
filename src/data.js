export const R2 = 'https://pub-5efd615a4e234607823aeedfd05f2144.r2.dev/';

const shots = (name, files) => files.map((f, i) => ({ src: R2 + f, alt: `${name} — screen ${i + 1}` }));

export const CONTACT = {
  email: 'abdulahdulovic@gmail.com',
  phone: '+387 60 34 83 487',
  phoneHref: 'tel:+387603483487',
  github: 'https://github.com/abi19-dev',
  githubHandle: 'abi19-dev',
};

export const PROJECTS = [
  { id: 'quietparty', name: 'The Quiet Party', kind: 'Web platform', tagline: 'Facts only. Verbatim quotes and the record around them.',
    summary: 'A research platform for US federal public records — search what politicians said, compare them side by side and share the sourced record.',
    role: 'Full Stack Developer', period: 'Jul 2026 – Present', tags: ['Stripe', 'CMS', 'Admin', 'Claude Code'],
    mockup: 'QuietPartySearch.webp', mockupMobile: 'QuietPartySearch.webp', logo: R2 + 'QuietPartyLogo.svg', logoBg: '#FFFFFF', logoPad: '10px', logoPadSm: '5px', logoFit: 'contain', logoScale: 1,
    link: 'https://www.thequietparty.com', linkLabel: 'thequietparty.com',
    learn: [
      'Led the full user-facing product — search, browse, politician profiles, side-by-side comparison and public sharing — from the design system and app shell upward.',
      'Built authentication and onboarding, Stripe-backed subscriptions, and a usage metering system moved from a client cookie into the database so a query is charged exactly once.',
      'Shipped the layer around it: server-generated share images, PDF and CSV export, a blog and static-page CMS, and the admin interface.'],
    slides: shots('The Quiet Party', ['QuietPartySearch.webp', 'QuietPartyResults.webp', 'QuietPartyCompare.webp', 'QuietPartyBrowse.webp']) },
  { id: 'slibe', name: 'Slibe', kind: 'Mobile & web', tagline: 'Find. Match. Trade your stickers.',
    summary: 'A Panini sticker trading platform that matches collectors who have duplicates with collectors who need them — 13,000+ users in BiH.',
    role: 'Full Stack Developer', period: 'Apr 2026 – Present', tags: ['Matching algorithm', 'Real-time chat', '13k+ users', 'Claude Code'],
    mockup: 'SlibeAlbum.webp', mockupMobile: 'SlibeAlbum.webp', logo: R2 + 'SLIBE.svg', logoBg: '#FFFFFF', logoPad: '0px', logoPadSm: '0px', logoFit: 'cover', logoScale: 1.25,
    link: 'https://slibe.online', linkLabel: 'slibe.online',
    learn: [
      'Built a full-stack matchmaking platform from scratch, scaling to 13,000+ users in Bosnia and Herzegovina.',
      'Designed a real-time sticker matching algorithm connecting users who have duplicates with users who need them.',
      'Became the #1 Panini trading platform in BiH for the 2026 FIFA World Cup cycle.'],
    slides: shots('Slibe', ['SlibeAlbum.webp', 'SlibeSwap.webp', 'SlibeChat.webp', 'SlibeProfile.webp']) },
  { id: 'madinahguider', name: 'MadinahGuider', kind: 'Mobile app', tagline: 'Your digital companion through Madinah.',
    summary: 'A tourism app with GPS navigation, curated locations and routes, plus a web dashboard and API behind it — released on the App Store.',
    role: 'Full Stack Developer', period: '2024', tags: ['React Native', '.NET', 'PostgreSQL', 'Azure', 'Docker'],
    mockup: 'MadinahGuider.png', mockupMobile: 'MadinahGuiderGradient.png', logo: R2 + 'MadinahGuiderLogoPortfolio.png', logoBg: 'transparent', logoPad: '0px', logoPadSm: '0px', logoFit: 'contain', logoScale: 1,
    learn: [
      'Built a complete tourism app with React Native, a web dashboard and a .NET API featuring GPS navigation and Google Maps integration.',
      'Implemented authentication, real-time location services, dark/light themes and offline functionality.',
      'Deployed with Docker, Azure cloud storage and a PostgreSQL database for App Store release.'],
    slides: shots('MadinahGuider', ['MadinahHome1.png', 'MadinahHomeLight1.png', 'MadinahMap1.png', 'MadinahMap2.png', 'MadinahMapLight1.png', 'MadinahLocationDetail1.png', 'MadinahLocations1.png', 'MadinahRoutes1.png', 'MadinahRoutes2.png']) },
  { id: 'karatebhapp', name: 'KarateBH App', kind: 'Mobile app', tagline: 'With sports values, we strengthen society — together.',
    summary: 'A mobile app for organization and communication within the Karate Federation of Bosnia and Herzegovina.',
    role: 'App Developer', period: 'Karate Federation of BiH', tags: ['React Native', 'Figma', 'Illustrator'],
    mockup: 'karateBHAppGradientPopravni.png', mockupMobile: 'GradientTest.png', logo: R2 + 'karatebhappicon.png', logoBg: 'transparent', logoPad: '0px', logoPadSm: '0px', logoFit: 'contain', logoScale: 1,
    learn: [
      'Developed a mobile application for the Karate Federation of Bosnia and Herzegovina.',
      'Got familiar with the React Native framework.',
      'Designed the user interface of the application in Figma and Adobe Illustrator.',
      'Built a functional app for organization and communication within the federation.'],
    slides: shots('KarateBH App', ['KarateAppMockup.png', 'KarateAppMockup2.png', 'KarateAppMockup3.png']) },
  { id: 'karatebhwebsite', name: 'KarateBH Website', kind: 'Website', tagline: 'With sports values, we strengthen society — together.',
    summary: "The federation's public website — news, posts and a content editor — designed in Figma and built in React, for desktop and mobile.",
    role: 'Web Developer & Designer', period: 'Karate Federation of BiH', tags: ['React', 'Figma', 'UI/UX', 'Claude Code'],
    link: 'https://karatebih.ba', linkLabel: 'karatebih.ba',
    mockup: 'KarateWebsite.png', mockupMobile: 'GradientMobile.png', logo: R2 + 'karatebhappicon.png', logoBg: 'transparent', logoPad: '0px', logoPadSm: '0px', logoFit: 'contain', logoScale: 1,
    learn: [
      "Designed and implemented UI/UX in Figma for a national sports association's website.",
      'Developed a dynamic website with React, deepening my proficiency in the framework.',
      'Gained experience in client communication and proposal writing, securing project approval.',
      'Collaborated in a team environment, honing teamwork and project coordination skills.'],
    slides: shots('KarateBH Website', ['Home1.png', 'Home2.png', 'Home3.png', 'News1.png', 'News2.png', 'CreatePost1.png', 'CreatePost2.png', 'Home12Mobile.png', 'Home2Mobile.png', 'Home3Mobile.png', 'Home4Mobile.png', 'NavBar1Mobile.png', 'NavBar2Mobile.png', 'News1Mobile.png', 'News2Mobile.png', 'News3Mobile.png', 'CreatePost1Mobile.png', 'CreatePost2Mobile.png']) },
  { id: 'lezzet', name: 'Lezzet', kind: 'E-commerce', tagline: 'Irresistible chocolate delight.',
    summary: 'An online shop for a family business making chocolate pralines, mendiants and truffles — catalogue, orders and accounts.',
    role: 'Web Developer & Designer', period: 'Family business', tags: ['C# / .NET', 'SQL', 'Azure Blob'],
    mockup: 'LezzetLanding.png', mockupMobile: 'LezzetLandingMobile.png', logo: R2 + 'LezzetLogo.png', logoBg: 'transparent', logoPad: '0px', logoPadSm: '0px', logoFit: 'contain', logoScale: 1,
    learn: [
      'Designed and developed an e-commerce website for a family business specializing in chocolate pralines, mendiants and truffles.',
      'Integrated a dynamic backend in C# (.NET) and SQL to manage products, orders and user accounts.',
      'Used Azure Blob Storage for secure, scalable storage of product photos.',
      'Gained hands-on full-stack experience delivering a solution tailored to client needs.'],
    slides: shots('Lezzet', ['Lezzet8.png', 'Lezzet9.png', 'Lezzet1.png', 'Lezzet2.png', 'Lezzet3.png', 'Lezzet4.png', 'Lezzet5.png', 'Lezzet6.png', 'Lezzet7.png', 'Lezzet11.png', 'Lezzet10.png']) },
];

export const EXPERIENCES = [
  { id: 'rubicon', name: 'RUBICON', location: 'Sarajevo, Bosnia and Herzegovina', badge: '2025 – 2026', logo: R2 + 'RubiconLogomarkWhite.svg', logoBg: '#222220', logoPad: '18px', logoFit: 'contain',
    text: [
      'My journey with RUBICON was transformative, both professionally and personally. What began as an intensive internship quickly evolved into a full-time role as a Software Engineer, working on a dynamic project built with Angular, .NET and Azure Functions.',
      'Beyond the code, what truly defined my time there was the people — kind, talented and supportive folks who made every challenge a joy. RUBICON didn’t just shape me as a developer; it gave me a community where I genuinely thrived.'],
    roles: [{ title: 'Software Engineer · Full time', period: 'Dec 2025 – Sep 2026' }, { title: 'Intern', period: 'Oct 2025 – Nov 2025' }],
    work: [
      { name: 'Cost Modeling Tool', period: 'Apr – Sep 2026', desc: 'Full-stack work across an Angular frontend and an ASP.NET Core Azure Functions backend — REST endpoints with validation and SQL Server integration, plus dynamic filtering and data visualization.', stack: 'Angular · ASP.NET Core · Azure Functions · SQL Server · Dapper · Claude\u00a0Code' },
      { name: 'KG – Slackbot PoC', period: 'Dec 2025 – Jan 2026', desc: 'Modelled a knowledge graph from an unstructured source document, then built a natural-language pipeline that lets an LLM interpret a question and return grounded answers.', stack: 'Neo4j · Cypher · Python · LLM · Claude\u00a0Code' },
      { name: 'RUB 1 on 1', period: 'Sep – Nov 2025', desc: 'Client and server for a one-on-one meeting management tool — note-taking, streamlined 1-on-1 workflows and modular, reusable UI components.', stack: 'NestJS · React · TypeScript · Sass · Azure SQL · Claude\u00a0Code' }] },
  { id: 'setec', name: 'SETEC d.o.o.', location: 'Sarajevo, Bosnia and Herzegovina', badge: '2025', logo: R2 + '1F245381-E8FC-43A7-8AB7-D2583ECA0F5B.png', logoBg: '#222220', logoPad: '0px', logoFit: 'cover',
    text: ['My six-month internship at SETEC was the moment my ambitions turned into reality — my first opportunity to step out of a learning environment and touch a real, living project. Working with the basics of Chromium, I felt the thrill and responsibility of contributing to production software for the first time. It was the spark that ignited my journey as an engineer.'],
    roles: [{ title: 'Software Engineering Intern', period: 'Feb 2025 – Jul 2025' }] },
];

export const TECH = ['React', 'React Native', 'Angular', 'TypeScript', 'Node.js / NestJS', 'C# / .NET', 'PostgreSQL', 'SQL Server', 'Azure'];

export const FACTS = [
  { k: 'Education', v: 'Software Engineering' },
  { k: 'Experience', v: 'About 3 years' },
  { k: 'Born', v: 'August 2003' },
  { k: 'Skills', v: 'Full-stack, app & web, cloud & DevOps, AI-assisted development, UI/UX' },
  { k: 'Learning', v: '.NET & Azure cloud architecture' },
];

export const pad2 = n => String(n).padStart(2, '0');
