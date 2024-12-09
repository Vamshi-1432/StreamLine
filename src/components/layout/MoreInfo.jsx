import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image_URL } from "../../services/Movie_API_Services";
import close from "../../Images/cross.png";
import "./VideoPlayer.css";
import { setEnableInfo } from "../../utils/MoreInfoSlice";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const handleInfo = () => {
    dispatch(setEnableInfo());
  };
  const info = useSelector((info) => info.moreInfo.infoData);

  const { title, name, overview, backdrop_path } = info;

  return (
    <div className="border-[1px] text-white font-serif border-white xs:h-[160px] md:h-[220px] md:w-[500px] lg:h-[250px] lg:w-[750px] shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg pt-2 lg:-mt-[42%] xl:-mt-[1%] xs:-mt-24 md:-mt-64 bg-black bg-opacity-40 px-1">
      <img
        src={close}
        alt="close"
        className="cross xs:h-4 xs:w-4 md:h-6 md:w-6 ml-auto mr-2 cursor-pointer"
        onClick={handleInfo}
      />
      <div className="flex my-auto ">
        <img
          src={Image_URL + backdrop_path}
          alt="profile"
          className="xs:h-12 xs:w-12 md:h-32 md:w-32 lg:h-44 lg:w-44 p-1 lg:p-4 xs:rounded-sm lg:rounded-xl -mt-2 mr-1"
        />
        <div className="block lg:mt-2">
          <p className="xs:text-xs md:text-base lg:text-2xl lg:ml-2 underline">
            {title || name}
          </p>
          <p className="xs:text-[8px] md:text-sm lg:ml-2 lg:mt-1 ">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
