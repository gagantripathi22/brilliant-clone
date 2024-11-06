import React from "react";

interface FilterButtonsProps {
  categoryFilter: string | null;
  handleCategoryClick: (category: string) => void;
  filterName: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ categoryFilter, handleCategoryClick, filterName }) => {
    return (
      <div
        onClick={() => handleCategoryClick(filterName)}
        className={`mb-2 mx-0 h-10 w-fit px-5 rounded-full flex items-center border-[2px] font-bold text-sm mr-3 cursor-pointer duration-75 ${
          categoryFilter === filterName ? "border-black" : "border-gray-300"
        }`}
      >
        {filterName}
      </div>
    );
  };
  

export default FilterButtons;
