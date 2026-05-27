export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  tags: string[];
  highlights: string[];
  url?: string;
  github?: string;
  period?: string;
}

export const projects: Project[] = [
  {
    id: "tatalo",
    name: "Tatalo",
    description:
      "A live inventory platform for thrift and vintage sellers, enabling real-time listing, " +
      "discovery, and purchasing with AI-powered features and integrated payments.",
    technologies: ["Next.js", "Expo", "Supabase", "Stripe", "OpenAI", "TypeScript"],
    tags: ["AI", "mobile", "fullstack", "e-commerce"],
    highlights: [
      "Built cross-platform mobile and web app using Expo and Next.js with shared Supabase backend",
      "Integrated Stripe for payment processing and seller payout flows",
      "Leveraged OpenAI API for AI-powered product descriptions and category tagging",
      "Implemented real-time inventory updates using Supabase Realtime subscriptions",
    ],
    url: "https://tatalo.vercel.app/",
  },
  {
    id: "diagnosys",
    name: "Diagnosys",
    description:
      "A disease prevention platform featuring an AI-powered medical chat interface and " +
      "local health trend visualizations powered by Google Cloud APIs.",
    technologies: ["Next.js", "MUI", "Cohere API", "Google Cloud APIs", "TypeScript"],
    tags: ["AI", "fullstack", "health", "LLM"],
    highlights: [
      "Built AI medical chat using Cohere API with context-aware health Q&A",
      "Integrated Google Cloud APIs for local disease trend data and geographic visualizations",
      "Designed responsive UI with MUI and Next.js App Router",
    ],
    url: "https://diagnosys-lake.vercel.app",
    github: "https://github.com/anshramanath/diagnosys",
  },
  {
    id: "email-tracker",
    name: "Email Tracker",
    description:
      "A desktop app that connects to Gmail and uses AI to summarize unread emails, " +
      "helping users triage their inbox faster.",
    technologies: ["Electron", "React", "Cohere API", "Gmail API", "JavaScript"],
    tags: ["AI", "desktop", "LLM"],
    highlights: [
      "Built cross-platform desktop app with Electron and React",
      "Integrated Gmail API with OAuth for email fetching",
      "Used Cohere API to generate concise AI summaries of unread email threads",
    ],
    github: "https://github.com/anshramanath/email-tracker",
  },
  {
    id: "healthai-app",
    name: "HealthAI App",
    description:
      "An iOS app that reads Apple Health data and provides an AI-powered chat interface " +
      "for personalized health insights.",
    technologies: ["SwiftUI", "HealthKit", "OpenRouter API", "Swift"],
    tags: ["AI", "mobile", "iOS", "health", "LLM"],
    highlights: [
      "Built native iOS app in SwiftUI with HealthKit integration for real-time health data access",
      "Implemented AI chat using OpenRouter API with personal health metrics injected into context",
      "Designed conversational UI for users to ask questions about their Apple Health data",
    ],
    github: "https://github.com/anshramanath/health-ai-app",
  },
  {
    id: "poker-tracker",
    name: "Poker Tracker",
    description:
      "A session logging platform for poker players to track wins, losses, and performance over time.",
    technologies: ["Next.js", "Firebase", "Firestore", "TypeScript"],
    tags: ["fullstack", "consumer"],
    highlights: [
      "Built full-stack session tracking app with Next.js and Firebase Firestore",
      "Implemented real-time stats dashboard with session history and profit/loss charts",
    ],
    url: "https://poker-tracker-1b418.web.app",
    github: "https://github.com/anshramanath/poker-tracker",
  },
  {
    id: "random-restaurant-finder",
    name: "Random Restaurant Finder",
    description:
      "A restaurant discovery app that uses the Overpass and Nominatim APIs to find and suggest random nearby restaurants.",
    technologies: ["Next.js", "MUI", "Overpass API", "Nominatim", "TypeScript"],
    tags: ["fullstack", "consumer"],
    highlights: [
      "Integrated Overpass API (OpenStreetMap) and Nominatim for location-based restaurant queries",
      "Built randomization and filtering logic for cuisine type and distance",
    ],
    url: "https://random-restaurant-finder-six.vercel.app",
    github: "https://github.com/anshramanath/random-restaurant-finder",
  },
  {
    id: "posts-app",
    name: "Posts App",
    description:
      "A social feed platform where users can create posts with text and images, follow others, and browse a feed.",
    technologies: ["React", "Bootstrap", "Node.js", "MongoDB", "AWS S3"],
    tags: ["fullstack", "social"],
    highlights: [
      "Built REST API with Node.js backed by MongoDB for posts and user data",
      "Integrated AWS S3 for image uploads",
      "Implemented user authentication with JWT and protected frontend routes",
    ],
    github: "https://github.com/anshramanath/posts-app",
  },
  {
    id: "poker-ledger",
    name: "Poker Ledger",
    description:
      "A poker buy-in tracking app for logging sessions and calculating net profit/loss across players.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    tags: ["fullstack", "consumer"],
    highlights: [
      "Designed REST API with Express and MongoDB for game and session tracking",
      "Built TypeScript React frontend with real-time profit/loss calculations",
    ],
    github: "https://github.com/anshramanath/poker-ledger",
  },
  {
    id: "covalent-launch-website",
    name: "Covalent Launch Website",
    description: "Marketing and launch website for Covalent, a social media agency.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["frontend"],
    highlights: [
      "Built responsive marketing site for agency launch",
    ],
    url: "https://covalent.llc",
    github: "https://github.com/anshramanath/covalent-launch-website",
  },
];
