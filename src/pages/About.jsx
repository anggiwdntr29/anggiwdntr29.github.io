import React from "react";

const About = () => {
  return (
    <div className="dark:text-white">
      <h1 className="font-montserrat text-xl md:text-3xl font-semibold md:mt-5 md:mb-2 text-center md:text-left">
        About Me
      </h1>
      <div className="md:relative md:block flex flex-col items-center">
        <img
          src="/Profile.JPG"
          alt="Profile"
          className="w-40 h-auto md:min-w-60 md:h-auto rounded-lg object-cover shadow-lg float-right md:ml-4 my-4 md:my-0"
        />

        <div className="text-base md:text-lg leading-relaxed text-justify space-y-2 font-roboto">
          <p className="">
            I am a graduate of Information Systems from Universitas Pendidikan
            Ganesha, with a GPA of 3.79. I have strong skills in web and mobile
            development, particularly in frontend development. Throughout my
            academic and professional journey, I have honed my abilities in
            building technology-based applications while demonstrating strong
            analytical thinking and problem-solving skills.
          </p>
          <p className="">
            With hands-on experience in developing responsive web applications
            and intuitive mobile apps, I am passionate about creating seamless
            user experiences. I am also familiar with modern development
            frameworks and tools, allowing me to deliver efficient and scalable
            solutions. My work is driven by a commitment to continuous learning
            and adapting to the latest technological trends.
          </p>
          <p className="">
            I am highly motivated to contribute to the advancement of digital
            transformation through the development of innovative and efficient
            technology solutions. I believe that technology has the power to
            make a positive impact, and I am eager to collaborate on projects
            that push the boundaries of creativity, accessibility, and
            usability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
