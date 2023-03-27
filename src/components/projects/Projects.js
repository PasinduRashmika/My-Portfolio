import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

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
          des="I have designed and developed a web application for a company providing interior design services."
          src={projectOne}
          linkGit="https://github.com/PasinduRashmika/Interior-Design-mern"
          linkHost="https://interior-g-a-l-a-x-y.onrender.com"
        />
        <ProjectsCard
          title="Redview Library Management System"
          des=" We have created a web application for a library management website. The application provides an intuitive user interface for librarians to manage library resources and services more efficiently."
          src={projectTwo}
          linkGit="https://github.com/PasinduRashmika/Library-Management-System-ForntEnd"
          linkHost="https://library-management-system-fornt-end.vercel.app/"
        />
        <ProjectsCard
          title="Noodle Nook Web App"
          des=" I have designed and developed  a web application for a noodle restaurant, providing customers with an easy-to-use platform to browse menu options, get user feedback."
          src={projectThree}
          linkGit="https://github.com/PasinduRashmika/Noodle_Nook_Web_App"
          linkHost="https://noodle-nook-web-app.vercel.app/"
        />
        <ProjectsCard
          title="Restaurant-Gingers (Restaurant Web Site)"
          des="Restuarant Ginger, a unique creation and development of mine, reflects the sophistication a restaurant web page needs."
          src={projectFour}
          linkGit="https://github.com/PasinduRashmika/Restuarant_App"
          linkHost="https://restuarant-gingers.vercel.app/"
        />
        <ProjectsCard
          title="Rush-Convork-2-0 Web Site"
          des="We designed and developed  the web site for RUHSH Convork 2.0 to communicate latest status of RUHSH conference.."
          src={projectFive}
          linkGit="https://github.com/PasinduRashmika/RushConvork-2.0"
          linkHost="https://rush-convork-2-0.vercel.app/"
        />
        <ProjectsCard
          title="Industry Oriented Learning Sessions Series Web Site"
          des="Composed and implemented this web site To facilitate and update about seesion series, students who are in Computer science department."
          src={projectSix}
          linkGit="https://github.com/PasinduRashmika/Session_series"
          linkHost="https://session-series.vercel.app/"
        />
        <ProjectsCard
          title="Essential Service & Vaccinated Drivers Identification System"
          des="In pandemic situation, we designed and developed this java based standalone application."
          src={projectSeven}
          linkGit="https://github.com/PasinduRashmika/Essential-Service-Vaccinated-Drivrs-Identification-System"
          linkHost=""
        />
        <ProjectsCard
          title="World Time Flutter App"
          des="A mobile application to get world time details on specific areas on worldwide."
          src={projectEight}
          linkGit="https://github.com/PasinduRashmika/World-Time-Flutter-App"
          linkHost=""
        />
        <ProjectsCard
          title="My Portfoliop"
          des="I would like to showcase my portfolio website and highlight my skills, accomplishments, and past projects in a professional and impressive manner."
          src={projectNine}
          linkGit="https://github.com/PasinduRashmika/My-Portfolio"
          linkHost="https://pasindurashmikaportfolio.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
