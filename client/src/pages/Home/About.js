import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, description1, description2, imgurl } = about;
  return (
    <div id="about" className="text-white">
      <SectionTitle  title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="bg-primary w-1/2 sm:w-full">
          <dotlottie-wc
            src={
              imgurl ||
              "https://lottie.host/6e0a16c6-6d5f-4af6-ba40-c84d8676dd13/4kck6yj585.lottie"
            }
            autoplay
            background="transparent"
            speed="1"
            loop
          ></dotlottie-wc>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-partial text-2xl">
          Here are few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-8 mt-5 sm:gap-2">
          {skills.map((skill, index) => (
            <div className="text-partial border border-partial py-3 px-5 rounded-full hover:bg-partial hover:text-primary transition">
              <h1>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
