import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaHackerrank,
  FaNodeJs,
  FaNode,
  FaJava,
  FaCss3Alt,
  FaPhoneAlt,
  FaRegEnvelope
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiExpress,
  SiFlutter,
} from "react-icons/si";
import { BsMedium} from "react-icons/bs";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "UI Designer.",
      "Team Leader.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const pdfUrl = './Pasindu Rashmika Professinal CV.pdf';

  const downloadCV=(url)=>{

  }
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Let me introduce Myself</h4>
        <h1 className="text-6xl font-bold text-white">
          <span className="text-designColor capitalize">About Me</span>
        </h1>
      
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a computer science undergatuate of University of Ruhuna and from
          Matugama Sri lanka.I love to work with both web-based, multi-threaded
          applications as well as front-end development & back-end development
          using the latest technologies.
        </p>
        <p>
        <span className="bannerIcon" gap-6>
              <FaRegEnvelope />
            </span>
        rashmikaofficial98@gmail.com<br/>
        <span className="bannerIcon" gap-6>
              <FaPhoneAlt />
            </span>
          +94 71 57 22 313 / +94 76 14 05 188
        </p>
      </div>
      <div className="w-full">
        <a href="./Pasindu Rashmika Professinal CV.pdf" download="./Pasindu Rashmika Professinal CV.pdf">
                <button
                  // onClick={downloadCV(pdfUrl)}
                  className="w-full h-12 bg-designColor rounded-lg text-black text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-white border-transparent"
                >
                  DOWNLOAD CV
                </button></a>
              </div>
      <div className="grid flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/PasinduRashmika" target="_blank">
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/pasindu-rashmika/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/pasindu-rashmika/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.hackerrank.com/rashmikaofficia1"
                target="_blank"
              >
                <FaHackerrank />
              </a>
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
