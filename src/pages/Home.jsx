import { Github, Instagram, Mail, MapPin } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { BoxExp, BoxPost, BoxProject, Carousel, Social } from "../components";
import { DataBlogs, DataExperience, DataProject } from "../Data";

const HomeSection = ({ label, children, to }) => {
  return (
    <section className="dark:text-white">
      <h1 className="font-montserrat text-3xl font-semibold mb-4 md:mb-6">
        {label}
      </h1>
      {children}
      {to && (
        <NavLink to={to}>
          <div className="mt-2 w-full text-right">
            <h1 className="text-lg font-semibold mb-2 inline-block relative group cursor-pointer">
              <span>More...</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </h1>
          </div>
        </NavLink>
      )}
    </section>
  );
};

const Home = () => {
  return (
    <div className="space-y-6 ">
      <section className="ring rounded-lg px-3 py-5 md:px-4 md:py-6 dark:ring-white transition-all duration-500 ease-in-out">
        <div className="flex flex-col-reverse gap-4 md:gap-0 md:justify-between md:items-center md:flex-row">
          <h1 className="font-montserrat text-3xl font-semibold dark:text-white">
            Anggi Widiantara
          </h1>
          <div className="flex gap-5">
            <Social icon={<Mail />} link={"mailto:widiantara2906@gmail.com"} />
            <Social
              icon={<Github />}
              link={"https://github.com/anggiwdntr29"}
            />
            <Social
              icon={<Instagram />}
              link={"https://www.instagram.com/anggiwdntr_/"}
            />
          </div>
        </div>
        <div className="my-2 flex gap-1 items-center">
          <MapPin className="text-gray-500 dark:text-gray-400" size={20} />
          <span className="font-montserrat text-lg font-medium text-gray-500 dark:text-gray-400">
            Bali, Indonesia
          </span>
        </div>
        <div className="font-montserrat text-lg md:text-xl font-medium text-justify leading-snug dark:text-white">
          I am a Web and Mobile Developer focused on creating responsive and
          functional applications and websites
        </div>
      </section>
      <HomeSection label={"Tech I Use"}>
        <Carousel />
      </HomeSection>
      <HomeSection label={"Work Experience"}>
        <div className="space-y-4">
          {DataExperience.map((item) => (
            <BoxExp item={item} key={item.id} />
          ))}
        </div>
      </HomeSection>
      <HomeSection label={"My Project"} to={"/my-work"}>
        <div className="space-y-6">
          {DataProject.slice(0, 3).map((item) => (
            <BoxProject item={item} key={item.id} />
          ))}
        </div>
      </HomeSection>
      <HomeSection label={"My Blog"} to={"/post"}>
        <div className="space-y-4">
          {DataBlogs.slice(0, 3).map((item) => (
            <BoxPost item={item} key={item.id} />
          ))}
        </div>
      </HomeSection>
    </div>
  );
};

export default Home;
