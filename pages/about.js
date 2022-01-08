import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container 
    title="About – Alkis Lorantos ">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white pb-6">
          About Me 🤽‍♂️
          <br />
        </h1>
        <div className="prose dark:prose-dark max-w-none w-full">
          <p>
            Hey, I'm Alkis, I am a Full Stack Developer, specialised in mobile and web development. 
            The technologies I work with are JavaScript, HTML and CSS with a focus on the frameworks{" "}
            <span className="dark:text-white font-bold">
                React.js, React Native, Flutter, Gatsby, Next.js, Node, Express, Prisma and Apollo.{" "}
            </span> 
            <br/>
            For styling I mostly use TailwindCSS and Styled-Components 💅. 
            I also use code to solve everyday problems I come across.
          </p>
          <p>
          When I am not writing code or working on my bussinesses I love to spend time with my family and friends. 
          I currenlty live in Athens where I play Water Polo competing at a high level.
          I myslef speak 4 languages: {" "}
          <span className="dark:text-white font-bold">
          French 🇫🇷, Greek 🇬🇷, English 🇺🇸 and Spanish 🇪🇸{" "}
            </span> 
          3 of which I speak fluently but I would love to learn many more (maybe Chinese ...)  
          </p>
        </div>
      </div>
    </Container>
  );
}