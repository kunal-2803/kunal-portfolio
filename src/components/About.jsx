import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Kunal Agarwal, I'm a B-tech (CSE) final year student at JECRC University(Jaipur).
I'm from Jaipur, Rajasthan. I have a great passion for programming and I like building stuff related to that 
I like building websites. I also have learned several technologies like HTML, CSS, JavaScript, NodeJS, MongoDB, SQL

        </p>

        <br />

        <p className="text-xl">
        I know programming languages like C, C++, and Java.
I also do competitive programming and I'm a 2-star coder on CodeChef with the highest rating 1517. 
I'm looking forward to learning new skills and technologies and building new projects and growing my carrier.
        </p>
      </div>
    </div>
  );
};

export default About;
