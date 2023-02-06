import React from "react";
import { adamiani } from "../../../assets/index";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsCloudLightningFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { resume } from "../../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    DeLaySpeed: 2000,
  });
  return (
    <div className="h-full w-full md:h-full md:w-5/12 flex flex-col bg-bodyColor rounded-2xl shadow-testShadow z-10">
      <div className="h-3/5 w-full">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={adamiani}
          alt="adamiani"
          loading="priority"
        />
      </div>
      <div className="h-2/5 w-full md:h-2/5 md:w-full">
        {/* contain the intro  */}
        <div className="flex flex-col items-center gap-2 lg:gap-4 py-5 lg:py-8">
          <h1 className="text-textColor text-4x1 font-semibold">
            Kakhi Mtchedluri
          </h1>
          <p className=" text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />{" "}
          </p>
          <div className="flex justify-center gap-2 mt-2 ">
            <a
              href="https://github.com/kakhi1"
              target="_blank"
              className="hover:text-designColor duratio-300 cursor-pointer text-x1"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100002243494581"
              target="_blank"
              className="hover:text-designColor duratio-300 cursor-pointer text-x1"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-designColor duratio-300 cursor-pointer text-x1"
            >
              <FiInstagram />
            </a>
            <a
              href="https://githttps://mail.google.com/mail/u/0/#inboxhub.com/kakhi1"
              target="_blank"
              className="hover:text-designColor duratio-300 cursor-pointer text-x1"
            >
              <FiMail />
            </a>
            <a
              href="www.linkedin.com/in/kakhi-mtchedluri-115950191"
              target="_blank"
              className="hover:text-designColor duratio-300 cursor-pointer text-x1"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        {/* buttons */}
        <div className="flex h-14">
          <a
            className="w-1/2 borderRight gap-2
              border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Dowload CV
              <BsCloudLightningFill />
            </button>
          </a>
          <button
            className="w-1/2 h-full flex justify-center items-center gap-2
            border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase
            hover:text-designColor duration-300"
          >
            {" "}
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
