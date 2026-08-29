export interface AgreementSummaryCard {
  number: string;
  title: string;
  description: string;
}

export interface AgreementClause {
  id: string;
  number: string;
  title: string;
  callout?: { type: 'PAYMENT' | 'SCOPE' | 'REVISIONS' | 'EXTRA WORK' | 'CLIENT DELAYS' | 'OWNERSHIP' | 'THIRD-PARTY SERVICES' | 'SECURITY'; text: string };
  content: string[];
}

export const AGREEMENT_VERSION = {
  version: "v2.4 (2026 Edition)",
  lastUpdated: "August 24, 2026",
  effectiveDate: "August 24, 2026",
  providerLegalName: "NAVYORA TECH Digital Studio",
  jurisdiction: "Studio Registration & Applicable Commercial Arbitration",
};

export const SUMMARY_CARDS: AgreementSummaryCard[] = [
  { number: "01", title: "Scope", description: "Only agreed deliverables listed in your proposal are included." },
  { number: "02", title: "Payments", description: "Payment milestones are defined in the approved proposal." },
  { number: "03", title: "Revisions", description: "Included revisions depend on your agreed project tier." },
  { number: "04", title: "Changes", description: "New features or major changes require additional cost and time." },
  { number: "05", title: "Timeline", description: "Client feedback, approvals, content, and access affect delivery dates." },
  { number: "06", title: "Ownership", description: "Final deliverable ownership is transferred after full payment." },
  { number: "07", title: "Third-Party Costs", description: "Hosting, domains, APIs, plugins, and ad spend are billed separately." },
  { number: "08", title: "Support", description: "Post-launch maintenance is provided when included in your agreed plan." },
  { number: "09", title: "Cancellation", description: "Cancellation and refund terms depend on the project stage." },
  { number: "10", title: "Security", description: "Reasonable security practices are used, but absolute immunity cannot be guaranteed." },
];

export const AGREEMENT_NAV_TOPICS = [
  { id: "clause-1", label: "Overview" },
  { id: "clause-3", label: "Project Scope" },
  { id: "clause-4", label: "Client Responsibilities" },
  { id: "clause-6", label: "Timeline" },
  { id: "clause-7", label: "Payments" },
  { id: "clause-10", label: "Revisions" },
  { id: "clause-11", label: "Change Requests" },
  { id: "clause-12", label: "Third-Party Services" },
  { id: "clause-14", label: "Intellectual Property" },
  { id: "clause-15", label: "Source Code" },
  { id: "clause-17", label: "Confidentiality" },
  { id: "clause-18", label: "Cybersecurity" },
  { id: "clause-22", label: "Support & Maintenance" },
  { id: "clause-24", label: "Cancellation" },
  { id: "clause-25", label: "Refund Policy" },
  { id: "clause-29", label: "Advertising" },
  { id: "clause-16", label: "Portfolio Rights" },
  { id: "clause-31", label: "Dispute Resolution" },
  { id: "acceptance-section", label: "Acceptance" },
];

export const FULL_AGREEMENT_CLAUSES: AgreementClause[] = [
  {
    id: "clause-1",
    number: "01",
    title: "Agreement Overview",
    content: [
      "This Client Service Agreement ('Agreement') establishes the professional terms and working rules between NAVYORA STUDIO ('Service Provider') and the Client ('Client').",
      "By approving a project proposal, issuing a deposit payment, or executing digital acceptance, the Client agrees to be bound by all terms outlined herein.",
    ],
  },
  {
    id: "clause-2",
    number: "02",
    title: "Services We Provide",
    content: [
      "NAVYORA STUDIO provides custom web development, backend engineering, cybersecurity audits, UI/UX design, digital advertising, graphic design, and custom business software automation.",
    ],
  },
  {
    id: "clause-3",
    number: "03",
    title: "Project Scope",
    callout: { type: "SCOPE", text: "Only agreed deliverables listed in the approved proposal are included." },
    content: [
      "The scope of work for any project is strictly limited to the explicit line items, deliverables, and specifications defined in the written project proposal approved by both parties.",
      "Any items, features, or requests not explicitly documented in the proposal are deemed out-of-scope.",
    ],
  },
  {
    id: "clause-4",
    number: "04",
    title: "Client Responsibilities",
    callout: { type: "CLIENT DELAYS", text: "Delayed feedback or credentials directly affect delivery milestones." },
    content: [
      "The Client agrees to provide necessary text content, high-resolution media assets, brand guidelines, database credentials, API access keys, and feedback in a timely manner.",
      "Delays in Client provision of assets or approvals exceeding 5 business days will automatically pause the project schedule.",
    ],
  },
  {
    id: "clause-5",
    number: "05",
    title: "Project Process",
    content: [
      "All projects follow our structured 6-phase engineering lifecycle: Discover, Plan & Strategy, Design, Build, Test & Secure, and Launch & Support.",
    ],
  },
  {
    id: "clause-6",
    number: "06",
    title: "Project Timeline",
    content: [
      "Estimated delivery schedules provided in proposals are good-faith engineering projections based on prompt Client feedback.",
      "Timelines are subject to extension in events of Client-side delays, scope additions, or third-party service outages.",
    ],
  },
  {
    id: "clause-7",
    number: "07",
    title: "Payment Terms",
    callout: { type: "PAYMENT", text: "Your payment schedule is defined in the approved project proposal." },
    content: [
      "Payment schedules are structured into defined milestone installments (e.g. 50% deposit upon commencement, 25% mid-project review, 25% prior to final deployment).",
      "All invoices are payable in INR (₹) via UPI, IMPS/NEFT bank transfer, credit/debit card gateway, or approved digital transfer within 7 days of invoice issuance.",
    ],
  },
  {
    id: "clause-8",
    number: "08",
    title: "Advance Payment",
    content: [
      "A non-refundable initial deposit (typically 50%) is required before engineering, design, or asset allocation commences.",
    ],
  },
  {
    id: "clause-9",
    number: "09",
    title: "Late Payments",
    content: [
      "Invoices overdue by 14 days or longer may incur a 1.5% monthly late interest fee. Work on active projects will be suspended until overdue invoices are settled.",
    ],
  },
  {
    id: "clause-10",
    number: "10",
    title: "Revisions",
    callout: { type: "REVISIONS", text: "Included revision limits are defined by your project proposal tier." },
    content: [
      "Revisions refer to minor adjustments to approved design wireframes or component styling within the original scope.",
      "Standard packages include up to two (2) revision rounds per project phase. Further revisions are billed at our standard hourly engineering rate.",
    ],
  },
  {
    id: "clause-11",
    number: "11",
    title: "Change Requests",
    callout: { type: "EXTRA WORK", text: "Out-of-scope requests require a formal Change Order quotation." },
    content: [
      "Any request for new features, structural page additions, third-party integrations, or major design re-architectures outside the original scope will require a formal Change Order proposal.",
    ],
  },
  {
    id: "clause-12",
    number: "12",
    title: "Third-Party Services",
    callout: { type: "THIRD-PARTY SERVICES", text: "External platform and subscription charges are billed separately." },
    content: [
      "Costs for web hosting servers, domain names, third-party SaaS APIs (e.g. OpenAI, Mapbox, Twilio), premium plugins, and ad spend are the sole financial responsibility of the Client.",
    ],
  },
  {
    id: "clause-13",
    number: "13",
    title: "Domain, Hosting & Infrastructure",
    content: [
      "The Client maintains ownership of their domain names and cloud hosting accounts. NAVYORA STUDIO assists with deployment configuration under Client credentials.",
    ],
  },
  {
    id: "clause-14",
    number: "14",
    title: "Intellectual Property",
    callout: { type: "OWNERSHIP", text: "Final ownership transfers upon 100% full payment settlement." },
    content: [
      "Upon final completion and receipt of 100% full payment settlement, all customized design graphics, written code, and bespoke digital assets created specifically for the project transfer to the Client.",
    ],
  },
  {
    id: "clause-15",
    number: "15",
    title: "Source Code",
    content: [
      "NAVYORA STUDIO retains ownership of proprietary pre-existing software framework libraries, boilerplate scripts, and utility modules incorporated into the build under a non-exclusive perpetual license to Client.",
    ],
  },
  {
    id: "clause-16",
    number: "16",
    title: "Portfolio & Showcase Rights",
    content: [
      "Unless explicitly restricted by a signed Non-Disclosure Agreement (NDA), NAVYORA STUDIO retains the right to display completed project screenshots, visual mockups, and client feedback in our digital agency portfolio and marketing channels.",
    ],
  },
  {
    id: "clause-17",
    number: "17",
    title: "Confidentiality",
    content: [
      "Both parties agree to protect and keep confidential all proprietary business data, trade secrets, user information, and technical documentation shared during the project engagement.",
    ],
  },
  {
    id: "clause-18",
    number: "18",
    title: "Cybersecurity Services",
    callout: { type: "SECURITY", text: "Security audits reduce vulnerability risks but cannot guarantee absolute immunity." },
    content: [
      "Our cybersecurity hardening and code audit services implement industry best-practice defenses (OWASP Top 10 mitigation, CSP headers, input sanitization).",
      "No digital software system can be guaranteed 100% immune from zero-day exploits or hostile cyberattacks beyond reasonable engineering control.",
    ],
  },
  {
    id: "clause-19",
    number: "19",
    title: "Security & Access Credentials",
    content: [
      "The Client agrees to use secure password management tools to share temporary server or API credentials. Credentials should be rotated upon project completion.",
    ],
  },
  {
    id: "clause-20",
    number: "20",
    title: "Content & Legal Rights",
    content: [
      "The Client warrants that all text, imagery, trademarks, and copyright assets provided to NAVYORA STUDIO are owned by the Client or legally licensed.",
    ],
  },
  {
    id: "clause-21",
    number: "21",
    title: "Website / Software Testing",
    content: [
      "We test completed builds across modern browsers (Chrome, Safari, Firefox, Edge) and mobile viewports before client acceptance.",
    ],
  },
  {
    id: "clause-22",
    number: "22",
    title: "Support & Maintenance",
    content: [
      "Post-launch technical support, feature additions, or continuous cloud maintenance are provided under dedicated ongoing maintenance retainer plans.",
    ],
  },
  {
    id: "clause-23",
    number: "23",
    title: "Bug Fix Policy",
    content: [
      "We provide a 30-day post-launch warranty period to fix any verified functional bugs or code errors resulting directly from original scope code.",
    ],
  },
  {
    id: "clause-24",
    number: "24",
    title: "Cancellation & Termination",
    content: [
      "Either party may terminate the project engagement with 7 days written notice. Upon termination, Client shall pay for all completed work hours up to the cancellation date.",
    ],
  },
  {
    id: "clause-25",
    number: "25",
    title: "Refund Policy",
    content: [
      "Initial project deposits are non-refundable once project kickoff, wireframing, or code architecture has commenced. Completed milestone payments are non-refundable.",
    ],
  },
  {
    id: "clause-26",
    number: "26",
    title: "Acceptance & Approval",
    content: [
      "Final website launch or handover of administrative code files constitutes formal Client acceptance of the project deliverables.",
    ],
  },
  {
    id: "clause-27",
    number: "27",
    title: "Client Delays",
    content: [
      "If a project remains dormant due to Client inactivity or missing feedback for 30 consecutive days, NAVYORA STUDIO reserves the right to close the project phase and invoice for work completed.",
    ],
  },
  {
    id: "clause-28",
    number: "28",
    title: "Limitation of Responsibility",
    content: [
      "In no event shall NAVYORA STUDIO be liable for indirect, incidental, or consequential commercial damages, lost profits, or third-party service downtime exceeding total fees paid under the project proposal.",
    ],
  },
  {
    id: "clause-29",
    number: "29",
    title: "Digital Advertising",
    content: [
      "For ad management services (Google/Meta Ads), ad campaign performance projections are estimates based on historical data. Conversions depend on market demand and product offer viability.",
    ],
  },
  {
    id: "clause-30",
    number: "30",
    title: "Project Ownership & Handover",
    content: [
      "Complete code repositories, deployment scripts, and access keys are handed over via secure repository transfer upon final invoice settlement.",
    ],
  },
  {
    id: "clause-31",
    number: "31",
    title: "Dispute Resolution",
    content: [
      "In the event of a disagreement, both parties agree to attempt good-faith informal negotiation for 30 days prior to initiating formal legal proceedings.",
    ],
  },
  {
    id: "clause-32",
    number: "32",
    title: "Governing Law",
    content: [
      "This Agreement shall be governed by and construed in accordance with applicable commercial laws and international digital trade guidelines, without regard to conflict of law principles.",
    ],
  },
  {
    id: "clause-33",
    number: "33",
    title: "Changes to Agreement",
    content: [
      "NAVYORA STUDIO reserves the right to update general policy templates. Active Client proposals remain governed by terms agreed upon at project execution.",
    ],
  },
  {
    id: "clause-34",
    number: "34",
    title: "Entire Agreement",
    content: [
      "This Agreement, combined with the approved project proposal, constitutes the full understanding between NAVYORA STUDIO and the Client.",
    ],
  },
  {
    id: "clause-35",
    number: "35",
    title: "Client Acknowledgement",
    content: [
      "Client acknowledges having read, understood, and agreed to all 38 clauses of this Agreement prior to project commencement.",
    ],
  },
  {
    id: "clause-36",
    number: "36",
    title: "Digital Acceptance",
    content: [
      "Electronic acceptance via digital checkbox, email confirmation, or proposal e-signature carries the full binding legal weight of a physical signature.",
    ],
  },
  {
    id: "clause-37",
    number: "37",
    title: "Service Provider Details",
    content: [
      "Service Provider: NAVYORA.TECH",
      "Legal Entity: NAVYORA TECH Digital Technology Studio",
      "Contact Email: navyoratech.in@gmail.com",
      "Official Domain: https://navyora.tech",
    ],
  },
  {
    id: "clause-38",
    number: "38",
    title: "Document Control",
    content: [
      "Agreement Version: v2.4 (2026 Edition)",
      "Last Updated: August 24, 2026",
      "Status: Active Standard Master Service Agreement",
    ],
  },
];
