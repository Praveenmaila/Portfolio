import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPython,
  
  
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

function Skills() {
  const list = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-300" /> },
  ];

  const listb = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-white" /> },

  ];

  const listl = [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-yellow-200" /> },
    { name: "OOPS", icon: <FaJava className="text-white" /> },
    { name:"git", icon:<FaGitAlt className="text-orange-500" />},
    { name:"Docker", icon:<FaDocker className="text-blue-500" />},
    {name: "Python", icon: <FaPython className="text-yellow-300" /> }

    
  ];

  const listc = [
    { name: "git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-yellow-200" /> },
    { name: "OOPS", icon: <FaJava className="text-white" /> },
    { name: "Javascript", icon: <DiJavascript1 className="text-white" /> },
  ];

  return (
    <div>
      <div className="max-w-2xl py-4 font-medium font-sans px-4">
        <p className="py-4 font-sans font-semibold text-[#ffdb89] text-xl">
          Skills
        </p>
        Frontend
        <div className="flex flex-wrap gap-2 font-light mt-2">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 px-2 py-1 border border-neutral-600 font-semibold bg-neutral-800 rounded text-xs"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl  font-medium font-sans px-4">
        Backend & DBs
        <div className="flex flex-wrap gap-2 font-light mt-2">
          {listb.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 border border-neutral-600 px-2 py-1 font-semibold bg-neutral-800 rounded text-xs"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl py-4 font-medium font-sans px-4">
        Languages & Others
        <div className="flex flex-wrap gap-2 font-light mt-2">
          {listl.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 border border-neutral-600 px-2 py-1 bg-neutral-800 font-semibold rounded text-xs"
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
