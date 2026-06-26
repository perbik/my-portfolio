export type ProjectCategory = "Web" | "Mobile" | "Desktop";

export type Project = {
    slug: string;
    title: string;
    category: ProjectCategory;
    image: string;
    details: string;
    badges: string[];
    github?: string;
    live?: string;
};

export const projects: Project[] = [
    {
        slug: "pupathfinder",
        title: "PUPATHFINDER",
        category: "Mobile",
        image: "/images/PUPathFinder.png",
        details:
            "A mobile campus navigation application that helps users find the shortest route between facilities within the PUP Mabini Campus using Dijkstra's Algorithm. Users can select an origin and destination from an interactive map or search bar, and the app computes the most efficient path while handling unavailable routes due to facility closures or construction. Developed with Flutter and Dart, the application integrates the Google Maps API for real - time map visualization and includes features such as destination bookmarking for quicker access.This project demonstrates the practical application of graph algorithms in solving real- world navigation problems through an intuitive mobile interface.",
        badges: ["Flutter", "Dart"],
        github: "https://github.com/perbik/PUPathFinder",
        live: "",
    },
    {
        slug: "uno-pest-co",
        title: "Uno Pest Co.",
        category: "Web",
        image: "/images/UnoPestCo.png",
        details:
            "Uno Pest Co. is a database-driven information management system developed to streamline the storage, organization, and retrieval of business records for a pest control company. The project focuses on applying database concepts by managing customer information, service records, and other operational data through a structured and efficient system. Built using HTML, CSS, JavaScript, and Python with SQL as the backend database, the project demonstrates core information management principles, including database design, CRUD operations, and data integrity, while providing a user-friendly interface for managing business information.",
        badges: ["SQL", "ReactJS", "Python"],
        github: "https://github.com/perbik/Pest-Control-Work-Order",
    },
    {
        slug: "block-and-conquer",
        title: "Block and Conquer",
        category: "Web",
        image: "/images/BlockAndConquer.png",
        details:
            "A productivity-focused study hub web application designed to help students stay focused, manage tasks, and improve learning through an all-in-one platform. It combines Pomodoro-inspired study sessions, flashcards with Spaced Repetition System (SRS), task management, social collaboration, and gamification to create an engaging and effective learning experience. Built with React, Ruby on Rails, and MySQL, the application features a full-stack architecture that integrates a modern frontend with a RESTful backend API. This project showcases full-stack web development, database management, authentication, and the implementation of productivity and learning techniques in a collaborative platform.",
        badges: ["Ruby on Rails", "ReactJS"],
        github: "https://github.com/jellyM0on/block-and-conquer",
    },
    {
        slug: "scraptopia",
        title: "Scraptopia",
        category: "Desktop",
        image: "/images/Scraptopia.png",
        details:
            "Scraptopia is a 2D educational game that teaches players the importance of proper waste segregation through interactive gameplay and environmental storytelling. Players explore different areas, collect scattered waste, and sort it into the correct bins while completing objectives, interacting with characters, and learning responsible waste management practices. Developed using Godot Engine and GDScript, the game features pixel art created in Aseprite, dynamic tilemap-based environments, collision detection, dialogue systems, audio controls, and interactive UI elements. The project demonstrates game development concepts such as object interactions, player movement, state management, and educational game design.",
        badges: ["Godot", "GDScript", "Aseprite"],
        github: "https://github.com/feiryrej/scraptopia",
    },
    {
        slug: "arttribution",
        title: "ARTtribution",
        category: "Web",
        image: "/images/ARTtribution.png",
        details:
            "As AI becomes a tool for various industry, it is inevitable that it will be used to create art. ARTtribution is a web application that allows people to verify the authenticity of AI-generated art and provide proper attribution regarding its classification (human-made or ai-generated) with art style and model identification. The project is built using Svelte, Typescript, and Python, and it demonstrates the application of web development principles, user interface design, and data management in creating a platform that addresses the challenges of AI-generated content in the art world. Most importantly, the model used achieved 94.90% accuracy in classifying AI-generated art and 94.74% accuracy in identifying the art style.",
        badges: ["Svelte", "Typescript", "Python"],
        github: "https://github.com/hjcarlos/arttribution-app",
        live: "https://arttribution-app.vercel.app/",
    },
    {
        slug: "soundscene",
        title: "SoundScene",
        category: "Web",
        image: "/images/SoundScene.png",
        details:
            "SoundScene is a full-stack web application that connects event organizers and attendees through a centralized platform for discovering and managing grassroots and underground music events. Organizers can create and manage event listings, schedules, venues, ticketing, and media, while attendees can explore events through location-based feeds, interactive maps, calendar views, reminders, and community discussions. Built with React (Vite), Express.js, and MySQL, the application leverages modern cloud services including AWS RDS, AWS S3, Vercel, and Render for deployment and storage. It also integrates Supabase Authentication, LeafletJS with LocationIQ for geolocation features, and Brevo for email notifications, demonstrating scalable full-stack development and third-party API integration.",
        badges: ["ReactJS", "ExpressJS", "MySQL", "Supabase Auth", "LeafletJS", "Brevo"],
        github: "https://github.com/jellyM0on/soundscene",
        live: "https://soundscene.vercel.app/",
    },
    {
        slug: "tala",
        title: "Tala",
        category: "Web",
        image: "/images/Tala.png",
        details:
            "Tala is a modern journaling web application that enables users to record their thoughts, track emotions, and organize journal entries through a personalized digital experience. The platform includes user authentication, calendar-based journal management, profile customization, and an NLP-inspired mood detection system that categorizes entries based on emotions using concepts from Google's GoEmotions dataset. Built with React, TypeScript, Tailwind CSS, and Python, Tala was deployed on Vercel and optimized for performance using Lighthouse and PageSpeed Insights. The project demonstrates frontend development, natural language processing concepts, responsive UI design, and web performance optimization, achieving excellent scores in performance, SEO, and best practices.",
        badges: ["TypeScript", "TailwindCSS", "ReactJS", "Python"],
        github: "https://github.com/perbik/tala",
        live: "https://cttc-tala.vercel.app/",
    },
];

// lipat
export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | "All") {
    if (category === "All") {
        return projects;
    }

    return projects.filter((project) => project.category === category);
}