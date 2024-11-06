import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [subjects, setSubjects] = useState([
    { name: "Math" },
    { name: "Data Analysis" },
    { name: "Computer Science" },
    { name: "Programming & AI" },
    { name: "Science & Engineering" },
  ]);
  return (
    <>
      <section className="max-w-screen-xl mx-auto h-4/5 p-6 lg:p-0">
        <section className="w-full flex flex-col lg:flex-row px-0 md:px-5">
          <div className="w-full lg:w-1/2 flex flex-col text-left justify-center mb-6 lg:mb-0">
            <h1 className="text-black text-4xl lg:text-6xl pb-6 lg:pb-10 font-serif">
              Learn by <span className="text-blue-500">doing</span>
            </h1>
            <p className="pr-0 lg:pr-20 pb-6 lg:pb-10">
              Guided interactive problem solving that's effective and fun.
              Master concepts in 15 minutes a day.
            </p>
            <Link to="/signUp" className="m-0">
              <Button
                text="Get Started"
                height="50px"
                width="280px"
                color="green"
                onClick={() => {}}
              />
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-16">
            <img className="w-full h-48 lg:h-96 bg-gray-200" />
          </div>
        </section>

        {/* <section className="w-full h-fit flex flex-col md:flex-row mt-10 lg:mt-20 gap-6 md:gap-10"> */}
        <section className="w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-col md:flex-row mt-10 lg:mt-20 gap-6 md:gap-10 justify-items-start place-items-start px-5">        
          {subjects.map((item) => {
            return (
              <div className="flex flex-row h-fit justify-center items-center ml-0" key={item.name}>
                <img className="w-10 h-10 lg:w-14 lg:h-14 mr-3 lg:mr-5 bg-gray-200" />
                <p className="text-sm lg:text-base">{item.name}</p>
              </div>
            );
          })}
        </section>
      </section>

      <section className="p-10 lg:p-20 mt-10 lg:mt-20 bg-[#F4F4F4]">
        <h2 className="font-bold text-xl lg:text-2xl text-center">
          Join over 10 million people learning on Brilliant
        </h2>
        <div className="mt-8 lg:mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 flex-col gap-4 lg:gap-10">
          <div className="h-20 w-40 lg:h-28 lg:w-56 bg-gray-200"></div>
          <div className="h-20 w-40 lg:h-28 lg:w-56 bg-gray-200"></div>
          <div className="h-20 w-40 lg:h-28 lg:w-56 bg-gray-200"></div>
          <div className="h-20 w-40 lg:h-28 lg:w-56 bg-gray-200"></div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
