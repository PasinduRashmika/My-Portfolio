import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Pasindu Rashmika</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a computer science undergatuate of University of Ruhuna and from Matugama Sri lanka.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 71 57 22 313/+94 76 14 05 188</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rashmikaofficial98@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <span className="bannerIcon"><a href="https://github.com/PasinduRashmika" target="_blank">
              <FaGithub /></a>
            </span>
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/pasindu-rashmika/" target="_blank">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon"><a href="https://web.facebook.com/profile.php?id=100009460623393" target="_blank">
              <FaFacebookF /></a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft