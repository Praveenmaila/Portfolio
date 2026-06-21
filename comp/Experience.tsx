"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import infosys from "./images/infosys-springboard.png";
import snow from "./images/smartbridge.png";
import edunet from "./images/edunet-partners.jpg";

function Experince() {
  type pro = {
    name: string;
    role: string;
    des: string;
    time: string;
    img: any;
  };
  const comp: pro[] = [
    {
      name: "Infosys Springboard",
      role: "java Developer Intern",
      des: "Developed a full-stack Smart Grievance System using React, Spring Boot, and MySQL, gaining hands-on experience in end-to-end development",
      time: "Oct 2025 - Dec 2025",
      img: infosys,
    },
    {
      name: "Smart Bridge",
      role: "Student Trainee",
      des: "Developed a responsive and user-friendly UI for the knowledge portal of the company",
      time: "May 2025 - July 2025",
      img: snow,
    },
    {
      name: "Edunet Foundation",
      role: "MERN Stack Developer",
      des: "Built a Spotify like music streaming app using MERN stack",
      time: "Dec 2024 - Jan 2025",
      img: edunet,
    },
  ];

  return (
    <div className="max-w-2xl px-4 py-10">
      <p className="font-sans tracking-tight font-semibold text-lg text-[#ffdb89] ">
        Experience
      </p>
      {/* interm */}
      <div className="space-y-4 sm:space-y-6 py-6 px-2 h-fit rounded-2xl ">
        {comp.map((val, idx) => (
          <motion.div key={idx} className="flex flex-col gap-2 rounded-lg ">
            <div className="flex items-center justify-between">
              {/* Left: Image and Name */}
              <div className="flex items-center gap-4">
                <Image
                  src={val.img}
                  width={25}
                  height={25}
                  alt={val.name}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col justify-center font-sans ">
                  <div className="font-medium font-sans tracking-tight  text-black dark:text-neutral-200">
                    {val.name}
                  </div>
                  <p className="text-light text-sm sm:text-sm font-medium text-neutral-400 dark:text-neutral-400">
                    {val.role}
                  </p>
                </div>
              </div>

              {/* Right: Time */}
              <span className="text-sm sm:text-sm text-gray-600 dark:text-neutral-400 font-medium">
                {val.time}
              </span>
            </div>

            {/* Role */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experince;
