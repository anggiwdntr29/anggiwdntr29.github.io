import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiLaravel,
  SiInertia,
  SiMysql,
  SiSqlite,
  SiFigma,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const IconData = [
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaJs, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaPhp, label: "PHP" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiSqlite, label: "SQLite" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiInertia, label: "Inertia" },
  { icon: SiVite, label: "Vite" },
  { icon: FaReact, label: "React" },
  { icon: FaVuejs, label: "Vue" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: FaBootstrap, label: "Bootstrap" },
  { icon: SiFigma, label: "Figma" },
];

const Carousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute -left-1 top-0 bottom-0 w-20 z-10
        bg-gradient-to-r from-white via-gray-50/70 to-transparent"
      />

      {/* Right fade */}
      <div
        className="absolute -right-1 top-0 bottom-0 w-20 z-10 
        bg-gradient-to-l from-white via-gray-50/70 to-transparent"
      />
      <Marquee speed={60} pauseOnHover={true} className="mb-4" autoFill={true}>
        {IconData.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 ring my-1 px-4 py-2 rounded-md mr-4"
          >
            <item.icon size={24} />
            <span className="font-roboto text-md md:text-lg font-medium md:font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} pauseOnHover={true} autoFill={true}>
        {IconData.slice(7, 15).map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 ring my-1 px-4 py-2 rounded-md mr-4"
          >
            <item.icon size={24} />
            <span className="font-roboto text-md md:text-lg font-medium md:font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
