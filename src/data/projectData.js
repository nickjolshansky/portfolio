const projectData = [
  {
    id: "howard-miller",
    title: "Howard Miller Website Redesign",
    desc: "Redesigned and built website with modern e-commerce features and improved customer experience.",
    tags: ["E-commerce", "Web Design", "Shopify"],
    overview:
      "A complete overhaul of the Howard Miller website, focused on delivering a seamless, modern shopping experience. Built on Shopify, the new site features enhanced e-commerce capabilities including responsive product catalogs, real-time inventory integration, and a simplified checkout process. Custom product configuration tools and AI-driven marketing enhancements were added to support personalization and improve conversion rates.",
    features: ["Responsive product catalogs", "Integrated inventory management", "Streamlined checkout process"],
    screenshots: [
      {
        src: "/images/projects/hm-website/redesign/hm-homepage.webm",
        alt: "Homepage redesign",
        caption: "Homepage layout",
      },
      {
        src: "/images/projects/hm-website/redesign/hm-collection-page.webm",
        alt: "Product Collection Page",
        caption: "Product Collection Page and Navigation",
      },
      {
        src: "/images/projects/hm-website/redesign/hm-product-page.webm",
        alt: "Product Page",
        caption: "Product Page",
      },
      {
        src: "/images/projects/hm-website/redesign/hm-checkout.webm",
        alt: "Checkout",
        caption: "Checkout",
      },
    ],
    see_also: ["product-configurator", "automated-marketing", "ai-sales-tools"],
  },
  {
    id: "product-configurator",
    title: "Console Configuration Suite",
    desc: "A Shopify-integrated tool for real-time 3D furniture customization.",
    tags: ["Shopify Liquid", "jQuery", "Node.js", "Express", "UX"],
    github: null,
    overview:
      "Developed a custom UI that connects to Intiaro’s 3D engine via API, enabling real-time furniture customization and quoting within Shopify. The interface handles dimension & sku logic, option visualization, and PDF generation. Built for a seamless user experience using Node.js, Express, and jQuery.",
    features: ["Live 3D product preview", "Real-time dimension calculations", "User-friendly interface", "PDF generation for quoting"],
    screenshots: [
      {
        src: "/images/projects/hm-website/configurator/console-configurator.webm",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/console0.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/console1.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/console2.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/modular0.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/modular1.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/modular2.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/modular3.jpg",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
      {
        src: "/images/projects/hm-website/configurator/modular-configurator.webm",
        alt: "Configurator tool UI",
        caption: "Interactive console configurator",
      },
    ],
    see_also: ["howard-miller", "automated-marketing", "ai-sales-tools"],
  },
  {
    id: "automated-marketing",
    title: "Automated Marketing and Sales Tools",
    desc: "Developed automated systems for generating product spec sheets and marketing materials.",
    tags: ["Automation", "Marketing", "Excel", "Node.js", "OpenAI API"],
    github: null,
    overview:
      "Built a suite of tools to automate the generation of product spec sheets and marketing assets from CSV or MySQL sources. Integrated OpenAI for dynamic content creation and templating, with one-click exports and Shopify quoting support. Backend developed in Node.js or PHP depending on client needs, designed for speed, scalability, and ease of use.",
    features: ["One-click spec sheet export", "Metadata-driven templating", "OpenAI integration for content generation"],
    screenshots: [
      {
        src: "/images/projects/hm-website/automation/automated-marketing.jpg",
        alt: "Automated marketing tools",
        caption: "Automated marketing tools for generating spec sheets and product data",
      },
      {
        src: "/images/projects/hm-website/automation/product-spec-sheet.jpg",
        alt: "Automated marketing tools",
        caption: "Product spec sheets generated on demand from data stored in Shopify and other product inventory managers",
      },
      {
        src: "/images/projects/hm-website/automation/sheet.jpg",
        alt: "Automated marketing tools",
        caption: "Marketing sheets for sales reps built directly from excel data using node.js and html templating",
      },
      {
        src: "/images/projects/hm-website/automation/quote-tool0.jpg",
        alt: "Shopify integrated quoting tool",
        caption: "Shopify integrated dashboard for sales raps and admins to view past quotes",
      },
      {
        src: "/images/projects/hm-website/automation/quote-tool1.jpg",
        alt: "Shopify integrated quoting tool",
        caption: "Integrated Shopify's storefront API to parse order data and display details to users with authorization",
      },
      {
        src: "/images/projects/hm-website/automation/quote-tool2.jpg",
        alt: "Shopify integrated quoting tool",
        caption: "Automatically populate checkout cart with selected items using Shopify's cart API ",
      },
      {
        src: "/images/projects/hm-website/automation/quote-tool3.jpg",
        alt: "Shopify integrated quoting tool",
        caption: "Form with validation to allow sales reps to generate and save new quotes with custom data",
      },
      {
        src: "/images/projects/hm-website/automation/quote-tool4.jpg",
        alt: "Shopify integrated quoting tool",
        caption: "PHP backend to handle quote saving and PDF generation for elegant information display",
      },
      {
        src: "/images/projects/hm-website/automation/quote-tool.webm",
        alt: "Shopify integrated quoting tool",
        caption: "PHP backend to handle quote saving and PDF generation for elegant information display",
      },
    ],
    see_also: ["howard-miller", "product-configurator", "ai-sales-tools"],
  },
  {
    id: "ai-sales-tools",
    title: "AI-Powered Sales Solutions",
    desc: "Developed AI-powered tools to support online furniture sales, including a room scene generator powered by diffusion models and a chatbot trained on product data. The chatbot handles customer inquiries and recommends products based on real-time inputs. All tools are integrated with existing sales platforms via REST APIs and supported by a Node.js/PHP backend.",
    tags: ["AI", "Sales Tools", "Chatbot", "OpenAI", "Node.js", "MySQL", "REST API", "PHP"],
    github: null,
    overview:
      "Built a suite of AI tools to enhance online furniture sales. Included a room scene generator using diffusion models and a conversational chatbot trained on product data.",
    features: ["AI-generated room scenes", "Smart product recommendation bot", "Chatbot for customer inquiries", "Integration with existing sales platforms"],
    screenshots: [
      {
        src: "/images/projects/ai/presti.webm",
        alt: "Generated room scene",
        caption: "AI generated room scene featuring user-configured furniture",
      },
      {
        src: "/images/projects/ai/ai-chat.webm",
        alt: "AI product FAQ chatbot",
        caption: "AI chatbot interface for customer questions",
      },
      {
        src: "/images/projects/ai/ai0.jpg",
        alt: "AI customer rep assistant",
        caption: "AI assistant for referencing legacy product documentation",
      },
      {
        src: "/images/projects/ai/ai1.jpg",
        alt: "AI customer rep assistant",
        caption: "AI assistant for referencing legacy product documentation",
      },
      {
        src: "/images/projects/ai/customer-rep-ai-assistant.webm",
        alt: "AI customer rep assistant",
        caption: "AI assistant for referencing legacy product documentation",
      },
    ],
    see_also: ["howard-miller", "product-configurator", "automated-marketing"],
  },
  {
    id: "geneva-archives",
    title: "Geneva Street Archives",
    desc: "Created a digital archive for family history, including video and image digitization, interactive family tree, games and voting systems, and login authentication.",
    tags: ["Archives", "Family History", "Multimedia", "React", "Vite", "MUI", "ASP.NET Core", "Entity Framework", "MySQL Server", "IIS Hosting"],
    github: null,
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
    see_also: ["smart-dashboard", "game-showcase", "media-showcase"],
  },
  {
    id: "smart-dashboard",
    title: "Smart Home Dashboard",
    desc: "Touchscreen Raspberry Pi dashboard for weather, news, and home surveillance system.",
    tags: ["IoT", "Raspberry Pi", "Home Automation", "HTML/CSS/JS/jQuery", "REST API"],
    github: null,
    overview:
      "Created a touchscreen dashboard on a Raspberry Pi to display weather, news, and live surveillance feeds. Built with HTML/CSS/JS and REST APIs, it serves as a central hub for information to start my day.",
    features: ["Live weather and news feeds", "Connection to home surveillance system", "Touchscreen interface", "Hosted on Raspberry Pi / Linux"],
    screenshots: [
      {
        src: "/images/projects/smart-dashboard/news.jpg",
        alt: "Home dashboard UI",
        caption: "Smart home display powered by Raspberry Pi and HTML/CSS/JS/jQuery",
      },
      {
        src: "/images/projects/smart-dashboard/weather.jpg",
        alt: "Daily updated weather",
        caption: "Daily updated weather UI",
      },
      {
        src: "/images/projects/smart-dashboard/pi.jpg",
        alt: "Raspberry Pi",
        caption: "All controlled by a Raspberry Pi",
      },
    ],
    see_also: ["subtitles-pokemon-player", "game-showcase", "media-showcase"],
  },
  {
    id: "subtitles-pokemon-player",
    title: "Automated Pokemon Played by Movie Subtitles",
    desc: "A Python program that uses movie subtitles to generate input commands for a Pokémon game.",
    tags: ["HTML/CSS/JS", "Python", "Flask", "Automation", "Parsing"],
    github: null,
    overview:
      "Developed a Python/Flask program that takes SRT movie subtitles and transforms them into live input commands for a Pokémon game. This project explores the intersection of automation, text parsing, and playful absurdity. The system synchronizes subtitle timing with game inputs, turning passive movie watching into unpredictable, automated gameplay.",
    features: ["Subtitle parsing", "Input command generation", "Game automation", "Pointless fun"],
    screenshots: [
      {
        src: "/images/projects/pokemon-player/subs-play-pokemon.webm",
        alt: "Demo Video",
        caption:
          "The python script parses the timecodes for each sentence in the subtitle file and tries to highlight each word at the best approximate time. This ensures that the subtitles never get too out of sync with the audio. The length of each word determines what input command will be sent to the game.",
      },
    ],
    see_also: ["geneva-archives", "game-showcase", "media-showcase"],
  },
  {
    id: "game-showcase",
    title: "Game Development Showcase",
    desc: "Developed a Unity puzzle game and a Discord bot for gaming community integration.",
    tags: ["Unity", "Game Dev", "Discord Bot"],
    github: null,
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
    see_also: ["geneva-archives", "smart-dashboard", "media-showcase"],
  },
  {
    id: "media-showcase",
    title: "Media Showcase",
    desc: "Take a deeper look into some of the media work I've done professionally and personally.",
    tags: [
      "3D Animation",
      "Video Production",
      "Broadcast Directing",
      "Blender",
      "Adobe Creative Suite",
      "Live Event Production",
      "Camera Operation",
      "Technical Directing",
      "Collaborative Projects",
      "Motion Graphics",
    ],
    github: null,
    overview:
      "A multi-disciplinary showcase of my professional and personal media projects, spanning broadcast television, animated promos, live event production, and collaborative viral art. Highlights include directing live newscasts, orchestrating sports broadcasts, delivering dynamic product promos, and contributing a fully custom 3D animated sequence to the global collaborative film ‘Shrek 2 Retold’. My roles have encompassed everything from technical directing and camera operation to 3D modeling, rigging, and animation, demonstrating both creative vision and technical mastery across the entire media production pipeline.",
    features: [
      "End-to-end 3D animation workflow (modeling, rigging, animating, lighting, rendering)",
      "Broadcast experience: technical directing, live graphics, audio, and camera work",
      "Collaborative work with large teams of artists and media professionals",
      "Proficiency in Blender, Adobe Premiere, After Effects, and broadcast automation (Ross Overdrive)",
      "Creation of stylized, narrative-driven promos and branded content",
      "Hands-on experience in both studio and field production settings",
      "Versatility across roles: director, animator, camera operator, graphics, replay, and audio",
      "Experience mentoring, volunteering, and producing community media",
    ],
    screenshots: [
      {
        src: "/images/projects/media-showcase/cabinet-promo.webm",
        alt: "Modular Cabinet Promo",
        caption:
          "By leveraging Blender for animation, staging, lighting, and refining model geometry, I created a promotional video that showcases how our modular cabinets can be customized in both appearance and shape to suit each customer’s needs.",
      },
      {
        src: "/images/projects/media-showcase/news.webm",
        alt: "WLUC TV6",
        caption:
          "In the heart of the UP I had the priviledge of directing newscasts for WLUC TV6. My work included techincal directing, programming the flow of production using Ross Overdrive, staging and queueing graphics, cameras, microphones, pre-recorded materials, and live on-location segments.",
      },
      {
        src: "/images/projects/media-showcase/hockey.webm",
        alt: "Sports Broadcasting",
        caption:
          "I have sports broadcasting experience that spans every role in the control room including directing, camera operating, replay, audio, and graphics.",
      },
      {
        src: "/images/projects/media-showcase/shrek-2-retold.webm",
        alt: "Artist Collaboration",
        caption:
          "I got the opportunity to contribute to a project featuring over 800 artists! I collaborated with other artists with 3D modeling, texturing, and lighting to a short scene in the upcoming film Shrek 2 Retold!",
      },
      {
        src: "/images/projects/media-showcase/volunteer-editing.webm",
        alt: "Volunteer Work and Editing",
        caption:
          "During my education I volunteered for Traverse Area Community Media to get hands on experience developing media content for live local events and community projects. This is also where I honed my skill for video editing.",
      },
    ],
    see_also: ["geneva-archives", "game-showcase", "smart-dashboard"],
  },
];

export default projectData;
