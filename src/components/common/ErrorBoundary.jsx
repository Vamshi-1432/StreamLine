import React from "react";
import ErrorImage from "../../Images/ErrorImage.jpg";

const ErrorBoundary = () => {
  return (
    <div className="justify-center text-center bg-slate-500 xs:p-10 md:p-20 h-screen w-full">
      <img
        src={ErrorImage}
        alt="Error"
        className="xs:h-80 xs:w-80 md:h-[400px] md:w-[500px] lg:h-[450px] lg:w-[500px] mx-auto xs:rounded-md shadow-md"
      />
      <h4 className=" text-white font-serif text-lg font-bold py-2">
        We'll be back soon!
      </h4>
      <p className=" text-white font-serif text-base md:w-[500px] mx-auto">
        Our site is currently undergoing scheduled maintenance. We apologize for
        the inconvenience and appreciate your patience.
      </p>
    </div>
  );
};

export default ErrorBoundary;
