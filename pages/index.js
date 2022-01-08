import Container from "components/Container";
import Link from "next/link";
import BlogPost from "components/BlogPost";
import ProjectCard from "components/ProjectCard";
import Timeline from "components/Timeline";
import Contact from "components/Contact";

import { LIGHT_COLORS } from "lib/constants";

import { shuffleArray } from "lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "@/ui/RainbowHighlight";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "lib/useIsFontReady";
import { LinkPreview } from "components/LinkPreview";
import { StaticLinkPreview } from "components/StaticLinkPreview";

import Typed from 'react-typed';

export default function Home() {
  const [colors, setColors] = useState([]);

  const isFontReady = useIsFontReady();

  const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Jamstack',
		'Next.js',
		'HTML',
		'CSS',
		'Python',
		'Water Polo',
    'Freelancing',
    'Artificial Intelligence',
    'Sports'
	];

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title="Alkis Lorantos - Full Stack Developer and freelancer"
      description="Full-Stack developer, writer and freelancer"
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <RoughNotationGroup show={isFontReady}>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Hey, I am ALkis Lorantos 👋
          </h1>

          <h2 className="text-gray-700 dark:text-gray-500 mb-16 mt-4 font-light tracking-wide leading-loose">
            I'm a 16 year old Software Developer, specializing in Full Stack Mobile and Web development using{' '}
            <span className="dark:text-white font-bold">
              React {" "}
            </span>  
            and{" "}
            <span className="dark:text-white font-bold">
              Typescript.{" "}
            </span> 
            My main goal is to create products which bring real value to people.
            You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
            <br/>
          </h2>
        </RoughNotationGroup>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular Articles 
        </h3>
        <BlogPost
              title="Test Blog Post"
              summary="Summary of the article "
              slug="test-blog-post"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Project Title"
          description="✍🏻 Project Description gjkhjkadfshvkjfhgjkhdfjkghfkjghfjhkfjshv;khfjkhfighuighfjghfjkhgjkfhgjkfhgjkfhgh"
          href=""
          icon="gba"
          tags={["tags", "tags", "tags"]}
        />
        <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>
        <ProjectCard
          title="More projects coming soon.."
          description="As soon as I start working on a project it will be updated here. In the meantime check out my other projects"
          href="#"
          icon="more"
        />
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
