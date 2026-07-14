"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "lucide-react";

// ✅ Global type definition
type Project = {
  name: string;
  description: string;
  techStack: string[];
  link: string;
};

// ✅ Props for SpotlightCard
type SpotlightCardProps = {
  project: Project;
  variants: any;
};

const Projects = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    initial: { opacity: 0, y: 10, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
  };

  const Fullstack: Project[] = [
    {
  name: "AI-Powered CRM CSV Importer",
  description:
    "Built an AI-powered CRM data importer that automatically maps CSV columns to CRM fields using Gemini AI, validates data, detects duplicates,  for automatic field mapping and seamless bulk data import into CRM systems.",
  techStack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Gemini AI",
    "Tailwind CSS"
  ],
  link: "https://your-deployed-app-url.vercel.app/",
},
  
    {
      name: "Redrob AI Candidate Ranking System",
      description:
        "Built an AI-powered candidate ranking platform that uses semantic search, embeddings, feature engineering, and intelligent scoring to rank candidates beyond keyword matching. Processes large candidate datasets and generates top-ranked candidate recommendations.",
      techStack: ["Python", "Next.js", "Machine Learning", "Hugging Face"],
      link: "https://github.com/Praveenmaila/Redrob-AI-Candidate-Ranking-System",
    },
      {
      name: "GST Invoice Generator",
      description:
        "Developed a professional GST-compliant invoice generator with automatic CGST, SGST, and IGST calculations, PDF export, responsive design, and real-time invoice preview.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],

      link: "https://gst-invoice-generator-sigma.vercel.app/",
    },

    {
      name: "ResolveIT Smart Grievance & Feedback Management System",
      description:
        "Developed a full-stack grievance and feedback management system with React, Spring Boot, and MySQL.",
      techStack: ["React", "Spring Boot", "MySQL"],
      link: "https://github.com/Praveenmaila/ResolveIT",
    },
    {
      name: "Music Player",
      description:
        "Built a Spotify-style MERN music app with secure user auth, playlists, and realtime audio streaming.",
      techStack: ["React", "Node", "MongoDB", "Express"],
      link: "https://github.com/Praveenmaila/week-3-",
    },
    {
      name: "Online Collaboration Tool",
      description:
        "Developed a real-time team collaboration app with user authentication and Kanban boards.",
      techStack: ["React", "Node", "MongoDB", "Express"],
      link: "https://github.com/Praveenmaila/Online-Collaboration-Tool",
    },
     {
      name: "Vegetable Disease Detection Using ML",
      description:
        "Designed an ML system using Random Forest Classifier to detect vegetable diseases.",
      techStack: ["Streamlit", "Python"],
      link: "https://github.com/Praveenmaila/Vegetables-predict",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-12 px-6 max-w-6xl mx-auto flex flex-col justify-center items-center"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-2xl sm:text-3xl mb-5 w-full text-[#ffdb89] font-medium tracking-tight font-sans text-center sm:text-left"
        variants={child}
      >
        Projects
      </motion.h2>

      <motion.p
        className="font-sans text-neutral-500 dark:text-neutral-400 mb-10 text-center sm:text-left max-w-2xl"
        variants={child}
      >
        I enjoy building user-centric applications. These include full-stack and
        frontend projects I’ve developed throughout my journey.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
        {Fullstack.map((fullstack, index) => (
          <SpotlightCard key={index} project={fullstack} variants={child} />
        ))}
      </div>
    </motion.section>
  );
};

// ✅ SpotlightCard with typed props
const SpotlightCard = ({ project, variants }: SpotlightCardProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      variants={variants}
      className="rounded-2xl relative group overflow-hidden p-6 border dark:border-neutral-700 shadow-md bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(99,102,241,0.2), transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-medium font-sans text-black dark:text-white tracking-tight">
            {project.name}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            <button className="text-black dark:text-white cursor-pointer hover:text-indigo-400 transition-colors">
              <Link size={18} />
            </button>
          </a>
        </div>

        <p className="text-sm sm:text-base text-black dark:text-neutral-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="font-medium bg-neutral-200 dark:bg-neutral-700 text-sm text-neutral-700 dark:text-white py-1 px-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
