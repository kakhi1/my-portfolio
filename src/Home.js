import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import Left from "./components/roundDesigns/home/Left";
import { MdWork, MdOutlineClose } from "react-icons/md";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Sidenav from "./components/roundDesigns/home/Sidenav";

const Home = () => {
  const ref = useRef();
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        if (e.target.contains(ref.current)) {
          setSidenav(false);
        }
      },
      []
    );
  });
  return (
    <div className="w-[95%] h-[95%] bg-transparent text-white z-50 flex flex-col md:flex-row md:items-start md:justify-between overflow-y-scroll scrollbar scroll-thin scrollbar-thumb-[#646464]">
      <div className="md:w-16 md:h-96 h-16 w-[94%] flex flex-row md:flex-col bg-transparent">
        <div className=" md:w-full md:h-20 w-16 h-[10%]] bg-bodyColor rounded-3xl flex  justify-center items-center cursor-pointer group">
          {/* home icon */}
          <div
            onClick={() => setSidenav(true)}
            className="flex flex-col gap-1.5 overflow-hidden"
          >
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block  group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform  group-hover:bg-designColor duration-300"></span>
          </div>
        </div>
        {/* icons */}
        {/* sidenav */}
        {sidenav && (
          <div
            className="md:w-full md:h-screen h-full w-screen fixed top-0 left-0
           bg-black bg-opacity-50 z-50"
          >
            <div className="w-96 h-full relative">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
              >
                <Sidenav />
                <span
                  onClick={() => setSidenav(false)}
                  className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor
                duration-300 cursor-pointer flex items-center justify-center z-50"
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}

        <div className="md:w-full md:h-80 h-full w-[90%] flex flex-row md:flex-col md:items-center bg-bodyColor rounded-3xl py-6">
          <div className="md:h-20 w-1/4">
            <span
              onClick={() =>
                setAbout(true) &
                setContact(false) &
                setProjects(false) &
                setResume(false)
              }
              className="w-full h-6 text-textColor text-xl flex
            items-center justify-center hover:text-designColor duration-300 relative group"
            >
              <FaUser />
              <span
                className="absolute text-black font-medium text-xs uppercase
            bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0
            group-hover:opacity-100 "
              >
                About
              </span>
            </span>
          </div>
          <div className="md:h-20 w-1/4 ">
            <span
              onClick={() =>
                setAbout(false) &
                setContact(false) &
                setProjects(false) &
                setResume(true)
              }
              className="w-full h-6 text-textColor text-xl flex
            items-center justify-center hover:text-designColor duration-300 relative group"
            >
              <IoIosPaper />
              <span
                className="absolute text-black font-medium text-xs uppercase
            bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0
            group-hover:opacity-100 "
              >
                Resume
              </span>
            </span>
          </div>
          <div className="md:h-20 w-1/4">
            <span
              onClick={() =>
                setAbout(false) &
                setContact(false) &
                setProjects(true) &
                setResume(false)
              }
              className="w-full h-6 text-textColor text-xl flex
            items-center justify-center hover:text-designColor duration-300 relative group"
            >
              <MdWork />
              <span
                className="absolute text-black font-medium text-xs uppercase
            bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0
            group-hover:opacity-100 "
              >
                Projects
              </span>
            </span>
          </div>
          <div className="md:h-20 w-1/4">
            <span
              onClick={() =>
                setAbout(false) &
                setContact(true) &
                setProjects(false) &
                setResume(false)
              }
              className="w-full h-6 text-textColor text-xl flex
            items-center justify-center hover:text-designColor duration-300 relative group"
            >
              <FaEnvelope />
              <span
                className="absolute text-black font-medium text-xs uppercase
            bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
            group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0
            group-hover:opacity-100 "
              >
                Contact{" "}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-[94%] h-full bg-transparent flex flex-col md:flex-row md:items-center">
        {/*left part start */}
        <Left></Left>
        {/*right part start */}
        <div className="md:w-8/12 w-full h-[95%] bg-bodyColor rounded-xl  ">
          <div className="w-full h-[96%] md:overflow-y-scroll scrollbar md:scroll-thin md:scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
