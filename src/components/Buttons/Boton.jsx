import React from "react";
import '../../style/tailwind/main.css'
function Boton() {
  return (
    <>
      <div className="flex items-center lg:gap-3 gap-3 cursor-pointer">
        <span className="relative flex h-14 w-14">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"></span>
          <span className="relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-color1">
            <i class="fa-solid fa-play"></i>
          </span>
        </span>
        <button type="button" className="outline-none border-none ">
          Ver nuestro video
        </button>
      </div>

      <div className="flex items-center lg:gap-6 gap-3 cursor-pointer ">
        <span className="relative flex h-14 w-140">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"></span>
          <span className="relative flex justify-center items-center text-white rounded-full h-14 w-36 bg-color1">
           Ver nuestro video
          </span>
        </span>
      </div>




    </>

  );
};
export default Boton;
