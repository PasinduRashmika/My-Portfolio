import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaGithub,FaHackerrank,FaNodeJs,FaNode,FaJava,FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiMongodb,SiExpress, SiFlutter } from "react-icons/si";
import { BsMedium} from "react-icons/bs";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Mobile App Developer.",
      "UI Designer.",
      "Medium Writter.",
      "Team Leader.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}<br/>
          <span className="text-designColor capitalize">Pasindu Rashmika</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Undergratuate<br/>
          University of Ruhuna<br/><br/>

          
        </p>
      </div>
      <div className="grid flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><a href="https://github.com/PasinduRashmika" target="_blank">
              <FaGithub /></a>
            </span>
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/pasindu-rashmika/" target="_blank">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/pasindu-rashmika/" target="_blank">
              <FaFacebookF /></a>
            </span>
            <span className="bannerIcon"><a href="https://www.hackerrank.com/rashmikaofficia1" target="_blank">
              <FaHackerrank /></a>
            </span>
            <span className="bannerIcon"><a href="https://medium.com/@rashmikaofficial98" target="_blank">
              <BsMedium /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-5 mt-2">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
