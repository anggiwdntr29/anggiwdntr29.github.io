import React from "react";
import { Instagram, Mail } from "lucide-react";

const Social = ({ icon, title, subTitle, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col justify-center items-center">
        {icon}
        <h1 className="font-montserrat font-semibold text-lg md:text-xl">
          {title}
        </h1>
        <h1 className="font-montserrat font-medium text-xs md:text-sm mt-1">
          {subTitle}
        </h1>
      </div>
    </a>
  );
};

const ContactMe = () => {
  return (
    <div className="flex justify-center items-center mt-10 dark:text-white transition-all duration-500 ease-in-out">
      <div className="ring-2 rounded-md p-4 ">
        <h1 className="text-xl md:text-3xl font-montserrat font-semibold mb-1.5">
          Contact me
        </h1>
        <h1 className="text-base md:text-xl font-montserrat font-medium text-justify">
          Feel free to contact me via email, Discord, or Instagram. I usually
          reply within a day.
        </h1>
        <div className="flex md:justify-evenly flex-col md:flex-row gap-5 md:gap-0 mt-8">
          <Social
            link={"mailto:widiantara2906@gmail.com"}
            icon={<Mail className="w-14 h-14 md:w-20 md:h-20" />}
            title={"Mail"}
            subTitle={"widiantara2906@gmail.com"}
          />
          <Social
            link={"https://www.instagram.com/anggiwdntr_/"}
            icon={<Instagram className="w-14 h-14 md:w-20 md:h-20" />}
            title={"Instagram"}
            subTitle={"anggiwdntr_"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
