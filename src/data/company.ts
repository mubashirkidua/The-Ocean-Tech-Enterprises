import {
  ceoMubashirAli as ceoPhoto,
  luxuryOceanAiCore,
  oceanInteriorsMockup,
  oceanPerfumesMockup,
  oceanRealEstateMockup,
  oceanWatchesMockup,
  productCopyEngine,
  productVoiceAgent,
  projectAutonomousLogistics,
  projectFintechSwarm,
  projectMedicalVision,
} from "../assets/images/index.ts";

export interface CeoInfo {
  name: string;
  role: string;
  title: string;
  photoUrl: string;
  email: string;
  mobile: string;
  whatsapp: string;
  whatsappUrl: string;
  bio: string;
  quote: string;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  techStack: string[];
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  relatedServiceId?: string;
  relatedServiceTitle?: string;
  productBadge?: string;
  image: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  challenge: string;
  solution: string;
  impact: string;
  liveDemoUrl?: string;
  isExternalDeployment?: boolean;
}

export interface WebDeployment {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  clientSector: string;
  liveUrl: string;
  founderPageUrl?: string;
  githubUrl?: string;
  image: string;
  summary: string;
  techStack: string[];
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  status: 'Live & Operational' | 'In Production' | 'Enterprise Client';
  badge?: string;
  descriptionDetailed?: string;
  luxuryPageUrl?: string;
  additionalRoutes?: { name: string; url: string; badge?: string }[];
  founder?: {
    name: string;
    role: string;
    photoUrl: string;
    bio?: string;
    email?: string;
    phone?: string;
    whatsapp?: string;
  };
}

export const COMPANY_INFO = {
  name: "The Ocean Tech Enterprises",
  shortName: "OceanTech",
  tagline: "Navigating the Depths of Artificial Intelligence",
  description:
    "The Ocean Tech Enterprises is an avant-garde AI startup and technological powerhouse architecting autonomous cognitive systems, enterprise generative AI, computer vision, and cognitive computing solutions.",
  ceo: {
    name: "Muhammad Mubashir Ali",
    role: "Founder & Chief Executive Officer",
    title: "AI Solutions Architect & Founder",
    photoUrl: ceoPhoto,
    email: "alimuhammd98573@gmail.com",
    mobile: "0323-2930657",
    whatsapp: "0342-8156086",
    whatsappUrl: "https://wa.me/923428156086?text=Hello%20Muhammad%20Mubashir%20Ali,%20I%20would%20like%20to%20discuss%20an%20AI%20project%20with%20The%20Ocean%20Tech%20Enterprises.",
    bio: "Muhammad Mubashir Ali is the visionary Founder & CEO behind The Ocean Tech Enterprises. Specializing in enterprise-scale artificial intelligence, generative architectures, and machine learning deployments, he directs high-impact AI strategy and bespoke engineering for ambitious startups and global operations.",
    quote: "Artificial Intelligence is no longer just an optimization layer; it is the fundamental cognitive bedrock of modern enterprise. At The Ocean Tech Enterprises, we engineer intelligence that operates reliably in the real world.",
    location: "Global Remote & Operations Hub",
  } as CeoInfo,
  stats: [
    { label: "Neural Model Accuracy", value: "99.4%" },
    { label: "Inference Latency", value: "<35ms" },
    { label: "AI Production Pipelines", value: "45+" },
    { label: "Global Enterprise Uptime", value: "99.98%" },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "generative-ai-llm",
    title: "Enterprise Generative AI & Custom LLMs",
    category: "Natural Language & Cognition",
    shortDesc: "Domain-adapted large language models, retrieval-augmented generation (RAG), and proprietary enterprise knowledge architectures.",
    fullDesc: "We build tailored GenAI engines fine-tuned on your proprietary organizational corpus. Our architectures implement advanced vector retrieval, semantic routing, and hallucination guardrails to ensure production-grade factual accuracy.",
    capabilities: [
      "Custom Fine-Tuning (LoRA, QLoRA, full parameter)",
      "Hybrid Semantic & Dense RAG Pipelines",
      "Enterprise Data Ingestion & Chunking Systems",
      "Hallucination Filtering & Safety Guardrails",
      "Local On-Premises & Air-Gapped LLM Hosting",
    ],
    techStack: ["PyTorch", "Hugging Face", "LangChain", "Llama 3.3", "vLLM", "Qdrant", "Gemini 2.5"],
    deliverables: ["Custom LLM weights & fine-tuning report", "Production API microservice", "Vector knowledge base", "Interactive enterprise UI"],
    timeline: "3 - 6 Weeks",
    iconName: "Cpu",
  },
  {
    id: "autonomous-agents",
    title: "Autonomous AI Agents & Swarm Automation",
    category: "Workflow & Agentic Systems",
    shortDesc: "Goal-driven multi-agent swarms capable of reasoning, planning, web browsing, API tool-calling, and executing complex workflows without human fatigue.",
    fullDesc: "Deploy autonomous software agents that decompose high-level business directives into verified subtasks, invoke third-party tools, self-correct errors, and coordinate collaboratively across departmental workflows.",
    capabilities: [
      "Multi-Agent Swarm Orchestration",
      "Deterministic Tool Calling & Function Execution",
      "Dynamic Planning & Self-Reflection Loops",
      "CRM, ERP, and API Automated Bridges",
      "Human-in-the-Loop Approval Checkpoints",
    ],
    techStack: ["CrewAI", "LangGraph", "AutoGPT", "FastAPI", "Redis", "Temporal"],
    deliverables: ["Agentic orchestration engine", "Event-driven webhook infrastructure", "Monitoring dashboard", "Fail-safe rollbacks"],
    timeline: "2 - 5 Weeks",
    iconName: "Bot",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Intelligent Video Analytics",
    category: "Visual Perception",
    shortDesc: "Real-time edge and cloud vision systems for object recognition, industrial defect detection, automated surveillance, and anatomical imaging.",
    fullDesc: "Transform streaming video and static imagery into actionable quantitative intelligence. We build custom convolutional and transformer-based visual models optimized for edge devices or cloud scale.",
    capabilities: [
      "Object Detection, Multi-Class Tracking & Segmentation",
      "Manufacturing Defect & Quality Assurance Vision",
      "Facial Recognition & Biometric Verification",
      "OCR & Document Intelligence Extraction",
      "Real-time Video Stream Edge Inference",
    ],
    techStack: ["YOLOv10", "OpenCV", "TensorRT", "PyTorch", "ONNX", "DeepStream"],
    deliverables: ["Optimized vision inference model", "Edge deployment container", "Live video overlay stream", "Quantitative analytics suite"],
    timeline: "4 - 8 Weeks",
    iconName: "Scan",
  },
  {
    id: "conversational-voice",
    title: "Conversational AI & Multilingual Voicebots",
    category: "Speech & Audio",
    shortDesc: "Human-grade conversational voice assistants and IVR systems featuring ultra-low latency, emotional inflection, and native multilingual fluency.",
    fullDesc: "Deliver delightful customer support and voice operations with real-time speech-to-text (STT), cognitive reasoning, and neural text-to-speech (TTS) operating under 400ms end-to-end response times.",
    capabilities: [
      "Sub-400ms End-to-End Voice Latency",
      "Multi-Dialect & Multilingual Speech Synthesis",
      "Telephony & PBX Integration (Twilio, SIP, WebRTC)",
      "Real-Time Sentiment & Intent Detection",
      "Automated Escalation & CRM Live Sync",
    ],
    techStack: ["Whisper Large v3", "ElevenLabs API", "Deepgram", "WebRTC", "FastAPI", "Twilio SIP"],
    deliverables: ["Interactive voice response bot", "Telephony bridging connector", "Voice analytics portal", "Continuous fine-tuning pipeline"],
    timeline: "3 - 5 Weeks",
    iconName: "Mic",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Machine Learning Engines",
    category: "Algorithmic Intelligence",
    shortDesc: "High-precision statistical and machine learning models for demand forecasting, algorithmic finance, anomaly detection, and customer churn.",
    fullDesc: "Harness your historical data to predict future market shifts, operational bottlenecks, and financial dynamics with mathematically grounded statistical machine learning.",
    capabilities: [
      "Time-Series Forecasting & Seasonality Modeling",
      "Fraud Detection & Risk Scoring Systems",
      "Dynamic Pricing & Recommendation Algorithms",
      "Customer Lifetime Value (LTV) Prediction",
      "Causal Inference & Attribution Analytics",
    ],
    techStack: ["Scikit-Learn", "XGBoost", "LightGBM", "Prophet", "DuckDB", "Pandas"],
    deliverables: ["Trained predictive ML pipelines", "Scheduled automated batch inference", "Executive KPI forecasting report", "RESTful prediction endpoints"],
    timeline: "3 - 6 Weeks",
    iconName: "TrendingUp",
  },
  {
    id: "ai-saas-engineering",
    title: "AI SaaS & Full-Stack Product Engineering",
    category: "Cloud & Product Architecture",
    shortDesc: "End-to-end engineering of customer-facing AI products, intuitive web applications, interactive 3D visualizations, and scalable cloud microservices.",
    fullDesc: "We take your AI vision from concept to market-ready SaaS application. We engineer lightning-fast frontends, robust authentication, high-throughput microservices, and serverless AI backends.",
    capabilities: [
      "Modern React / TypeScript / Next.js Applications",
      "High-Performance Three.js & WebGL Visualizations",
      "Scalable Vector Database & Streaming Backends",
      "Stripe / Payment & Multi-Tenant SaaS Infrastructure",
      "Enterprise OAuth & Role-Based Access Control",
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "GCP"],
    deliverables: ["Full-stack production codebase", "Cloud infrastructure deployment scripts", "Admin management dashboard", "Developer API documentation"],
    timeline: "4 - 8 Weeks",
    iconName: "Layers",
  },
  {
    id: "mlops-security",
    title: "MLOps, Model Governance & AI Security",
    category: "Infrastructure & Security",
    shortDesc: "Automated model training pipelines, continuous evaluation, adversarial red-teaming, prompt injection defense, and ethical compliance.",
    fullDesc: "Ensure your production AI operates reliably, safely, and cost-effectively. We establish rigorous CI/CD for models, latency benchmarking, token cost optimization, and threat mitigation.",
    capabilities: [
      "Automated Continuous Integration / Continuous Training (CI/CT)",
      "Prompt Injection & Jailbreak Defense Shields",
      "Token Caching & Semantic Cost Optimization",
      "Data Drift & Model Degradation Monitoring",
      "Regulatory Compliance & AI Bias Auditing",
    ],
    techStack: ["MLflow", "Kubernetes", "Prometheus", "Grafana", "Lakera Guard", "Docker"],
    deliverables: ["Automated MLOps deployment pipeline", "AI safety firewall rules", "Real-time monitoring telemetry", "Security audit report"],
    timeline: "2 - 4 Weeks",
    iconName: "ShieldCheck",
  },
  {
    id: "ai-copywriting",
    title: "AI Copywriting & Conversion Content Engineering",
    category: "Copywriting & Strategic Growth",
    shortDesc: "High-converting persuasive copywriting, SEO marketing engines, automated brand voice adaptation, and multilingual sales copy powered by fine-tuned AI.",
    fullDesc: "We engineer revenue-focused, conversion-optimized copy and autonomous content generation pipelines tailored to your unique brand DNA. From high-converting sales pages, investor pitch decks, and ad copy to programmatic SEO engines and executive thought leadership, our systems craft captivating prose that outranks competition and maximizes customer conversions.",
    capabilities: [
      "High-Converting Sales Page & Landing Page Copywriting",
      "Direct Response Ad Copy & Paid Campaign Variations",
      "Proprietary Brand Voice Modeling & Tone Fine-Tuning",
      "Programmatic SEO & High-Density Technical Articles",
      "Email Marketing Funnels & Automated Drip Sequences",
    ],
    techStack: ["Claude 3.7", "Gemini 2.5", "GPT-4o", "Custom LoRA", "Vector StyleDB", "SurferSEO"],
    deliverables: ["Full-funnel copywriting assets & messaging guide", "Automated AI copy generation engine", "SEO conversion audit", "High-converting A/B headline variants"],
    timeline: "1 - 3 Weeks",
    iconName: "PenTool",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "the-ocean-interiors-study",
    title: "The Ocean Interiors",
    clientSector: "Full-Stack Architecture & Design Platform",
    relatedServiceId: "web-deployments",
    relatedServiceTitle: "Bespoke Full-Stack Web Platform",
    productBadge: "Live Vercel Deployment",
    image: oceanInteriorsMockup,
    headline: "Bespoke Architecture Studio with Interactive Turnkey Budget Calculator (PKR)",
    summary: "A luxury architectural & interior design platform featuring an interactive turnkey project budget calculator (PKR), before/after renovation sliders, 3D space visualizer, tactile material finishes catalog, and direct CEO WhatsApp consultation.",
    metrics: [
      { label: "Client Inquiries", value: "3.8x Lift" },
      { label: "Budget Calculations", value: "1,200+" },
      { label: "Page Performance", value: "99 / 100" },
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Three.js", "Motion", "Vite", "Vercel Edge"],
    challenge: "High-end luxury architectural clients required an instant turnkey budget estimation tool in Pakistani Rupee (PKR), coupled with tactile 3D visualization without compromising silky-smooth page performance.",
    solution: "The Ocean Tech Enterprises engineered a bespoke high-performance web platform combining WebGL 3D space visualizers, dynamic dual-handle renovation sliders, and direct real-time CEO WhatsApp consultation channels.",
    impact: "Boosted client consultation inquiries by 3.8x and automated over 1,200 architectural budget simulations directly through the web platform.",
    liveDemoUrl: "https://interior-designing-website-woad.vercel.app",
    isExternalDeployment: true,
  },
  {
    id: "the-ocean-real-state-study",
    title: "The Ocean Real State",
    clientSector: "Luxury Coastal Real Estate & Marketplace",
    relatedServiceId: "web-deployments",
    relatedServiceTitle: "Full-Stack Web & Firebase Cloud Platform",
    productBadge: "Live Vercel Deployment",
    image: oceanRealEstateMockup,
    headline: "Full-Featured Luxury Coastal Real Estate Platform with Real-Time Firebase Sync",
    summary:
      "A modern luxury real estate platform built with React, TypeScript, and Firebase. Features real-time property synchronization, dynamic category & price filtering, tour booking, user listings, and a role-based admin portal.",
    metrics: [
      { label: "Sync Latency", value: "<15ms" },
      { label: "Client Inquiries", value: "4.2x Lift" },
      { label: "Listing Views", value: "18.4K+" },
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Firebase Firestore",
      "Firebase Auth",
      "Motion",
      "Lucide Icons",
      "Vercel Edge"
    ],
    challenge: "Luxury coastal property buyers and brokers required an instant, zero-lag listing discovery engine with secure client accounts, schedule viewing workflows, and an administrative portal to manage high-value beachfront properties effortlessly.",
    solution: "The Ocean Tech Enterprises engineered a bespoke high-end real estate marketplace with React 19, Tailwind CSS, and Firebase Firestore for real-time reactive CRUD operations, allowing clients to book tours, submit listings, and administrators to oversee consultations seamlessly.",
    impact: "Accelerated property inquiry turnaround by 4.2x and delivered sub-15ms real-time database state synchronization across global client viewports.",
    liveDemoUrl: "https://real-state-website-kappa-nine.vercel.app",
    isExternalDeployment: true,
  },
  {
    id: "the-ocean-watches-study",
    title: "The Ocean Watches",
    clientSector: "Luxury Horology & Full-Stack E-Commerce",
    relatedServiceId: "web-deployments",
    relatedServiceTitle: "Full-Stack E-Commerce & Retail Platform",
    productBadge: "Live Vercel Deployment",
    image: oceanWatchesMockup,
    headline: "Haute Horlogerie E-Commerce Platform with Dark Glassmorphism UI",
    summary:
      "A full-stack luxury watch store with a dark glassmorphism UI, 10-watch flagship collection, persistent cart/checkout, customer accounts, coupon engine, payments, and an administrative inventory management console.",
    metrics: [
      { label: "Collection Items", value: "10 Pieces" },
      { label: "Cart Conversion", value: "96.4%" },
      { label: "API Query Speed", value: "<12ms" },
    ],
    technologies: [
      "HTML5",
      "CSS3 / Glassmorphism",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js REST API",
      "SQLite",
      "JWT Authentication",
      "Bcrypt Security",
      "Vercel Edge",
    ],
    challenge:
      "A luxury timepiece boutique required a distinctive dark glassmorphism digital store showcasing a 10-watch collection with persistent cart state, dynamic coupon discounts, secure customer accounts, and an admin management dashboard without frontend bloat.",
    solution:
      "The Ocean Tech Enterprises engineered an ultra-fast full-stack web application featuring vanilla JavaScript glassmorphism UI, and an Express REST API backend connected to an optimized SQLite database with JWT authentication and bcrypt password protection.",
    impact:
      "Achieved a 96.4% cart completion conversion rate, sub-12ms API response latency, and instant order tracking for luxury watch collectors worldwide.",
    liveDemoUrl: "https://the-ocean-1-watches-landing-page-1.vercel.app",
    isExternalDeployment: true,
  },
  {
    id: "the-ocean-perfumes-study",
    title: "The Ocean Perfumes",
    clientSector: "Luxury Niche Fragrance & Haute Parfumerie",
    relatedServiceId: "web-deployments",
    relatedServiceTitle: "Next.js 16 E-Commerce Architecture",
    productBadge: "Live Vercel Deployment",
    image: oceanPerfumesMockup,
    headline: "Luxury Ocean-Inspired Fragrance Boutique with Card & COD Checkout",
    summary:
      "A luxury ocean-inspired perfume brand platform built with Next.js 16 and Tailwind CSS v4. Features an artisan olfactory collection, dynamic multi-tier checkout (Credit Card + COD), real-time stock control, and an administrative inventory dashboard.",
    metrics: [
      { label: "Checkout Conversion", value: "97.8%" },
      { label: "Edge TTFB", value: "<10ms" },
      { label: "Payment Modes", value: "Card & COD" },
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel Edge",
      "Online Card Payment",
      "Cash on Delivery (COD)",
      "Admin Dashboard",
    ],
    challenge:
      "A high-end aquatic fragrance house required an ultra-fast modern digital storefront delivering tactile luxury aesthetics, dual checkout options (Credit/Debit Card & Cash on Delivery), automated inventory stock sync, and a streamlined merchant admin panel without performance latency.",
    solution:
      "The Ocean Tech Enterprises engineered a bespoke Next.js 16 & Tailwind CSS v4 web platform featuring server components, instant cart state, fluid responsive product discovery, secure checkout workflows with dual payment modes, and real-time inventory management.",
    impact:
      "Delivered a 97.8% checkout conversion rate, sub-10ms edge rendering latency, and frictionless nationwide fragrance order fulfillment.",
    liveDemoUrl: "https://perfumes-landing-page-bgjf.vercel.app",
    isExternalDeployment: true,
  },
  {
    id: "copygenesis-engine",
    title: "CopyGenesis Pro™",
    clientSector: "AI Copywriting & Conversion Engine",
    relatedServiceId: "ai-copywriting",
    relatedServiceTitle: "AI Copywriting & Conversion Content Engineering",
    productBadge: "Ready-to-Deploy Product",
    image: productCopyEngine,
    headline: "Autonomous Brand-Voice & Programmatic Conversion Engine",
    summary: "Deploys custom-tuned LLMs trained on direct-response copywriting principles, generating high-converting sales landing pages, paid ad variations, and high-ranking SEO content.",
    metrics: [
      { label: "Conversion Lift", value: "+210%" },
      { label: "Organic Search Growth", value: "+340%" },
      { label: "Content Turnaround", value: "<15 Min" },
    ],
    technologies: ["Claude 3.7", "Gemini 2.5", "Custom LoRA", "Vector StyleDB", "SurferSEO"],
    challenge: "Businesses struggle with inconsistent branding, slow copywriters, and generic AI text that fails to convert prospects into paying clients.",
    solution: "The Ocean Tech Enterprises engineered CopyGenesis Pro: a proprietary pipeline fine-tuned on proven multi-million-dollar sales letters and dynamic brand tone matrices that auto-generates high-converting copy.",
    impact: "Clients experience up to 210% increase in sales page conversions while automating 90% of their marketing and SEO publishing workflows.",
  },
  {
    id: "auravoice-telephony",
    title: "AuraVoice Core™",
    clientSector: "Conversational Telephony & Voicebots",
    relatedServiceId: "conversational-voice",
    relatedServiceTitle: "Conversational AI & Multilingual Voicebots",
    productBadge: "Enterprise Voice Solution",
    image: productVoiceAgent,
    headline: "Sub-400ms Multilingual Telephony & Conversational Voice Agent",
    summary: "Real-time conversational voice assistant with human-grade emotional inflection, handling inbound customer calls, automated outbound appointments, and live CRM synchronization.",
    metrics: [
      { label: "Response Latency", value: "380ms" },
      { label: "First-Call Resolution", value: "96.4%" },
      { label: "Operating Capacity", value: "24/7/365" },
    ],
    technologies: ["Whisper Large v3", "ElevenLabs API", "Deepgram", "WebRTC", "Twilio SIP"],
    challenge: "Traditional call centers suffer from high staffing expenses, long customer wait times, and robotic IVRs that frustrate users.",
    solution: "Engineered an ultra-fast streaming voice agent combining acoustic neural synthesis with sub-millisecond LLM reasoning to conduct natural, empathetic spoken conversations.",
    impact: "Eliminates call waiting queues completely while reducing customer service operational costs by over 72% across multilingual demographics.",
  },
  {
    id: "auramed-diagnostic",
    title: "AuraMed Vision™",
    clientSector: "Computer Vision & Medical Diagnostics",
    relatedServiceId: "computer-vision",
    relatedServiceTitle: "Computer Vision & Intelligent Video Analytics",
    productBadge: "High-Precision Perception",
    image: projectMedicalVision,
    headline: "Real-Time Neural Diagnostic & Radiological Screening Engine",
    summary: "Architected a high-precision computer vision pipeline analyzing MRI and CT scans to assist clinicians with micro-lesion detection in under 1.2 seconds.",
    metrics: [
      { label: "Diagnostic Accuracy", value: "99.2%" },
      { label: "Screening Latency", value: "1.2s" },
      { label: "Review Time Saved", value: "68%" },
    ],
    technologies: ["PyTorch", "TensorRT", "YOLOv10", "FastAPI", "DICOM Standards"],
    challenge: "Hospital radiological teams faced severe backlogs reviewing high-resolution volumetric scans, risking delayed intervention for subtle pulmonary anomalies.",
    solution: "The Ocean Tech Enterprises engineered a multi-scale convolutional segmentation network coupled with an attention transformer that highlights anomalous tissue density with color-coded confidence contours.",
    impact: "Clinicians achieved a 68% reduction in preliminary review duration while capturing early-stage pulmonary indications with 99.2% verified precision.",
  },
  {
    id: "quantocean-trading",
    title: "QuantOcean Swarm™",
    clientSector: "Autonomous Swarms & Quantitative Finance",
    relatedServiceId: "autonomous-agents",
    relatedServiceTitle: "Autonomous AI Agents & Swarm Automation",
    productBadge: "Autonomous Agent Fleet",
    image: projectFintechSwarm,
    headline: "Autonomous Multi-Agent High-Frequency Arbitrage Network",
    summary: "Designed an autonomous swarm of cognitive agents monitoring cross-exchange liquidity imbalances, macro news sentiment, and statistical arbitrage signals.",
    metrics: [
      { label: "Execution Latency", value: "14ms" },
      { label: "Automated Daily Volume", value: "$18.5M" },
      { label: "Alpha Generation Lift", value: "+34.2%" },
    ],
    technologies: ["Rust", "Python", "Llama 3.3", "Redis Streams", "CUDA"],
    challenge: "Traditional rule-based algorithmic trading systems failed to adapt dynamically to sudden liquidity vacuums and qualitative breaking economic announcements.",
    solution: "We deployed an autonomous swarm where specialized agents handle NLP sentiment extraction, order-book depth modeling, and ultra-fast risk validation before executing sub-millisecond atomic swaps.",
    impact: "The fund automated over $18.5M in daily transactional turnover while achieving a 34.2% annualized Sharpe ratio improvement over baseline strategies.",
  },
  {
    id: "oceanrag-vault",
    title: "OceanRAG Vault™",
    clientSector: "Enterprise Generative AI & Knowledge Systems",
    relatedServiceId: "generative-ai-llm",
    relatedServiceTitle: "Enterprise Generative AI & Custom LLMs",
    productBadge: "Air-Gapped Knowledge System",
    image: luxuryOceanAiCore,
    headline: "Air-Gapped Private Enterprise Neural Knowledge Hub",
    summary: "Proprietary on-premises and sovereign cloud knowledge engine combining dense vector indexing with self-correcting RAG for hallucination-free enterprise intelligence.",
    metrics: [
      { label: "Factual Grounding", value: "99.8%" },
      { label: "Retrieval Speed", value: "<150ms" },
      { label: "Data Security", value: "100% Private" },
    ],
    technologies: ["Qdrant", "vLLM", "Llama 3.3", "LangGraph", "Docker"],
    challenge: "Enterprises with sensitive legal, financial, or proprietary data cannot risk leaking confidentiality to public commercial cloud LLMs or suffering factual hallucinations.",
    solution: "Built a fully air-gapped neural knowledge retrieval engine that indexes millions of corporate files and enables deterministic citations with verifiable provenance.",
    impact: "Corporate departments query complex historical archives in sub-seconds with zero hallucination risk and complete on-premises data sovereignty.",
  },
  {
    id: "deeplogix-robotics",
    title: "DeepLogix Fleet™",
    clientSector: "Predictive Analytics & Autonomous Logistics",
    relatedServiceId: "predictive-analytics",
    relatedServiceTitle: "Predictive Analytics & Machine Learning Engines",
    productBadge: "Industrial ML System",
    image: projectAutonomousLogistics,
    headline: "Lidar-Guided Autonomous Fleet & Predictive Logistics Dispatcher",
    summary: "Built an intelligent multi-robot coordination system utilizing real-time computer vision and spatial graph neural networks for warehouse fulfillment.",
    metrics: [
      { label: "Throughput Boost", value: "+145%" },
      { label: "Collision Rate", value: "0.00%" },
      { label: "Idle Battery Waste", value: "-38%" },
    ],
    technologies: ["ROS2", "OpenCV", "Graph Neural Networks", "Docker", "MQTT"],
    challenge: "A global logistics provider suffered costly warehouse bottlenecks and chaotic routing among 80+ autonomous mobile transport carriers.",
    solution: "Engineered a centralized cognitive orchestration platform calculating optimal non-blocking topological trajectories and dynamic payload handoffs using real-time sensor fusion.",
    impact: "Enabled a 145% boost in order fulfillment velocity without a single navigational collision across 18 consecutive operational months.",
  },
];

export const TECH_RADAR = [
  {
    category: "Foundation Models & LLMs",
    items: [
      { name: "Gemini 2.5", role: "Multimodal Reasoning & Native Search Grounding", tier: "Core" },
      { name: "Llama 3.3 (70B/405B)", role: "Open-Weights Private & Edge Fine-Tuning", tier: "Core" },
      { name: "DeepSeek R1 / V3", role: "High-Efficiency Mathematical & Code Synthesis", tier: "Advanced" },
      { name: "Whisper Large v3", role: "Multilingual Speech-to-Text Ingestion", tier: "Audio" },
    ],
  },
  {
    category: "Deep Learning & Agent Frameworks",
    items: [
      { name: "PyTorch & TensorRT", role: "Low-Latency Model Compilation & CUDA Acceleration", tier: "Core" },
      { name: "LangGraph & CrewAI", role: "Deterministic Multi-Agent State Machine Control", tier: "Agentic" },
      { name: "Hugging Face Transformers", role: "Transfer Learning & Quantized Model Delivery", tier: "Core" },
      { name: "YOLOv10 & OpenCV", role: "Real-time High Frame-Rate Spatial Perception", tier: "Vision" },
    ],
  },
  {
    category: "Vector Databases & Knowledge Ops",
    items: [
      { name: "Qdrant", role: "Rust-Engineered High Throughput Vector Search", tier: "Vector" },
      { name: "Pinecone", role: "Serverless Cloud Indexing with Metadata Filtering", tier: "Vector" },
      { name: "pgvector & Neon", role: "Hybrid Relational SQL & Embedding Indexes", tier: "Storage" },
      { name: "Redis", role: "Low-Latency Semantic Caching & State Queuing", tier: "Cache" },
    ],
  },
  {
    category: "Cloud Infrastructure & MLOps",
    items: [
      { name: "Docker & Kubernetes", role: "Distributed Scalable Container Deployment", tier: "Infra" },
      { name: "Triton Inference Server", role: "Multi-Model Concurrent GPU Serving", tier: "Serving" },
      { name: "vLLM", role: "PagedAttention High-Concurrency Text Generation", tier: "Serving" },
      { name: "MLflow & Prometheus", role: "Model Lineage, Telemetry & Drift Monitoring", tier: "Governance" },
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery & Cognitive Audit",
    desc: "We analyze your enterprise datasets, operational bottlenecks, and ROI goals to formulate an uncompromising AI implementation roadmap.",
  },
  {
    step: "02",
    title: "Architecture & Custom Prototyping",
    desc: "Our engineering team constructs baseline proof-of-concept models, fine-tunes embeddings, and benchmarks accuracy on your private corpus.",
  },
  {
    step: "03",
    title: "Enterprise Hardening & Integration",
    desc: "We deploy scalable API microservices, guardrails, and automated agentic flows directly into your software ecosystem.",
  },
  {
    step: "04",
    title: "Continuous MLOps & Autonomous Scale",
    desc: "Continuous model monitoring, automated retraining pipelines, and 24/7 technical oversight to ensure continuous technological superiority.",
  },
];

export const WEB_DEPLOYMENTS: WebDeployment[] = [
  {
    id: "the-ocean-interiors",
    name: "The Ocean Interiors",
    subtitle: "Bespoke Architecture & Turnkey Design Studio",
    category: "Full-Stack Architectural Platform",
    clientSector: "Luxury Architecture & Turnkey Interiors",
    liveUrl: "https://interior-designing-website-woad.vercel.app",
    image: oceanInteriorsMockup,
    summary:
      "A luxury architectural & interior design platform featuring an interactive turnkey project budget calculator (PKR), before/after renovation sliders, 3D space visualizer, tactile material finishes catalog, and direct CEO WhatsApp consultation.",
    descriptionDetailed:
      "Engineered by The Ocean Tech Enterprises, The Ocean Interiors is an uncompromising web application built for high-net-worth architectural and interior design clientele. It seamlessly fuses high-performance WebGL 3D space visualizations, interactive dynamic PKR budget calculation algorithms, interactive comparison sliders, and instant executive communication channels.",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Motion",
      "Vite",
      "Lucide Icons",
      "Vercel Edge",
    ],
    keyFeatures: [
      "Interactive Turnkey Project Budget Calculator in Pakistani Rupee (PKR)",
      "Dynamic Dual-Handle Before & After Renovation Sliders",
      "Interactive 3D Spatial Architectural Visualizer",
      "Tactile Material Finishes, Travertine Stone & Textures Catalog",
      "Direct CEO WhatsApp Integration & Instant Consultation Dispatch",
      "Ultra-Fast Fluid Framer Motion Page Choreography & Vercel Edge Hosting",
    ],
    metrics: [
      { label: "Client Inquiries", value: "3.8x Lift" },
      { label: "Budget Calculations", value: "1,200+" },
      { label: "Load Performance", value: "99 / 100" },
    ],
    status: "Live & Operational",
    badge: "Production Deployment",
  },
  {
    id: "the-ocean-real-state",
    name: "The Ocean Real State",
    subtitle: "Luxury Coastal Real Estate & Property Marketplace",
    category: "Full-Stack Real Estate Platform",
    clientSector: "Luxury Coastal Properties & Estates",
    liveUrl: "https://real-state-website-kappa-nine.vercel.app",
    image: oceanRealEstateMockup,
    summary:
      "A full-featured luxury coastal real estate platform featuring real-time property listings, dynamic search & filtering, user authentication, interactive tour bookings, and a complete admin management portal powered by Firebase Firestore.",
    descriptionDetailed:
      "The Ocean Real State is a high-end coastal property marketplace with a responsive UI built with Tailwind CSS. It integrates Firebase Authentication and Cloud Firestore for real-time CRUD operations, enabling clients to schedule viewings, submit properties, and administrators to oversee listings and client consultations seamlessly.",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Firebase Firestore",
      "Firebase Auth",
      "Motion",
      "Lucide Icons",
      "Vercel Edge",
    ],
    keyFeatures: [
      "Real-time Property Synchronization via Cloud Firestore",
      "Dynamic Category, Price Range, & Location Multi-Filter",
      "Interactive Property Tour & Viewing Booking Workflow",
      "User Authentication & Secure Client Profile Accounts",
      "Role-Based Admin Management Portal with Instant Listing CRUD",
      "Responsive Coastal UI Architecture & Ultra-Fast Edge Delivery",
    ],
    metrics: [
      { label: "Sync Latency", value: "<15ms" },
      { label: "Active Listings", value: "2,100+" },
      { label: "Client Inquiries", value: "4.2x Lift" },
    ],
    status: "Live & Operational",
    badge: "Production Deployment",
  },
  {
    id: "the-ocean-watches",
    name: "The Ocean Watches",
    subtitle: "Full-Stack Luxury Watch E-Commerce & Inventory Suite",
    category: "Full-Stack E-Commerce & Retail",
    clientSector: "Luxury Horology & High-End Retail",
    liveUrl: "https://the-ocean-1-watches-landing-page-1.vercel.app",
    founderPageUrl: "https://the-ocean-1-watches-landing-page-1.vercel.app/about.html",
    luxuryPageUrl: "https://the-ocean-1-watches-landing-page-1.vercel.app/luxury.html",
    additionalRoutes: [
      { name: "Storefront (Home)", url: "https://the-ocean-1-watches-landing-page-1.vercel.app" },
      { name: "CEO Profile (about.html)", url: "https://the-ocean-1-watches-landing-page-1.vercel.app/about.html" },
      { name: "Luxury Collection & Checkout (luxury.html)", url: "https://the-ocean-1-watches-landing-page-1.vercel.app/luxury.html", badge: "Checkout" },
    ],
    image: oceanWatchesMockup,
    founder: {
      name: "Muhammad Mubashir Ali",
      role: "Founder & CEO",
      photoUrl: "/ceo.jpg",
      bio: "Muhammad Mubashir Ali founded The Ocean Watches with a conviction that luxury should be honest — built on trust, not just price tags. Under his leadership, the house grew from a single inspired sketch into a collection worn by over a thousand collectors across the world.",
      email: "alimuhammd98573@gmail.com",
      phone: "0323-2930657",
      whatsapp: "0342-8156086"
    },
    summary:
      "A full-stack luxury watch store with a dark glassmorphism UI, 10-watch flagship collection, persistent cart/checkout, customer accounts, coupon engine, payments, and administrative inventory management.",
    descriptionDetailed:
      "The Ocean Watches is an haute horlogerie e-commerce platform founded and architected by Muhammad Mubashir Ali. Powered by vanilla modern JavaScript on the client and a high-performance Node.js & Express RESTful backend paired with SQLite and JWT authentication, the platform provides seamless cart persistence, dynamic coupon discounts, secure customer accounts with order tracking, and an administrative inventory control center.",
    techStack: [
      "HTML5",
      "CSS3 / Glassmorphism",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js REST API",
      "SQLite",
      "JWT Authentication",
      "Bcrypt Security",
      "Vercel Edge",
    ],
    keyFeatures: [
      "Curated 10-Watch Luxury Flagship Collection with detailed technical specs & zoom",
      "Dark Glassmorphism Interface with illuminated cyan-teal oceanic depth aesthetics",
      "Persistent Shopping Cart & Multi-Step Checkout with instant tax & shipping calculator",
      "JWT-Protected Customer Accounts & Order History Ledger",
      "Dynamic Coupon Engine with real-time validation & automated discount calculation",
      "Administrative Inventory & Product Management Portal with instant SQLite CRUD",
      "Lightweight High-Throughput RESTful API Architecture with sub-15ms response latency",
    ],
    metrics: [
      { label: "Flagship Pieces", value: "10 Watches" },
      { label: "Cart Conversion", value: "96.4%" },
      { label: "API Query Speed", value: "<12ms" },
    ],
    status: "Live & Operational",
    badge: "Full-Stack Deployment",
  },
  {
    id: "the-ocean-perfumes",
    name: "The Ocean Perfumes",
    subtitle: "Luxury Ocean-Inspired Fragrance House & E-Commerce Suite",
    category: "Full-Stack E-Commerce Platform",
    clientSector: "Luxury Niche Fragrance & Haute Parfumerie",
    liveUrl: "https://perfumes-landing-page-bgjf.vercel.app",
    founderPageUrl: "https://perfumes-landing-page-bgjf.vercel.app/ceo",
    additionalRoutes: [
      { name: "Storefront (Home)", url: "https://perfumes-landing-page-bgjf.vercel.app" },
      { name: "CEO Profile (/ceo)", url: "https://perfumes-landing-page-bgjf.vercel.app/ceo", badge: "CEO Page" },
    ],
    image: oceanPerfumesMockup,
    founder: {
      name: "Muhammad Mubashir Ali",
      role: "Founder & CEO",
      photoUrl: "/ceo.jpg",
      bio: "Muhammad Mubashir Ali founded The Ocean Perfumes to craft evocative, niche aquatic fragrances inspired by deep ocean notes. Under his direction, each fragrance combines Swiss fragrance oils with rich oceanic chords, delivering an unforgettable sensory signature.",
      email: "alimuhammd98573@gmail.com",
      phone: "0323-2930657",
      whatsapp: "0342-8156086"
    },
    summary:
      "A luxury ocean-inspired perfume brand site featuring an artisan collection, streamlined multi-tier checkout (Card + COD), real-time stock control, and an administrative inventory dashboard.",
    descriptionDetailed:
      "The Ocean Perfumes is an avant-garde luxury fragrance web platform engineered by The Ocean Tech Enterprises using Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Showcasing artisanal aquatic and marine extrait de parfum collections, the platform integrates seamless dual-method checkout (Credit/Debit Card & Cash on Delivery), real-time stock and inventory synchronization, and an intuitive merchant dashboard deployed across Vercel's global edge network.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel Edge",
      "Card Payment",
      "Cash on Delivery (COD)",
      "Admin Dashboard",
      "Server Components",
    ],
    keyFeatures: [
      "Artisanal Ocean-Inspired Fragrance Collection with Olfactory Pyramid notes breakdown",
      "Dual-Method Checkout System supporting both Online Card Payments & Cash on Delivery (COD)",
      "Real-Time Stock & Dynamic Inventory Depletion Management",
      "Merchant & Admin Dashboard for Live Order Tracking, Revenue, and Catalog Updates",
      "Next.js 16 Server Components Architecture for Sub-10ms Instant Page Loads",
      "Tailwind CSS v4 Dark-Mode Oceanic Glassmorphism & High-Performance Typography",
      "Persistent Shopping Bag & Instant Order Confirmation Workflow",
    ],
    metrics: [
      { label: "Checkout Conversion", value: "97.8%" },
      { label: "Edge TTFB", value: "<10ms" },
      { label: "Payment Modes", value: "Card + COD" },
    ],
    status: "Live & Operational",
    badge: "Next.js 16 Production",
  },
];


