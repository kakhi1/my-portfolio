import React, { useState } from "react";
import Title from "../roundDesigns/home/Title";
import { FiSend } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  //  ==========error message
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);
  const [succesMsg, setSuccesMsg] = useState("");

  const EmailValidation = (email) => {
    return String(email).toLowerCase().match();
  };

  // email validate
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessages(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/7a0928b0-ae02-4e9d-8a4f-b955fe8ec5ba", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccesMsg(
        "hello,your messages has been sent successfully.Thank you for your time!"
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div>
      <Title title="Get" subTitle="In Touch" />
      <div className="p-10 flex flex-col md:flex-row md:justify-between gap-20">
        <div className="md:w-1/2 w-full ">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Adress:
            </span>
            Georgia, Rustavi
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +995 598571851
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            Kmchedluri@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages " />
        {succesMsg ? (
          <p className="text-center text-base font-titleFont p-20 ">
            {succesMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/7a0928b0-ae02-4e9d-8a4f-b955fe8ec5ba"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex gap-5 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className='${errClientName ? "border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor "}
                w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 outline-none duration-300 '
                type="text"
                placeholder="Full Name"
              />

              <input
                onChange={handleEmail}
                value={email}
                className='${errEmail?"border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor "}
               w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600
               focus-visible:border-designColor outline-none duration-300 '
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className='${errMessages? "border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor "}
            w-full bg-transparent border-2 px-4 py-8 text-base text-gray-200 border-zinc-600 
            focus-visible:border-designColor outline-none duration-300 resize-none'
              placeholder="Your Message"
              cols="30"
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center gap-1 text-gray-200
            hover:text-designColor duration:200"
            >
              Send Message{" "}
              <span className="mt-1 text-designColor">{<FiSend />}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
