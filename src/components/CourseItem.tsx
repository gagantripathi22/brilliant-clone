import React from "react";
import CourseIcon from "../assets/course-icon.png";

interface Course {
  id: string;
  title: string;
  category: "Math" | "Data" | "Computer Science" | "Science";
  isNew: boolean;
  image: string;
  progress?: number;
}

const CourseItem: React.FC<{ item: Course }> = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col w-full h-fit cursor-pointer">
      <div className="relative w-full h-40 rounded-xl border-[2px] border-gray-300 flex flex-col items-center overflow-hidden p-7">
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={CourseIcon}
            className="w-full h-full object-contain"
            alt="course"
          />
          {item.isNew && (
            <span className="absolute uppercase top-[8px] right-2 text-xs px-[10px] py-[3px] text-white rounded-[5px] bg-green-600">
              new
            </span>
          )}
        </div>
      </div>
      <p className="mt-5 text-center">{item.title}</p>
    </div>
  );
};

export default CourseItem;
