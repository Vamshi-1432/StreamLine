// import React, { useEffect, useState } from "react";
// import "../../../../index.css";
// import { Image_URL, TrendingAPI } from "../../../../services/Movie_API_Services";
// import { useDispatch } from "react-redux";
// import { addClickedMovie } from "../../../../utils/searchMovie";

// const TrendingMovies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(
//         "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
//         TrendingAPI
//       );
//       const response = await data.json();
//       if (!response) return null;
//       setMovies(response?.results);
//     };
//     fetchData();
//   }, []);

//   //   console.log(movies);
//   const dispatch = useDispatch();
//   const handleSelectedMovie = (movie) => {
//     dispatch(addClickedMovie(movie));
//   };
//   return (
//     <div className="h-48 md:h-52 md:mt-24 relative">
//       <h3 className="text-white pl-10 font-serif font-semibold text-xs md:text-base">
//         Trending Now
//       </h3>
//       <div className="flex w-full overflow-x-auto pl-10 overflow-y-hidden scrollbar-hide">
//         <div className="flex space-x-4 pb-2">
//           {movies?.map((movie, id) => (
//             <div
//               className="border-[1px] md:h-[242px] h-36 w-24 md:w-44 mt-2 cursor-pointer rounded-lg shadow-white shadow-md"
//               key={id}
//               onClick={() => handleSelectedMovie(movie)}
//             >
//               <img
//                 className="h-36 md:h-60 w-26 md:w-44 rounded-lg"
//                 alt="Trending"
//                 src={Image_URL + movie.poster_path}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingMovies;
