export interface Chapter {
  id: string;
  title: string;
  slug: string;
}

export interface Module {
  id: number;
  title: string;
  slug: string;
  chapters: Chapter[];
}

export const toc: Module[] = [
  {
    id: 0,
    title: "How This Website Works",
    slug: "website",
    chapters: [
      { id: "0.1", title: "What is a Build System? (Vite)", slug: "build-system" },
      { id: "0.2", title: "How MDX Works (Markdown → React)", slug: "mdx" },
      { id: "0.3", title: "Syntax Highlighting (AST → HTML)", slug: "syntax-highlighting" },
      { id: "0.4", title: "Static Site Generation", slug: "ssg" },
      { id: "0.5", title: "Deploying to GitHub Pages", slug: "deployment" },
    ]
  },
  {
    id: 1,
    title: "The Machine Level",
    slug: "machine",
    chapters: [
      { id: "1.1", title: "Binary & Hexadecimal", slug: "binary" },
      { id: "1.2", title: "CPU Architecture Basics", slug: "cpu" },
      { id: "1.3", title: "Assembly Language (x86/ARM)", slug: "assembly" },
      { id: "1.4", title: "Memory Layout & Stack", slug: "memory" },
      { id: "1.5", title: "System Calls", slug: "syscalls" },
    ]
  },
  {
    id: 2,
    title: "Operating Systems",
    slug: "os",
    chapters: [
      { id: "2.1", title: "What is an OS?", slug: "intro" },
      { id: "2.2", title: "Processes & Threads", slug: "processes" },
      { id: "2.3", title: "Memory Management", slug: "memory" },
      { id: "2.4", title: "File Systems", slug: "filesystems" },
      { id: "2.5", title: "I/O & Device Drivers", slug: "io" },
    ]
  },
  {
    id: 3,
    title: "Systems Programming",
    slug: "systems",
    chapters: [
      { id: "3.1", title: "C Language Deep Dive", slug: "c" },
      { id: "3.2", title: "Pointers & Memory", slug: "pointers" },
      { id: "3.3", title: "Build Systems (Make, CMake)", slug: "build" },
      { id: "3.4", title: "Linking & Loading", slug: "linking" },
      { id: "3.5", title: "Debugging (GDB, LLDB)", slug: "debugging" },
    ]
  },
  {
    id: 4,
    title: "Compilers & Interpreters",
    slug: "compilers",
    chapters: [
      { id: "4.1", title: "Lexical Analysis (Tokenizer)", slug: "lexer" },
      { id: "4.2", title: "Parsing (AST)", slug: "parser" },
      { id: "4.3", title: "Semantic Analysis", slug: "semantic" },
      { id: "4.4", title: "Code Generation", slug: "codegen" },
      { id: "4.5", title: "Interpreters", slug: "interpreters" },
      { id: "4.6", title: "Virtual Machines", slug: "vm" },
      { id: "4.7", title: "JIT Compilation", slug: "jit" },
    ]
  },
  {
    id: 5,
    title: "Networking",
    slug: "networking",
    chapters: [
      { id: "5.1", title: "OSI Model & TCP/IP", slug: "osi" },
      { id: "5.2", title: "Sockets Programming", slug: "sockets" },
      { id: "5.3", title: "DNS & Domain Resolution", slug: "dns" },
      { id: "5.4", title: "HTTP Protocol Deep Dive", slug: "http" },
      { id: "5.5", title: "HTTPS & TLS", slug: "tls" },
      { id: "5.6", title: "WebSockets", slug: "websockets" },
      { id: "5.7", title: "HTTP/2 & HTTP/3", slug: "http2" },
    ]
  },
  {
    id: 6,
    title: "Databases",
    slug: "databases",
    chapters: [
      { id: "6.1", title: "How Databases Store Data", slug: "storage" },
      { id: "6.2", title: "SQL Deep Dive", slug: "sql" },
      { id: "6.3", title: "Query Planning & Optimization", slug: "query" },
      { id: "6.4", title: "ACID & Transactions", slug: "acid" },
      { id: "6.5", title: "Indexing Strategies", slug: "indexing" },
      { id: "6.6", title: "NoSQL Concepts", slug: "nosql" },
      { id: "6.7", title: "Build Your Own Database", slug: "build-db" },
    ]
  },
  {
    id: 7,
    title: "Web Fundamentals",
    slug: "web",
    chapters: [
      { id: "7.1", title: "How Browsers Work", slug: "browsers" },
      { id: "7.2", title: "HTML Parsing & DOM", slug: "dom" },
      { id: "7.3", title: "CSS & Layout Engines", slug: "css" },
      { id: "7.4", title: "JavaScript Engines (V8)", slug: "v8" },
      { id: "7.5", title: "Event Loop & Async", slug: "eventloop" },
      { id: "7.6", title: "Web APIs", slug: "webapis" },
    ]
  },
  {
    id: 8,
    title: "Web Servers",
    slug: "servers",
    chapters: [
      { id: "8.1", title: "Build an HTTP Server", slug: "build-server" },
      { id: "8.2", title: "Routing & Middleware", slug: "routing" },
      { id: "8.3", title: "Static File Serving", slug: "static" },
      { id: "8.4", title: "REST API Design", slug: "rest" },
      { id: "8.5", title: "GraphQL", slug: "graphql" },
      { id: "8.6", title: "gRPC & Protocol Buffers", slug: "grpc" },
    ]
  },
  {
    id: 9,
    title: "Web Frameworks (React Deep Dive)",
    slug: "frameworks",
    chapters: [
      { id: "9.1", title: "Why Frameworks Exist (History)", slug: "history" },
      { id: "9.2", title: "Virtual DOM Explained", slug: "vdom" },
      { id: "9.3", title: "Build Your Own React", slug: "build-react" },
      { id: "9.4", title: "State Management", slug: "state" },
      { id: "9.5", title: "Server Components", slug: "rsc" },
      { id: "9.6", title: "Hydration & SSR", slug: "ssr" },
    ]
  },
  {
    id: 10,
    title: "JavaScript Runtime & Tooling",
    slug: "js-tooling",
    chapters: [
      { id: "10.1", title: "Node.js Architecture", slug: "nodejs" },
      { id: "10.2", title: "Package Managers (npm)", slug: "npm" },
      { id: "10.3", title: "Module Systems (CJS, ESM)", slug: "modules" },
      { id: "10.4", title: "Bundlers (Webpack, Vite)", slug: "bundlers" },
      { id: "10.5", title: "Transpilers (Babel, SWC)", slug: "transpilers" },
      { id: "10.6", title: "TypeScript Internals", slug: "typescript" },
    ]
  },
  {
    id: 11,
    title: "Authentication & Security",
    slug: "security",
    chapters: [
      { id: "11.1", title: "Cryptography Basics", slug: "crypto" },
      { id: "11.2", title: "Hashing & Passwords", slug: "hashing" },
      { id: "11.3", title: "Sessions & Cookies", slug: "sessions" },
      { id: "11.4", title: "JWT Tokens", slug: "jwt" },
      { id: "11.5", title: "OAuth 2.0 Flow", slug: "oauth" },
      { id: "11.6", title: "OWASP Top 10", slug: "owasp" },
    ]
  },
  {
    id: 12,
    title: "APIs & Communication",
    slug: "apis",
    chapters: [
      { id: "12.1", title: "REST Principles", slug: "rest" },
      { id: "12.2", title: "GraphQL Deep Dive", slug: "graphql" },
      { id: "12.3", title: "WebSockets & Real-time", slug: "realtime" },
      { id: "12.4", title: "Message Queues", slug: "queues" },
      { id: "12.5", title: "Event-Driven Architecture", slug: "events" },
    ]
  },
  {
    id: 13,
    title: "Mobile & Desktop",
    slug: "mobile",
    chapters: [
      { id: "13.1", title: "Native vs Cross-Platform", slug: "native" },
      { id: "13.2", title: "React Native Internals", slug: "rn" },
      { id: "13.3", title: "Electron Architecture", slug: "electron" },
      { id: "13.4", title: "Progressive Web Apps", slug: "pwa" },
      { id: "13.5", title: "Mobile App Lifecycle", slug: "lifecycle" },
    ]
  },
  {
    id: 14,
    title: "DevOps & Infrastructure",
    slug: "devops",
    chapters: [
      { id: "14.1", title: "Containers (Docker)", slug: "docker" },
      { id: "14.2", title: "Container Orchestration (K8s)", slug: "k8s" },
      { id: "14.3", title: "CI/CD Pipelines", slug: "cicd" },
      { id: "14.4", title: "Infrastructure as Code", slug: "iac" },
      { id: "14.5", title: "Cloud Services Overview", slug: "cloud" },
    ]
  },
  {
    id: 15,
    title: "Version Control",
    slug: "git",
    chapters: [
      { id: "15.1", title: "Git Internals (Objects, Refs)", slug: "internals" },
      { id: "15.2", title: "Branching & Merging", slug: "branching" },
      { id: "15.3", title: "Build Your Own Git", slug: "build-git" },
      { id: "15.4", title: "GitHub/GitLab Workflows", slug: "workflows" },
    ]
  },
  {
    id: 16,
    title: "Software Architecture",
    slug: "architecture",
    chapters: [
      { id: "16.1", title: "Monoliths vs Microservices", slug: "monoliths" },
      { id: "16.2", title: "Design Patterns", slug: "patterns" },
      { id: "16.3", title: "Domain-Driven Design (DDD)", slug: "ddd" },
      { id: "16.4", title: "CQRS & Event Sourcing", slug: "cqrs" },
      { id: "16.5", title: "Clean Architecture", slug: "clean" },
    ]
  },
  {
    id: 17,
    title: "Testing",
    slug: "testing",
    chapters: [
      { id: "17.1", title: "Unit Testing", slug: "unit" },
      { id: "17.2", title: "Integration Testing", slug: "integration" },
      { id: "17.3", title: "E2E Testing", slug: "e2e" },
      { id: "17.4", title: "TDD Workflow", slug: "tdd" },
      { id: "17.5", title: "Test Coverage & Mocking", slug: "coverage" },
    ]
  },
  {
    id: 18,
    title: "Programming Paradigms",
    slug: "paradigms",
    chapters: [
      { id: "18.1", title: "Imperative Programming", slug: "imperative" },
      { id: "18.2", title: "Object-Oriented (OOP)", slug: "oop" },
      { id: "18.3", title: "Functional Programming", slug: "fp" },
      { id: "18.4", title: "Reactive Programming", slug: "reactive" },
      { id: "18.5", title: "Logic Programming", slug: "logic" },
    ]
  },
  {
    id: 19,
    title: "Performance",
    slug: "performance",
    chapters: [
      { id: "19.1", title: "Profiling & Benchmarking", slug: "profiling" },
      { id: "19.2", title: "Caching Strategies", slug: "caching" },
      { id: "19.3", title: "Database Optimization", slug: "db-perf" },
      { id: "19.4", title: "Frontend Performance", slug: "frontend" },
      { id: "19.5", title: "Load Testing", slug: "load" },
    ]
  },
  {
    id: 20,
    title: "AI & Machine Learning",
    slug: "ai",
    chapters: [
      { id: "20.1", title: "ML Fundamentals", slug: "ml" },
      { id: "20.2", title: "Neural Networks", slug: "neural" },
      { id: "20.3", title: "How LLMs Work", slug: "llm" },
      { id: "20.4", title: "Prompt Engineering", slug: "prompts" },
      { id: "20.5", title: "AI APIs & Integration", slug: "ai-apis" },
      { id: "20.6", title: "RAG & Embeddings", slug: "rag" },
    ]
  },
  {
    id: 21,
    title: "Observability",
    slug: "observability",
    chapters: [
      { id: "21.1", title: "Logging Best Practices", slug: "logging" },
      { id: "21.2", title: "Metrics & Monitoring", slug: "metrics" },
      { id: "21.3", title: "Distributed Tracing", slug: "tracing" },
      { id: "21.4", title: "Alerting & Incidents", slug: "alerting" },
    ]
  },
];
