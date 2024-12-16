import React from "react";

function Home() {
  return (
    <div className="bg-black">
      <div className="grid sm:grid-cols-2 p-4 ">
        <div>
          <img
            src="img\InShot_20241117_230829313.png"
            alt=""
            className="sm:w-100 sm:px-10 sm:-my-60 hover:-translate-y-4 duration-700 cursor-pointer"
          />
        </div>
        <div className="">
        <h1 className="text-6xl mt-20 mb-4 text-yellow-400 font-thin  hover:text-purple-700 duration-700">Hi, I'm Akshay!</h1>
        <p className="text-3xl mb-2 font-bold hover:text-purple-700 duration-700">A passionate Frontend Developer</p>
          <p className="text-2xl mb-20  hover:text-purple-700 duration-700">
          I'm Akshay Kumar, a frontend developer with a passion for creating
          beautiful and functional websites. With a strong background in HTML,
          CSS, JavaScript, and React, I enjoy building user-centric web applications.
          I'm always learning and striving to improve my skills
          and stay updated with the latest web technologies.
          </p>
          <a href="public/akshay resume.pdf" download className="text-white p-4 sm:text-4xl border-black hover:text-purple-700 hover:border-purple-700 border-2 rounded-3xl m-20 bg-yellow-600 hover:shadow-lg hover:shadow-purple-700 hover:bg-white duration-700 hover:-translate-y-1"
            >
            Dwnload Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
