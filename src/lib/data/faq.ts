export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Process",
    question: "How does the project process work?",
    answer:
      "Our workflow follows a continuous 6-step methodology: 01 Discover (requirements & goals), 02 Strategy (technical & visual roadmap), 03 Design (high-fidelity UI & wireframes), 04 Develop (clean component engineering), 05 Test & Secure (performance, accessibility, security audits), and 06 Launch & Support (deployment & ongoing optimization).",
  },
  {
    id: "faq-2",
    category: "Timelines",
    question: "How long does a typical project take to complete?",
    answer:
      "Timelines vary depending on project complexity. Custom marketing websites and landing experiences typically span 2–4 weeks. Complex full-stack web applications, SaaS dashboards, or custom backend software usually span 4–8 weeks.",
  },
  {
    id: "faq-3",
    category: "Engineering",
    question: "Do you build custom websites or use templates?",
    answer:
      "We engineer 100% custom websites and applications tailored directly to your specific business requirements, brand identity, and scalability targets. We do not use bloated pre-built page builders or generic templates.",
  },
  {
    id: "faq-4",
    category: "Services",
    question: "Can you work with or upgrade an existing website?",
    answer:
      "Yes. We frequently audit, redesign, refactor, and secure existing platforms. Whether you need a complete UI modernization, performance acceleration, backend API integration, or security hardening, we can seamlessly upgrade your current codebase.",
  },
  {
    id: "faq-5",
    category: "Services",
    question: "Do you provide backend development & API integration?",
    answer:
      "Yes. Full-stack development is one of our primary core competencies. We design scalable RESTful APIs, Node.js & Python backend microservices, database schemas (PostgreSQL, MongoDB, Firebase), OAuth authentication, and automated cloud infrastructure.",
  },
  {
    id: "faq-6",
    category: "Cybersecurity",
    question: "Do you provide cybersecurity services & security audits?",
    answer:
      "Security is embedded into everything we build. We offer dedicated cybersecurity assessments, source code security audits, vulnerability scanning, OWASP Top 10 mitigation, SSL/TLS header enforcement, rate limiting, and website security hardening.",
  },
  {
    id: "faq-7",
    category: "Support",
    question: "Do you provide post-launch maintenance & support?",
    answer:
      "Yes. We offer ongoing post-launch technical support, continuous cloud monitoring, security patch updates, feature additions, and performance maintenance packages.",
  },
  {
    id: "faq-8",
    category: "Custom Software",
    question: "Can you build custom internal tools & dashboards?",
    answer:
      "Yes. We build tailored internal business tools, custom management dashboards, automated data scraping pipelines, client portals, and webhook bridges designed to streamline your daily operations.",
  },
  {
    id: "faq-9",
    category: "Responsiveness",
    question: "Are all your websites mobile-responsive and accessible?",
    answer:
      "Unconditionally. Every digital experience we build is engineered with a mobile-first responsive architecture and audited against WCAG 2.1 accessibility guidelines, guaranteeing seamless usability across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    id: "faq-10",
    category: "Getting Started",
    question: "How do I start a project with NAVYORA STUDIO?",
    answer:
      "Simply navigate to our 'Start a Project' page or click any of the 'Start a Project' buttons. Select your desired services, budget tier, and timeline, then submit your project inquiry. Our lead engineering team will review your details and reach out within 24 hours to schedule a consultation.",
  },
];
