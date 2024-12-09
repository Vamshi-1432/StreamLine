// import React, { Fragment, useState } from "react";
// import GPTImg from "../../../Images/GPT.png";
// import { useDispatch, useSelector } from "react-redux";
// import { Supported_Languages } from "../../../services/Movie_API_Services";
// import { choosedLanguage } from "../../../utils/langOptSlice";
// import { setEnableSearch } from "../../../utils/gptEnable";

// const GPTButton = () => {
//   const [isRotating, setRotating] = useState(false);
//   const dispatch = useDispatch();
//   const enableSearch = useSelector((enl) => enl.gpt.enableSearch);
//   // console.log(enableSearch);
//   const handleRotateImage = () => {
//     setRotating(true);
//     setTimeout(() => {
//       setRotating(false);
//       dispatch(setEnableSearch());
//     }, 1000);
//   };
//   const handleOption = (e) => {
//     dispatch(choosedLanguage(e.target.value));
//   };
//   return (
//     <Fragment>
//       <div className="flex my-auto space-x-1">
//         {enableSearch && (
//           <select
//             className="text-[12px] h-[20px] font-serif bg-gray-300 rounded-md my-auto"
//             onChange={handleOption}
//           >
//             {Supported_Languages.map((lan) => (
//               <option key={lan.id} value={lan.id}>
//                 {lan.name}
//               </option>
//             ))}
//           </select>
//         )}
//         <img
//           src={GPTImg}
//           alt="gpt"
//           className={`h-[30px] w-[30px] bg-slate-50 rounded-full scale-x-[1] cursor-pointer hover:opacity-40 transition-transform duration-1000 ${
//             isRotating ? "rotate-360" : ""
//           }`}
//           // onClick={() => dispatch(addRoutePath("gpt"))}
//           // onClick={() => (searchText.length <= 0 ? setGptCheck(!enableSearch) : "")}
//           onClick={handleRotateImage}
//         />
//       </div>
//       <style jsx>
//         {`
//           @keyframes rotate {
//             from {
//               transform: rotate(0deg);
//             }
//             to {
//               transform: rotate(360deg);
//             }
//           }
//           ${enableSearch
//             ? `.rotate-360 { animation: rotate 1s reverse;}`
//             : `.rotate-360 { animation: rotate 1s forwards;}`}
//         `}
//       </style>
//     </Fragment>
//   );
// };

// export default GPTButton;
