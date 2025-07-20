// projectData.js
const projectData = [
  {
    id: "howard-miller",
    title: "Howard Miller Digital Transformation",
    desc: "Redesigned a furniture manufacturer’s website with modern e-commerce features and improved customer experience.",
    tags: ["E-commerce", "Web Design", "React"],
    github: null,
    demo: "#",
    overview:
      "Complete redesign of legacy website focusing on modern UX principles, performance, and scalable architecture. Introduced a modular component system for easier updates and maintenance.",
    features: [
      "Responsive product catalogs",
      "Integrated inventory management",
      "Streamlined checkout process",
    ],
    screenshots: [
      {
        src: "/hm-home.jpg",
        alt: "Homepage redesign",
        caption: "Modern homepage layout",
      },
    ],
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "product-configurator",
    title: "Console Configuration Suite",
    desc: "A Shopify-integrated tool for real-time 3D furniture customization.",
    tags: ["Shopify", "Customization", "UX"],
    github: null,
    demo: "#",
    overview:
      "Developed a React-based interface that allows users to customize furniture pieces in real-time with dynamic pricing and configuration options. Integrated seamlessly with Shopify backend.",
    features: [
      "Live 3D product preview",
      "Real-time pricing updates",
      "Custom component picker",
    ],
    screenshots: [
      {
        src: "/configurator.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive furniture configurator",
      },
    ],
    techStack: ["React", "Shopify", "GraphQL", "Three.js"],
  },
  {
    id: "automated-marketing",
    title: "Automated Marketing Tools",
    desc: "Developed automated systems for generating product spec sheets and 3D marketing materials.",
    tags: ["Automation", "Marketing", "PDF"],
    github: null,
    demo: "#",
    overview:
      "Created backend scripts and templates to automatically generate marketing assets from a product database. Included PDF spec sheets and rendered 3D views using Blender pipelines.",
    features: [
      "One-click spec sheet export",
      "Batch 3D rendering automation",
      "Metadata-driven templating",
    ],
    screenshots: [
      {
        src: "/spec-generator.jpg",
        alt: "Spec sheet tool",
        caption: "Spec sheet generation interface",
      },
    ],
    techStack: ["Python", "Node.js", "Blender API", "Puppeteer"],
  },
  {
    id: "ai-sales-tools",
    title: "AI-Powered Sales Solutions",
    desc: "Implemented AI tools like a room scene generator and chatbot to support furniture sales.",
    tags: ["AI", "Sales Tools", "Chatbot"],
    github: null,
    demo: "#",
    overview:
      "Built a suite of AI tools to enhance online furniture sales. Included a room scene generator using diffusion models and a conversational chatbot trained on product data.",
    features: [
      "AI-generated room scenes",
      "Smart product recommendation bot",
      "Speech-to-text integration",
    ],
    screenshots: [
      {
        src: "/ai-room.jpg",
        alt: "Generated room scene",
        caption: "Room mockups generated with AI",
      },
    ],
    techStack: ["Python", "Hugging Face", "OpenAI", "Next.js"],
  },
  {
    id: "geneva-archives",
    title: "Geneva Street Archives",
    desc: "Created a digital archive for family history, including video digitization and interactive trees.",
    tags: ["Archives", "Family History", "Multimedia"],
    github: null,
    demo: "#",
    overview:
      "A personal archival platform combining digitized videos, photos, and an interactive family tree interface. Focused on longevity, privacy, and accessibility.",
    features: [
      "Family tree visualization",
      "Video/audio playback from archive",
      "Private access controls",
    ],
    screenshots: [
      {
        src: "/geneva-tree.jpg",
        alt: "Family tree viewer",
        caption: "Interactive family tree interface",
      },
    ],
    techStack: ["Vue.js", "Firebase", "FFmpeg", "D3.js"],
  },
  {
    id: "game-projects",
    title: "Game Development Projects",
    desc: "Developed a Unity puzzle game and a Discord bot for gaming community integration.",
    tags: ["Unity", "Game Dev", "Discord Bot"],
    github: null,
    demo: "#",
    overview:
      "Created a 2.5D puzzle game focused on mechanics and narrative pacing. Also built a custom Discord bot that synced with game data and provided real-time stats.",
    features: [
      "Physics-based puzzles",
      "Dialog-driven narrative",
      "Discord bot integration",
    ],
    screenshots: [
      {
        src: "/puzzle-game.jpg",
        alt: "Puzzle game level",
        caption: "Sample gameplay from Unity project",
      },
    ],
    techStack: ["Unity", "C#", "Node.js", "Discord.js"],
  },
  {
    id: "shrek-animation",
    title: "Creative 3D Animation",
    desc: "Animated a scene for the collaborative fan project Shrek 2 Retold using Blender.",
    tags: ["Animation", "Blender", "Creative"],
    github: null,
    demo: "#",
    overview:
      "Animated a fully custom 3D segment in Blender as part of the viral ‘Shrek 2 Retold’ project. Included character rigging, lip-syncing, and stylized lighting.",
    features: [
      "Full 3D animation pipeline",
      "Custom rigging & lip-sync",
      "Stylized render aesthetic",
    ],
    screenshots: [
      {
        src: "/shrek-scene.jpg",
        alt: "Shrek animation still",
        caption: "Custom Blender-rendered frame",
      },
    ],
    techStack: ["Blender", "Grease Pencil", "Adobe Audition"],
  },
  {
    id: "smart-dashboard",
    title: "Smart Home Dashboard",
    desc: "Engineered a touchscreen Raspberry Pi dashboard for weather, news, and home alerts.",
    tags: ["IoT", "Raspberry Pi", "Home Automation"],
    github: null,
    demo: "#",
    overview:
      "Built a touchscreen interface to act as a centralized hub for household info. Pulled data from APIs and local sensors to create a dynamic and personalized dashboard.",
    features: [
      "Live weather and news feeds",
      "Motion and door sensor integration",
      "Mobile responsive interface",
    ],
    screenshots: [
      {
        src: "/smart-dashboard.jpg",
        alt: "Home dashboard UI",
        caption: "Smart home display powered by Raspberry Pi",
      },
    ],
    techStack: ["Raspberry Pi", "Python", "Flask", "React"],
  },
];

export default projectData;
