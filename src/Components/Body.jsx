import React from 'react';

const Body = () => {
  return (
    <div className="space-y-4 lg:flex lg:items-center lg:justify-between">
      <div className="relative flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="public\assets\Blue-Shape.svg" alt="Blue Shape" className="-rotate-[45deg] h-64 md:h-72" />
        <img src="public\assets\Pink-Shape.svg" alt="Pink Shape" className="absolute -rotate-[30deg] h-64 md:h-72" />
        <img src="public\assets\Purple-Shape.svg" alt="Purple Shape" className="absolute -rotate-[15deg] h-64 md:h-72" />
        <img src="public\assets\Hero-Model.png" alt="Hero" className="absolute h-64 md:h-72" />
      </div>
      <div className="lg:flex-1 lg:order-1 space-y-4">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          HOST Your Website Less Than 5 Min.
        </h1>
        <p className="font-lato text-gray-400">Hello Guys, Chai Pilo, enjoy your website</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email Address"
          />
          <button className="rounded-md px-4 py-3.5 bg-blue-500 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex items-center gap-2">
          <img src="public\assets\Checkmark.svg" alt="Checkmark" />
          <p className="font-lato text-gray-400">No Spam Ever, Unsubscribe Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
