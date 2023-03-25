import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix,projectSeven,projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Interior G-A-L-A-X-Y Interior Design Web App - MERN"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          linkGit="https://github.com/PasinduRashmika/Interior-Design-mern"
          linkHost="https://interior-g-a-l-a-x-y.onrender.com"
        />
        <ProjectsCard
          title="Redview Library Management System"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          linkGit="https://github.com/PasinduRashmika/Library-Management-System-ForntEnd"
          linkHost="https://library-management-system-fornt-end.vercel.app/"
        />
        <ProjectsCard
          title="Noodle Nook Web App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          linkGit="https://github.com/PasinduRashmika/Noodle_Nook_Web_App"
          linkHost="https://noodle-nook-web-app.vercel.app/"
        />
        <ProjectsCard
          title="Restaurant-Gingers (Restaurant Web Site)"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          linkGit="https://github.com/PasinduRashmika/Restuarant_App"
          linkHost="https://restuarant-gingers.vercel.app/"
        />
        <ProjectsCard
          title="Rush-Convork-2-0 Web Site"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
          linkGit="https://github.com/PasinduRashmika/RushConvork-2.0"
          linkHost="https://rush-convork-2-0.vercel.app/"
        />
        <ProjectsCard
          title="Industry Oriented Learning Sessions Series Web Site"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          linkGit="https://github.com/PasinduRashmika/Session_series"
          linkHost="https://session-series.vercel.app/"
        />
        <ProjectsCard
          title="Essential Service & Vaccinated Drivers Identification System"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSeven}
          linkGit="https://github.com/PasinduRashmika/Essential-Service-Vaccinated-Drivrs-Identification-System"
          linkHost=""
        />
        <ProjectsCard
          title="World Time Flutter App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectEight}
          linkGit="https://github.com/PasinduRashmika/World-Time-Flutter-App"
          linkHost=""
        />
      </div>
    </section>
  );
}

export default Projects