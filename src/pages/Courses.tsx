import { useEffect, useState } from "react";
import SearchIcon from "../assets/search.png";
import coursesData from "../api/courses.json";
import CourseItem from "../components/CourseItem";
import FilterButtons from "../components/FilterButtons";

interface Course {
  id: string;
  title: string;
  category: "Math" | "Data" | "Computer Science" | "Science";
  isNew: boolean;
  image: string;
  progress?: number;
}

interface Filter {
  name: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [isNewFilter, setIsNewFilter] = useState<boolean>(false);
  const [courseFilter, setCourseFilter] = useState<Filter[] | null>([
    {
      name: "Math",
    },
    {
      name: "Data",
    },
    {
      name: "Computer Science",
    },
    {
      name: "Science",
    },
  ]);

  useEffect(() => {
    setCourses(coursesData as Course[]);
  }, []);

  const roundedCourseCount = Math.floor(courses.length / 10) * 10;

  const filteredCourses = courses.filter((course) => {
    if (isNewFilter) return course.isNew;
    if (categoryFilter) return course.category === categoryFilter;
    return true;
  });

  const handleCategoryClick = (category: string) => {
    if (categoryFilter === category) {
      setCategoryFilter(null);
    } else {
      setCategoryFilter(category);
      setIsNewFilter(false);
    }
  };

  return (
    <>
      <section className="max-w-screen-lg w-full h-full flex flex-row my-10 px-5">
        <section className="w-full h-full flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-5">
            Browse all {roundedCourseCount}+ courses
          </h2>
          <div className="w-full h-11 rounded-full border-[2px] border-gray-200 flex flex-row items-center justify-start px-2">
            <img src={SearchIcon} className="w-7 h-7" alt="search" />
            <input
              type="text"
              className="text-sm w-full h-full bg-transparent mx-2 "
              placeholder="Search"
            />
          </div>
          <div className="mt-5 mx-0 flex flex-row flex-wrap justify-start items-center">
            <div
              onClick={() => {
                setIsNewFilter(!isNewFilter);
                setCategoryFilter(null);
              }}
              className={`mb-2 mx-0 h-10 w-fit px-5 rounded-full flex items-center border-[2px] font-bold text-sm mr-3 cursor-pointer duration-75 ${
                isNewFilter ? "border-black" : "border-gray-300"
              }`}
            >
              New courses
            </div>
            {courseFilter?.map((item) => (
              <FilterButtons
                handleCategoryClick={handleCategoryClick}
                categoryFilter={categoryFilter}
                filterName={item.name}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-5 mt-12">Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-16 w-full mt-10">
            {filteredCourses.map((item) => (
              <CourseItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Courses;
