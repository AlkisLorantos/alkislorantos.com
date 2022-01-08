import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
      <Step title="Deployed my Personal Website">
          In 2021 I created and succesfully deployed my personal website made with Next JS and TailwindCSS.
        </Step>
        <Step title="Started working on my Startup 💸">
          In the begining odf the year I starrted working on my startup idea which I still have not revealed online.
        </Step>
      </ul>
      <Year>2020</Year>
      <ul>
      <Step title="Started Freelancing">
          At this time I was really eager to startmaking money with code, so i created my profile on fiverr and started Freelancing
        </Step>
        <Step title="Published my first app">
          It was the first time I had pursued a project to its end and after much work I succesfully published it on the AppStore
        </Step>
      </ul>
      <Year>2019</Year>
      <ul>
      <Step title="Learned Flutter Development">
          Since I wanted to create a mobile app for IOS and Android, 
          I learned Flutter and Dart development and created my first Flutter app
        </Step>
        <Step title="First Mobile App 📱">
          Learned IOS mobile app development with swift and Xcode and created my first mobile app.
        </Step>
      </ul>

      <Year>2018</Year>
      <ul>
        <Step title="HTML & CSS 🕸">
          I created my first website with HTML & CSS
        </Step>
        <Step title="Created My First Mobile Game 🎮">
          I Learned about game development and created my first game with unity.
        </Step>
      </ul>
      <Divider />

      <Year>2017</Year>
      <ul>
        <Step title="Started my programming journey 🧑‍💻">
          I stumbled upon programming for the first time when I wanted to create a mobile game.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
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
        </button>
      )}
    </>
  );
}
