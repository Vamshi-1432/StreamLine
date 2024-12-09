// import React, { Fragment, useRef, useState } from "react";
// import { languages } from "../../../utils/languages";
// import { useSelector } from "react-redux";
// // import { openai } from "../../../utils/openAI";

// const GPTSearch = () => {
//   const [searchText, setSearchText] = useState("");
//   const langKey = useSelector((opt) => opt.lang.language);
//   const [responseOut, setResponse] = useState("");
//   console.log(langKey);
//   const searchData = useRef(null);
//   const gptInput =
//     "Act as a Movie Recommendation system and suggest some movies for the query : " +
//     searchData.current.value +
//     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//   // const handleGptClick = async () => {
//   //   const gptInput =
//   //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
//   //     searchData.current.value +
//   //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
//   //   // console.log(gptInput);
//   //   const gptResults = await openai.chat.completions.create({
//   //     messages: [{ role: "user", content: gptInput }],
//   //     model: "gpt-3.5-turbo",
//   //   });
//   //   console.log(gptResults.choices);
//   // };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(
//         "https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B",
//         {
//           method: "POST",
//           headers: {
//             Authorization:   "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             inputs: gptInput,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       const data = await response.json();
//       setResponse(data[0]?.generated_text || "No response");
//     } catch (error) {
//       console.error("Error calling the Hugging Face API:", error);
//     }
//   };
//   console.log(responseOut);
//   return (
//     <Fragment>
//       <div className="flex items-center justify-center my-auto z-20">
//         <form
//           className="mt-40 space-x-2 bg-gradient-to-r from-cyan-200 via-orange-200 to-blue-200 opacity-85 py-2 px-2 rounded-lg grid grid-cols-6"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             ref={searchData}
//             placeholder={
//               languages[langKey]?.placeholder || languages.eng.placeholder
//             }
//             className="h-[35px] justify-center text-[14px] font-serif pl-1 rounded-2xl bg-transparent border-[1.5px] border-gray-700 text-slate-900 placeholder:text-slate-700 w-[450px] my-auto col-span-5"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//             className="px-0.5 border-[1px] border-black rounded-lg font-serif text-[15px] text-white py-0.5 w-20 bg-slate-700 hover:opacity-80 hover:shadow-md my-auto col-span-1"
//             onClick={handleSubmit}
//           >
//             {languages[langKey]?.search || languages.eng.search}
//           </button>
//         </form>
//       </div>
//     </Fragment>
//   );
// };

// export default GPTSearch;
