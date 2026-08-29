export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  problemsSolved: string[];
  deliverables: string[];
  techStack: string[];
  workflowSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription: "Custom websites, landing pages, and web apps built for speed and sales.",
    fullDescription: "We build custom websites and web applications designed to load fast, look modern, and convert visitors into clients.",
    iconName: "Globe",
    capabilities: [
      "Custom Next.js & React Websites",
      "Fast & Responsive Layouts",
      "Headless E-Commerce & Portfolios",
    ],
    problemsSolved: [
      "Slow page loading speeds",
      "Outdated website designs",
      "Poor mobile responsiveness",
    ],
    deliverables: [
      "100% Custom Codebase",
      "Mobile & Desktop Responsive UI",
      "SEO Metadata Included",
      "High Speed Performance Optimization",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    workflowSteps: [
      { step: "01", title: "Plan", description: "Define goals, page structure, and design direction." },
      { step: "02", title: "Design", description: "Create visual layouts and user flow." },
      { step: "03", title: "Code", description: "Build clean, fast, custom code." },
      { step: "04", title: "Launch", description: "Test, optimize, and publish live." },
    ],
    faqs: [
      {
        question: "Do you use templates?",
        answer: "No, we build 100% custom code tailored specifically to your project goals.",
      },
    ],
  },
  {
    id: "backend-development",
    number: "02",
    title: "Backend & APIs",
    shortDescription: "Secure databases, user login systems, custom dashboards, and server infrastructure.",
    fullDescription: "We build reliable backend architecture, secure user login authentication, databases, and custom admin dashboards.",
    iconName: "Server",
    capabilities: [
      "Custom REST & GraphQL APIs",
      "Database Design & Migration",
      "User Auth & Access Control",
    ],
    problemsSolved: [
      "Unreliable data sync",
      "Security vulnerabilities in APIs",
      "Database slowdowns under traffic",
    ],
    deliverables: [
      "Scalable API Endpoints",
      "Database Schemas",
      "Auth Token Security",
      "Cloud Deployment",
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Firebase"],
    workflowSteps: [
      { step: "01", title: "Schema Design", description: "Map out data models and relationships." },
      { step: "02", title: "API Development", description: "Build secure server routes and logic." },
      { step: "03", title: "Testing", description: "Verify speed and security under traffic." },
      { step: "04", title: "Deploy", description: "Deploy to cloud servers with live monitoring." },
    ],
    faqs: [
      {
        question: "Which database is right for my app?",
        answer: "We help choose PostgreSQL for structured relational data or MongoDB/Firebase for document data.",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "03",
    title: "Cybersecurity",
    shortDescription: "Security audits, vulnerability testing, code hardening, and data protection.",
    fullDescription: "Protect your website and client data with security audits, code penetration testing, and website hardening.",
    iconName: "ShieldCheck",
    capabilities: [
      "Website Security Audits",
      "Vulnerability Scans",
      "Code Hardening & Protection",
    ],
    problemsSolved: [
      "Exposed passwords or secrets",
      "Malware & XSS attack threats",
      "Lack of secure HTTPS/SSL headers",
    ],
    deliverables: [
      "Security Audit Report",
      "Fixes for Code Vulnerabilities",
      "Server Security Hardening",
      "Clean Security Certificate",
    ],
    techStack: ["SSL/TLS", "OWASP Standards", "Security Scanners", "Python Security Tools"],
    workflowSteps: [
      { step: "01", title: "Audit", description: "Scan website for security weaknesses." },
      { step: "02", title: "Report", description: "List vulnerabilities and required fixes." },
      { step: "03", title: "Fix & Harden", description: "Patch code and lock server settings." },
      { step: "04", title: "Verify", description: "Re-test to confirm complete security." },
    ],
    faqs: [
      {
        question: "Can you security audit an existing website?",
        answer: "Yes, we audit existing websites and provide a clear fix report.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX Design",
    shortDescription: "Modern, clean, user-friendly interface designs that turn visitors into customers.",
    fullDescription: "We create clean, intuitive visual designs, user wireframes, and design systems in Figma.",
    iconName: "Palette",
    capabilities: [
      "Website & App Interface Design",
      "Interactive Figma Prototypes",
      "Complete Design Systems",
    ],
    problemsSolved: [
      "Confusing user navigation",
      "Outdated design aesthetic",
      "Inconsistent visual style",
    ],
    deliverables: [
      "Complete Figma Files",
      "Clickable Prototypes",
      "Responsive Layout Specs",
      "Design Token Colors & Fonts",
    ],
    techStack: ["Figma", "Adobe CC", "Design Systems"],
    workflowSteps: [
      { step: "01", title: "Research", description: "Understand user needs and competitors." },
      { step: "02", title: "Wireframes", description: "Map out clear layout blueprints." },
      { step: "03", title: "Visual Design", description: "Apply brand colors, typography, and polished UI." },
      { step: "04", title: "Hand-off", description: "Deliver clear specs for development." },
    ],
    faqs: [
      {
        question: "Do I get full ownership of Figma files?",
        answer: "Yes, you own 100% of all design files and assets.",
      },
    ],
  },
  {
    id: "digital-advertising",
    number: "05",
    title: "Digital Advertising",
    shortDescription: "Google Ads and Meta Ads campaigns designed to generate high-quality leads.",
    fullDescription: "Drive targeted traffic and sales with Google Search Ads, Meta (Instagram/Facebook) campaigns, and high-converting landing pages.",
    iconName: "TrendingUp",
    capabilities: [
      "Google Ads Search & Display",
      "Meta Ads (Instagram & Facebook)",
      "Conversion Tracking Setup",
    ],
    problemsSolved: [
      "High ad spend with low returns",
      "Inaccurate sales tracking",
      "Boring ad visual creative",
    ],
    deliverables: [
      "Configured Ad Campaigns",
      "High-Converting Ad Copy",
      "Custom Graphic Banner Sets",
      "Conversion Pixel Tracking",
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Analytics 4"],
    workflowSteps: [
      { step: "01", title: "Targeting", description: "Identify high-intent customers." },
      { step: "02", title: "Creative", description: "Design eye-catching ad visuals and copy." },
      { step: "03", title: "Launch", description: "Setup tracking pixels and launch campaigns." },
      { step: "04", title: "Optimize", description: "Monitor stats and improve ROI." },
    ],
    faqs: [
      {
        question: "What starting ad budget is needed?",
        answer: "We recommend starting with ₹15,000–₹30,000/month for effective optimization.",
      },
    ],
  },
  {
    id: "graphic-design",
    number: "06",
    title: "Graphic & Creative Design",
    shortDescription: "Posters, social media creatives, banners, thumbnails, and brand identity assets.",
    fullDescription: "Make your brand look premium with promotional posters, social media templates, YouTube thumbnails, display banners, and logos.",
    iconName: "Sparkles",
    capabilities: [
      "Brand Identity & Logo Suites",
      "Promotional Posters & Banners",
      "Social Media Graphic Sets",
    ],
    problemsSolved: [
      "Unprofessional brand graphics",
      "Low click rates on social posts",
      "Inconsistent visual style across channels",
    ],
    deliverables: [
      "High-Res PNG & Vector SVG Files",
      "Print-Ready PDF Files",
      "Social Media Graphic Kits",
      "Editable Source Files",
    ],
    techStack: ["Photoshop", "Illustrator", "Figma"],
    workflowSteps: [
      { step: "01", title: "Brief", description: "Define visual tone and goals." },
      { step: "02", title: "Draft", description: "Create visual layout concepts." },
      { step: "03", title: "Refine", description: "Polish colors, fonts, and details." },
      { step: "04", title: "Deliver", description: "Export all final asset formats." },
    ],
    faqs: [
      {
        question: "Do you supply print-ready files?",
        answer: "Yes, we provide CMYK print-ready files and high-res digital PNGs.",
      },
    ],
  },
  {
    id: "automation-custom-solutions",
    number: "07",
    title: "Automation & Custom Software",
    shortDescription: "Custom business dashboards, internal tools, and smart workflow automation.",
    fullDescription: "Save hours of manual work with custom internal tools, admin dashboards, data pipelines, and automated business workflows.",
    iconName: "Cpu",
    capabilities: [
      "Custom Business Dashboards",
      "Automated Webhooks & Pipelines",
      "Internal Software Tools",
    ],
    problemsSolved: [
      "Hours spent on manual data entry",
      "Slow response times to new leads",
      "Lack of real-time operational stats",
    ],
    deliverables: [
      "Custom Web Admin Dashboard",
      "Automated Workflow Scripts",
      "API Integrations",
      "User Documentation",
    ],
    techStack: ["Python", "Node.js", "Next.js", "PostgreSQL"],
    workflowSteps: [
      { step: "01", title: "Audit", description: "Identify manual business bottlenecks." },
      { step: "02", title: "Design", description: "Plan automation flow and dashboard." },
      { step: "03", title: "Build", description: "Develop custom scripts and web tools." },
      { step: "04", title: "Deploy", description: "Launch tool and train your team." },
    ],
    faqs: [
      {
        question: "Can automation connect with our current tools?",
        answer: "Yes, we build custom API connectors for any software with webhooks or APIs.",
      },
    ],
  },
];
