import React from "react";

const Aboutme = () => {
  return (
    <div className=" flex flex-col md:flex-row w-full md:flex pb-6">
      <div className="h-1/2 md:w-1/2 w-full text-zinc-400 p-6 borderRight flex flex-row md:flex-col ">
        <div className="py-6">
          <h3 className="font-semibold mb-1 text-base md:text-lg">
            Hello! I'm Kakhi Mtchedluri
          </h3>
          <p className="md:text-base text-sm leading-6">
            Web developer from Georgia, I have experience in web site building.
            I love to talk with you about our unique.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full p-6">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan ">Residence:</span>Georgia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan ">Age:</span>30
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan ">Freelance:</span>Available
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutme;
