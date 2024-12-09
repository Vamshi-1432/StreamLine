// import React from "react";
// import { Image_URL } from "../../../../services/Movie_API_Services";
// import { useDispatch, useSelector } from "react-redux";
// import { addClickedMovie } from "../../../../utils/searchMovie";

// const NowPlaying = () => {
//   const movies = useSelector((list) => list.movies.nowPlayingMovies);

//   const dispatch = useDispatch();
//   const handleSelectedMovie = (movie) => {
//     dispatch(addClickedMovie(movie));
//   };
//   return (
//     <div className="mt-10 h-48 md:h-52 md:mt-[20rem] xl:mt-10">
//       <h3 className="text-white pl-10 font-serif font-semibold text-xs md:text-base">
//         Now Playing
//       </h3>
//       <div className=" flex w-full overflow-x-auto pl-10 overflow-y-hidden scrollbar-hide">
//         <div className="flex space-x-4 pb-2">
//           {movies?.map((movie, id) => (
//             <div
//               className="border-[1px] md:h-[242px] h-36 w-24 md:w-44 mt-2 cursor-pointer rounded-lg shadow-white shadow-md"
//               key={id}
//               onClick={() => handleSelectedMovie(movie)}
//             >
//               <img
//                 src={Image_URL + movie.poster_path}
//                 alt="popular"
//                 className="h-36 md:h-60 w-26 md:w-44 rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NowPlaying;
