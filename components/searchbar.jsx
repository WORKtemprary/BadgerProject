import React from 'react';

const SearchInput = () => {
  return (
    <div className="w-[767px] h-[55.89px] relative mb-3">
      <div className="w-[767px] h-[55.89px] left-0 top-0 absolute bg-gradient-to-l from-white via-amber-200 to-orange-300 rounded-[27.21px] border-4 border-red-800" />
      <div className="w-[753.75px] h-[49.50px] left-[6.63px] top-[2.74px] absolute rounded-[27.21px] border-2 border-orange-500" />
      <div className="relative">
        <input
          type="search"
          className="relative m-0 w-[753.75px] h-[49.50px] left-[6.63px] top-[2.74px] rounded-[27.21px] border-2 border-orange-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchInput;
