import Button from "../components/Button";
import StreakIcon from "../assets/streak.png";
import ArrowIcon from "../assets/arrow.png";
import StreakFilledIcon from "../assets/streak-filled.png";
import BatteryIcon from "../assets/battery.png";
import CourseIcon from "../assets/course-icon.png";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Dashboard = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  const currentCourse = useSelector((state: RootState) => state.user.currentCourse);
  return (
    <>
      <section className="px-5 max-w-screen-lg w-full h-full flex flex-col lg:flex-row my-10">
        <section className="w-5/5 mx-0 md:mx-auto md:w-3/5 lg:w-2/5 h-full flex flex-col items-start pr-0 lg:pr-5">
          <h2 className="text-xl font-bold mb-5">Welcome, {userName}</h2>
          <div className="rounded-lg border-2 border-gray-300 w-full h-fit flex flex-col items-start p-5">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center m-0">
                <span className="text-6xl font-bold text-black">1</span>
                <img src={StreakIcon} className="w-9 h-9 mr-2" alt="streak" />
              </div>
              <div className="flex flex-col items-end m-0">
                <div className="flex items-center justify-center p-[2px] rounded-full bg-gray-200">
                  <img src={ArrowIcon} className="w-6 h-6" alt="arrow" />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-5">
              Solve <span className="font-bold">3 Problems</span> to complete
              your streak
            </p>
            <div className="flex flex-row m-0">
              <div className="w-fill mt-5 flex flex-row items-center justify-between gap-4 mx-0">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#BFD91F]">
                    <img
                      src={StreakFilledIcon}
                      className="w-5 h-5"
                      alt="streak"
                    />
                  </div>
                  <span>T</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center border-[2px] border-gray-400 bg-white">
                    <img
                      src={StreakFilledIcon}
                      className="w-5 h-5"
                      alt="streak"
                    />
                  </div>
                  <span className="font-bold">T</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center border-[2px] border-gray-200 bg-white">
                    <img
                      src={StreakFilledIcon}
                      className="w-5 h-5"
                      alt="streak"
                    />
                  </div>
                  <span>T</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center border-[2px] border-gray-200 bg-white">
                    <img
                      src={StreakFilledIcon}
                      className="w-5 h-5"
                      alt="streak"
                    />
                  </div>
                  <span>T</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center border-[2px] border-gray-200 bg-white">
                    <img
                      src={StreakFilledIcon}
                      className="w-5 h-5"
                      alt="streak"
                    />
                  </div>
                  <span>T</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 w-full">
                <img src={BatteryIcon} className="w-7 ml-5" alt="battery" />
                <img src={BatteryIcon} className="w-7 ml-5" alt="battery" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border-2 border-gray-300 w-full h-fit flex flex-row items-start p-5 mt-5">
            <div className="h-full w-1/6 bg-gray-200 mr-5"></div>
            <div className="flex flex-col flex-1">
              <span className="uppercase text-xs font-bold m-0 self-start">
                Unlock leagues
              </span>
              <span className="uppercase text-xs m-0 self-start text-gray-400 mt-1">
                70 of 175 XP
              </span>
            </div>
          </div>
        </section>
        <section className="mx-0 mt-5 lg:mt-0 md:mx-auto w-5/5 md:w-3/5 h-full flex flex-col items-start">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-xl font-bold mb-5">Jump back in</h2>
            <div className="rounded-lg border-2 overflow-hidden border-gray-300 w-full h-fit flex flex-col items-start">
              <div className="bg-gray-100 w-full h-52"></div>
              <div className="w-full h-[4px] bg-gray-50 flex flex-row">
                <div className={`h-full bg-green-400 items-start m-0`} style={{width: `${currentCourse?.progress}%`}}></div>
              </div>
              <div className="relative flex flex-col itmes-center p-5 w-full z-50 bg-white">
                <span className="text-sm text-[#9D791B] uppercase font-bold">
                  science level 1
                </span>
                <span className="text-2xl font-bold">{currentCourse?.title}</span>
                <div className="h-20 w-full">
                  <Button
                    text="Continue Thinking"
                    height="50px"
                    width="100%"
                    color="black"
                    onClick={() => {}}
                    className="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start mt-12">
            <h2 className="text-xl font-bold mb-5">Recommended for you</h2>
            <div className="flex flex-row items-center justify-between w-full gap-7">
              <div className=" h-64 w-full rounded-xl border-[2px] border-gray-300 flex flex-col items-center overflow-hidden">
                <div className="h-3/5 w-full flex flex-col items-center justify-center p-7">
                  <img
                    src={CourseIcon}
                    className="w-full h-full object-contain"
                    alt="course"
                  />
                </div>
                <div className="h-fit w-full flex items-center justify-center font-bold">
                  Logic
                </div>
              </div>
              <div className=" h-64 w-full rounded-xl border-[2px] border-gray-300 flex flex-col items-center overflow-hidden">
                <div className="h-3/5 w-full flex flex-col items-center justify-center p-7">
                  <img
                    src={CourseIcon}
                    className="w-full h-full object-contain"
                    alt="course"
                  />
                </div>
                <div className="h-fit w-full flex items-center justify-center font-bold text-center">
                  Computer Science Fundamentals
                </div>
              </div>
              <div className=" h-64 w-full rounded-xl border-[2px] border-gray-300 flex flex-col items-center overflow-hidden">
                <div className="h-3/5 w-full flex flex-col items-center justify-center p-7">
                  <img
                    src={CourseIcon}
                    className="w-full h-full object-contain"
                    alt="course"
                  />
                </div>
                <div className="h-fit w-full flex items-center justify-center font-bold">
                  Solving Equations
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
