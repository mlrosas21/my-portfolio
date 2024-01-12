import React from "react";
import Image from "next/image";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiSass,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiGit,
  SiJest,
} from "react-icons/si";

const SKILLS = [
  { skill: "HTML", icon: <SiHtml5 /> },
  { skill: "CSS", icon: <SiCss3 /> },
  { skill: "JavaScript", icon: <SiJavascript /> },
  { skill: "React", icon: <SiReact /> },
  { skill: "TypeScript", icon: <SiTypescript /> },
  { skill: "Sass", icon: <SiSass /> },
  { skill: "Tailwind CSS", icon: <SiTailwindcss /> },
  { skill: "GitHub", icon: <SiGithub /> },
  { skill: "Git", icon: <SiGit /> },
  { skill: "Next.js", icon: <SiNextdotjs /> },
  { skill: "Jest", icon: <SiJest /> },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pt-24">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam corporis, labore ipsam ipsa blanditiis quod minus consequatur? Reprehenderit inventore ab quam voluptates doloribus laudantium debitis aperiam! Ullam animi ipsum saepe!
              Similique, provident perferendis delectus dolore impedit veniam nam consectetur ad, nihil doloribus numquam magni facere placeat maiores pariatur excepturi eaque, unde deleniti non officiis aperiam at? Consequuntur eos nisi corporis.
              Autem distinctio laboriosam in alias aspernatur quasi ullam sunt ad deserunt! Sit iste minus nemo aperiam ullam est culpa id officia possimus, voluptatum eligendi repudiandae, amet dolore porro dolorem. Ipsum?
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <ul className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {SKILLS.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.icon}
                    <p className="">{item.skill}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
