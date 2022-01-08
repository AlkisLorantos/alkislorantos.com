import React from "react";
import Container from "components/Container";
import Link from "next/link";
import ProjectCard from "components/ProjectCard";
import Contact from "components/Contact";

export default function projects() {
  return (
    <Container
      title="Projects – Alkis Lorantos"
      description="Projects that I've built and upcoming projects."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Full-Stack
        </h3>

       
        <ProjectCard
          title="Project Title"
          description="✍🏻 Project Description gjkhjkadfshvkjfhgjkhdfjkghfkjghfjhkfjshv;khfjkhfighuighfjghfjkhgjkfhgjkfhgjkfhgh"
          href=""
          icon="gba"
          tags={["tags", "tags", "tags"]}
        />
        <a
          href="https://github.com/alkislorantos"
          className="border flex flex-row items-center justify-center mx-auto rounded-md dark:text-gray-300 px-4 py-2 text-gray-800"
        >
          See all at{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="ml-2"
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
        </a>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>
        <ProjectCard
          title="Upcoming Project title "
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="#"
          icon="algochurn"
          tags={["NextJS", "Tailwind", "MongoDB", "NodeJS"]}
        />
        <ProjectCard
          title="More projects coming soon.."
          description="As soon as I start working on a project it will be updated here. In the meantime check out my other projects"
          href="#"
          icon="more"
        />

        {/* 🎶 A music streaming website (like spotify) built using PHP, HTML/CSS, AJAX, JS, jQuery, JSON, mySQL and more. */}
        <Contact />
      </div>
    </Container>
  );
}
