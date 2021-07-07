import React from 'react';

const MyDayHeader: React.FC<{}> = () => {
  return (
    <header className="w-full py-3 px-4 mt-2 md:mt-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold text-2xl">MyDay Posts</h1>
        <button
          type="button"
          className="
            text-base px-4 flex justify-center py-1 rounded-md border border-transparent bg-black 
          dark:bg-white text-white focus:outline-none font-medium disabled:opacity-50
           disabled:cursor-not-allowed dark:text-black hover:bg-white dark:hover:bg-transparent border-black
           hover:text-black dark:hover:text-white hover:border-black dark:hover:border-gray-400 dark:border-transparent
            transition ease-in-out duration-200 active:scale-150"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default MyDayHeader;
