// projectData.js
const projectData = [
  {
    id: "howard-miller",
    title: "Howard Miller Website Redesign",
    desc: "Redesigned and built website with modern e-commerce features and improved customer experience.",
    tags: ["E-commerce", "Web Design", "Shopify"],
    github: null,
    overview:
      "Complete redesign focusing on a modern user experience, integrating Shopify for e-commerce functionality. Adding features for product customization and AI-powered marketing tools.",
    features: ["Responsive product catalogs", "Integrated inventory management", "Streamlined checkout process"],
    video: "https://www.youtube.com/embed/wbJcJCkBcMg",
    screenshots: [
      {
        src: "/hm-home.jpg",
        alt: "Homepage redesign",
        caption: "Homepage layout",
      },
    ],
    techStack: ["Shopify Liquid", "jQuery", "Node.js", "Express", "MySQL"],
  },
  {
    id: "product-configurator",
    title: "Console Configuration Suite",
    desc: "A Shopify-integrated tool for real-time 3D furniture customization.",
    tags: ["Shopify Liquid", "jQuery", "Node.js", "Express", "UX"],
    github: null,
    demo: "#",
    overview:
      "Developed an interface that allows users to customize furniture pieces in real-time with dynamic quoting and configuration options. Integrated seamlessly with Shopify through a backend built in Node.js and Express.",
    features: ["Live 3D product preview", "Real-time dimension calculations", "User-friendly interface", "PDF generation for quoting"],
    screenshots: [
      {
        src: "/configurator.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive furniture configurator",
      },
    ],
    techStack: ["Shopify Liquid", "jQuery", "Node.js", "Express", "UX"],
  },
  {
    id: "automated-marketing",
    title: "Automated Marketing Tools",
    desc: "Developed automated systems for generating product spec sheets and marketing materials.",
    tags: ["Automation", "Marketing", "Excel", "Node.js"],
    github: null,
    demo: "#",
    overview: "Created backend scripts and templates to automatically generate marketing assets from either csv data or a MySQL database.",
    features: ["One-click spec sheet export", "Metadata-driven templating"],
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
    features: ["AI-generated room scenes", "Smart product recommendation bot", "Speech-to-text integration"],
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
    desc: "Created a digital archive for family history, including video and image digitization, interactive family tree, games and voting systems, and login authentication.",
    tags: ["Archives", "Family History", "Multimedia", "React", "Vite", "MUI", "ASP.NET Core", "Entity Framework", "MySQL Server", "IIS Hosting"],
    github: null,
    demo: "#",
    overview:
      "A personal archival platform combining digitized videos, photos, and an interactive family tree interface. Focused on longevity, privacy, and accessibility. Family members are provided a user-friendly interface to explore, upload, and update information that is stored on a database.",
    features: ["Family tree visualization", "Video/audio playback from archive", "Private access controls"],
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
    features: ["Physics-based puzzles", "Dialog-driven narrative", "Discord bot integration"],
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
    id: "media-showcase",
    title: "Media Showcase",
    desc: "Take a deeper look into some of the media work I've done professionally and personally.",
    tags: ["Video Editing", "3D Animation", "Blender", "Adobe Suite", "Camera Work", ""],
    github: null,
    demo: "#",
    overview:
      "Animated a fully custom 3D segment in Blender as part of the viral ‘Shrek 2 Retold’ project. Included character rigging, lip-syncing, and stylized lighting.",
    features: ["Full 3D animation pipeline", "Custom rigging & lip-sync", "Stylized render aesthetic"],
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
    features: ["Live weather and news feeds", "Motion and door sensor integration", "Mobile responsive interface"],
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
