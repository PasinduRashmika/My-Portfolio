import React from "react";
import { MdDesignServices, MdArticle } from "react-icons/md";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { BsCode,BsFillImageFill,BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Design"
          des="I compose new designs for web pages that helps to get a fresh, simple and unique look."
          icon={<MdDesignServices />}
        />
        <Card
          title="Web Dev"
          des="I have lot of skiils in website development and take pride in creating websites that deliver exceptional performance with lightning-fast speed."
          icon={<CgWebsite />}
        />
        <Card
          title="Programming"
          des="I am a genius figure in C and Java programming languages, and leverage them to develop robust and scalable backend solutions for websites."
          icon={<BsCodeSlash />}
        />
        <Card
          title="App Dev"
          des="I a person of interst in mobile application development and take pride in creating visually appealing apps with a user-friendly interface & I can design and develop high-quality mobile applications."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="I have a strong focus on UI/UX design for websites, creating visually appealing and user-friendly interfaces."
          icon={<BsFillImageFill />}
        />
        <Card
          title="Article writting"
          des="With a focus on high-quality content and strong storytelling, I strive to provide readers with valuable insights and thought-provoking perspectives."
          icon={<MdArticle />}
        />
      </div>
    </section>
  );
};

export default Features;
