export const personal = {
  name: "Manav Mendiratta",
  title: "Senior Software Engineer",
  tagline:
    "Shipping high-impact features at scale. Currently at Gemini.",
  location: "Dallas, TX",
  email: "mannimendiratta@yahoo.com",
  links: {
    linkedin: "https://www.linkedin.com/in/manav-mendiratta-734120140/",
    github: "https://github.com/mmendiratta",
    resume: "/resume.pdf",
  },
  bio: "I care about the full lifecycle — design, implementation, rollout, and the data that tells you whether it worked. From first-time user onboarding to cross-platform auth to prediction market funnels, I've shipped it end-to-end and owned what happened after.",
  offTheClock:
    "Off the clock: golf, great dinners, and shipping vibe-coded side projects — currently running a prediction pool and a book review site that actually made it to production.",
}

export const experience = [
  {
    company: "Gemini Space Station",
    location: "New York, NY (Remote)",
    roles: [
      {
        title: "Senior Software Engineer",
        dates: "July 2024 – Present",
        domains:
          "Onboarding · Prediction Markets · Authentication & Recovery · Identity Verification · Credit Card",
        bullets: [
          "Own web and mobile onboarding for all new users — a conversion-critical surface directly tied to customer acquisition. Shipped third-party identity verification end-to-end with phased rollout to 100% of US users.",
          "Led cross-platform authentication enabling seamless sign-in across devices and account recovery — coordinating backend, mobile, and web.",
          "Designed and drove the onboarding funnel for a new prediction markets product from scratch — state machines, API hooks, navigation flows.",
          "Built monitoring infrastructure across Datadog and Mixpanel for onboarding, identity verification, and auth rollouts.",
          "Authored technical design documents defining client-side state management, API contracts, and rollout strategies before implementation began.",
        ],
      },
    ],
  },
  {
    company: "Target Corporation",
    location: "Minneapolis, MN",
    roles: [
      {
        title: "Senior Software Engineer",
        dates: "October 2022 – June 2024",
        domains: null,
        bullets: [
          "Led development of a React/TypeScript supply chain application serving 4,000+ users from warehouse to executive level, improving operational efficiency by 40% and earning C-Suite recognition.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "July 2020 – October 2022",
        domains: null,
        bullets: [
          "Part of Target's Technology Leadership Program — a rotational engineering track. First rotation on a frontend React/TypeScript team building a supply chain application to track trailers within Target's network.",
          "Second rotation on the Stores Inventory team, working with Java, Kotlin, and Kafka to handle inventory data across every store in the US.",
          "Built real-time inventory tracking with Kafka consumers, interactive analytics dashboards, and Grafana telemetry for production health monitoring.",
        ],
      },
      {
        title: "Software Engineering Intern",
        dates: "May 2019 – August 2019",
        domains: null,
        bullets: [
          "Interned on Target's Prepaid Services Team, engineering APIs with third-party vendors for the activation of prepaid video game cards. The microservice integrated with POS to deliver fast, secure, and accurate activations.",
        ],
      },
    ],
  },
]

export const stack = [
  "React",
  "React Native",
  "TypeScript",
  "X-State",
  "React Query",
  "Node.js",
  "Kotlin",
  "Datadog",
  "Mixpanel",
  "Claude Code",
]

export const projects = [
  {
    name: "Prediction Pool",
    description:
      "A prediction market side project — built end-to-end and shipped to production. Real users, real picks.",
    tags: ["React", "TypeScript", "Node.js"],
    url: "https://poolside-markets.com",
    repo: null,
  },
  {
    name: "Book Review Site",
    description:
      "A place to track reads and share reviews. Vibe-coded, actually made it to prod.",
    tags: ["React", "TypeScript"],
    url: "https://rainareviews.com",
    repo: null,
  },
]
