export interface ProjectItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  fullOverview: string;
  challenge: string;
  strategy: string;
  solution: string;
  clientCategory: string;
  timeline: string;
  year: string;
  featured: boolean;
  heroImage: string;
  features: { title: string; description: string }[];
  technologies: string[];
  architectureOverview: string;
  challengesAndDecisions: { challenge: string; decision: string }[];
  resultsAndOutcomes: { metric: string; description: string }[];
  screenshots: { title: string; caption: string; bgGradient: string }[];
  futureRoadmap: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "parco",
    number: "01",
    title: "PARCO",
    subtitle: "Smart Mobility & QR-Based Vehicle Parking Solution",
    category: "Smart Mobility / Vehicle Technology",
    shortDescription: "A Smart Vehicle Tracking and QR-Based Parking Solution simplifying parking management and vehicle owner communication.",
    fullOverview:
      "PARCO is a next-generation smart vehicle management and parking assistance ecosystem. Designed to solve urban parking friction, vehicle security, and instant owner communication, PARCO combines QR code vehicle identification, encrypted owner contact channels, real-time GPS tracking integration, and smart parking analytics into a seamless web platform.",
    challenge:
      "Urban parking environments suffer from unorganized space allocation, blocked vehicles without contact details, and unsafe communication methods where vehicle owners must expose personal phone numbers on dashboards.",
    strategy:
      "Engineered a privacy-focused QR-code platform allowing instant, encrypted owner notifications without exposing phone numbers, paired with live GPS tracking modules and a dashboard for parking operators.",
    solution:
      "We built PARCO using React and Firebase with high-speed maps integration. Vehicle owners receive dynamic QR decals linked to their profile. Scanning a QR tag opens a secure, anonymous messaging gateway to request vehicle movement or alert the owner of security events.",
    clientCategory: "Smart City & Mobility Platform",
    timeline: "8 Weeks",
    year: "2026",
    featured: true,
    heroImage: "linear-gradient(135deg, #1E1B4B 0%, #0F172A 50%, #0284C7 100%)",
    features: [
      {
        title: "QR-Based Vehicle Identification",
        description: "Scannable QR stickers allowing instant, friction-free identification.",
      },
      {
        title: "Secure Owner Communication",
        description: "Encrypted anonymous gateway for instant SMS/web alerts without sharing phone numbers.",
      },
      {
        title: "Live GPS Tracking",
        description: "Real-time location reporting and boundary geofencing alerts.",
      },
      {
        title: "Smart Parking Assistance",
        description: "Interactive map visualization showing available parking slots.",
      },
      {
        title: "Vehicle Search Engine",
        description: "Fast lookup directory for authorized security personnel.",
      },
      {
        title: "Analytics Dashboard",
        description: "Real-time stats on parking occupancy, peak hours, and resolution times.",
      },
    ],
    technologies: ["React", "Firebase", "GPS Services", "QR Code Engine", "Mapbox API", "Node.js", "Tailwind CSS"],
    architectureOverview:
      "Built with a decoupled frontend single-page architecture connecting to Firebase Cloud Functions for encrypted routing. WebSockets power instant live notifications when a vehicle QR code is scanned.",
    challengesAndDecisions: [
      {
        challenge: "Preventing phone number exposure while ensuring instant communication.",
        decision: "Implemented an anonymous relay bridge where alerts trigger push notifications and SMS via Twilio APIs without revealing personal credentials.",
      },
      {
        challenge: "High concurrency during peak parking hours.",
        decision: "Utilized Firestore real-time listeners and optimized indexing to handle simultaneous QR lookups under 100ms latency.",
      },
    ],
    resultsAndOutcomes: [
      { metric: "Sub-100ms", description: "Average QR scanning & communication load time" },
      { metric: "100% Privacy", description: "Zero exposure of vehicle owner personal contact data" },
      { metric: "Real-Time", description: "Live GPS tracking update interval" },
    ],
    screenshots: [
      {
        title: "Secure QR Portal",
        caption: "Frictionless mobile scanner interface for instant vehicle owner alert.",
        bgGradient: "from-blue-900/60 to-slate-900",
      },
      {
        title: "Live Tracking & Maps",
        caption: "Interactive geofenced parking navigation layout.",
        bgGradient: "from-indigo-900/60 to-slate-900",
      },
      {
        title: "Analytics Dashboard",
        caption: "Comprehensive operator dashboard visualizing occupancy metrics.",
        bgGradient: "from-sky-900/60 to-slate-900",
      },
    ],
    futureRoadmap: [
      "Automated License Plate Recognition (ALPR) camera integrations.",
      "EV Charging station booking integration within the PARCO mobile workflow.",
    ],
  },
  {
    slug: "instacampus",
    number: "02",
    title: "INSTACAMPUS",
    subtitle: "Modern Campus Technology & Student Experience Platform",
    category: "Campus Technology / Digital Platform",
    shortDescription: "A unified digital campus platform combining student management, peer communication, resource sharing, and social experiences.",
    fullOverview:
      "INSTACAMPUS is an all-in-one digital campus ecosystem engineered to modernize academic workflows and student engagement. It replaces fragmented university portals with a sleek, unified hub covering course updates, event management, peer discussion forums, and campus announcements.",
    challenge:
      "Universities rely on clunky, disconnected legacy software portals, leading to poor student engagement, missed announcements, and fragmented communication channels across departments.",
    strategy:
      "Consolidated student tools into a single responsive progressive web application with real-time notifications, event feeds, and role-based access control for students, faculty, and campus organizations.",
    solution:
      "Engineered INSTACAMPUS with Next.js App Router, Tailwind CSS, and Node.js microservices. The interface delivers instant search, dark-mode focused ergonomics, and real-time activity streams.",
    clientCategory: "Higher Education Tech",
    timeline: "10 Weeks",
    year: "2026",
    featured: true,
    heroImage: "linear-gradient(135deg, #311042 0%, #0F172A 50%, #7C3AED 100%)",
    features: [
      {
        title: "Unified Student Feed",
        description: "Real-time updates on assignments, campus news, and club events.",
      },
      {
        title: "Peer Communication Hub",
        description: "Channel-based discussions and direct study group collaboration.",
      },
      {
        title: "Academic Resource Vault",
        description: "Instant access to lecture notes, past exam archives, and syllabi.",
      },
      {
        title: "Event & Ticket Management",
        description: "Campus event discovery with digital QR ticketing integration.",
      },
      {
        title: "Departmental Admin Suite",
        description: "Faculty management dashboard for publishing notices and tracking queries.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
    architectureOverview:
      "Designed as a modular Next.js application utilizing server components for rapid initial page rendering and WebSockets for live chat channels.",
    challengesAndDecisions: [
      {
        challenge: "Managing varied access permissions across students, professors, and admin staff.",
        decision: "Implemented robust Role-Based Access Control (RBAC) with secure JWT session validation.",
      },
    ],
    resultsAndOutcomes: [
      { metric: "Unified", description: "Single access hub for campus resources and events" },
      { metric: "Instant", description: "Sub-second real-time search across course materials" },
      { metric: "Mobile-First", description: "Optimized responsive interface for student smartphones" },
    ],
    screenshots: [
      {
        title: "Student Feed",
        caption: "Personalized dashboard highlighting upcoming deadlines and campus activity.",
        bgGradient: "from-purple-900/60 to-slate-900",
      },
      {
        title: "Study Collaboration Hub",
        caption: "Channel-based discussion environment with rich media attachments.",
        bgGradient: "from-violet-900/60 to-slate-900",
      },
    ],
    futureRoadmap: [
      "AI-driven study schedule assistant and assignment reminder bot.",
      "Alumni networking and campus recruitment portal expansion.",
    ],
  },
  {
    slug: "custom-digital-solutions",
    number: "03",
    title: "CUSTOM DIGITAL SOLUTIONS",
    subtitle: "Bespoke Web Applications, Software Dashboards & Brand Creatives",
    category: "Web / Software / Creative Architecture",
    shortDescription: "A showcase of custom websites, administrative dashboards, creative marketing campaigns, and specialized software tools engineered for business clients.",
    fullOverview:
      "Our Custom Digital Solutions portfolio represents our tailored engineering across web applications, cybersecurity audits, interactive brand visual systems, and automation software built for modern tech brands and enterprises.",
    challenge:
      "Modern businesses face unique operational challenges that standard SaaS software cannot solve without expensive workarounds or compromises.",
    strategy:
      "We partner closely with key stakeholders to audit business workflows, engineer tailored software pipelines, design sleek user interfaces, and deploy secure cloud architecture.",
    solution:
      "A modular technology suite spanning custom analytics dashboards, hardened web application portals, brand design packages, and automated webhook pipelines built specifically to client specifications.",
    clientCategory: "Enterprise & Growth Clients",
    timeline: "Ongoing Engineering",
    year: "2026",
    featured: true,
    heroImage: "linear-gradient(135deg, #064E3B 0%, #0F172A 50%, #059669 100%)",
    features: [
      {
        title: "Custom Operations Dashboards",
        description: "Real-time analytics and inventory monitoring portals.",
      },
      {
        title: "Hardened Web Applications",
        description: "High-security client portals featuring multi-factor authentication.",
      },
      {
        title: "Brand & Social Creative Assets",
        description: "Unified design systems, promotional banners, and visual identities.",
      },
      {
        title: "Automated Data Processing",
        description: "Custom Python scripts and API integrations for automated reporting.",
      },
    ],
    technologies: ["Next.js", "Python", "Django", "PostgreSQL", "Docker", "Figma", "AWS"],
    architectureOverview:
      "Custom micro-architecture tailored per client deployment, hosted on containerized AWS/Cloud infrastructure with automated CI/CD builds.",
    challengesAndDecisions: [
      {
        challenge: "Integrating with legacy enterprise software APIs.",
        decision: "Engineered secure REST middleware adapters to standardize legacy data formats into clean TypeScript interfaces.",
      },
    ],
    resultsAndOutcomes: [
      { metric: "Custom", description: "100% tailored software architecture without generic templates" },
      { metric: "Hardened", description: "Zero high-severity vulnerabilities across security audits" },
      { metric: "Automated", description: "Eliminating manual processing bottlenecks for operations" },
    ],
    screenshots: [
      {
        title: "Custom Analytics Dashboard",
        caption: "Dark-mode executive metrics panel with live filtering.",
        bgGradient: "from-emerald-900/60 to-slate-900",
      },
      {
        title: "Creative Campaign Design Suite",
        caption: "Cohesive visual identity assets created for digital growth campaigns.",
        bgGradient: "from-teal-900/60 to-slate-900",
      },
    ],
    futureRoadmap: [
      "Expanded ML-driven data analytics components for custom dashboards.",
      "Automated security continuous monitoring service modules.",
    ],
  },
];
