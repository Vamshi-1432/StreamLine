export const MovieAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_MOVIE_API_KEY,
  },
};

export const MovieVideoAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTczMTA3Mjc5MS4wNDM1NTY3LCJzdWIiOiI2NTJkNmM5MDY2MTFiNDAwZTI1NTFlMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qRv7kJNNBNutH_OM1ah-QsEDXC9lkvbXxLiAMG_Y9BQ",
  },
};

export const ImageAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTcyNjkxMDIzMy40MTE1MzMsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gTz-NdakIOCjRbf_Vp3cmrFSFJEDK8B0O9SbHvhc2CU",
  },
};

export const NowPlayingAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTcyNzI1Mjg3Ni4yODAyMDgsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MbDd3NWIA2sdHaW0hUdAPmIAZQPjiQhpcuUAf1cpxKk",
  },
};

export const PopularAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_VIDEO_IMAGE_POP_API_KEY,
  },
};

export const TrendingAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTcyNzAwNDAzOS40MjM3NDUsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P30o42vTaxbhzfSGDz3h7yHe6AsYfnW_yW1bHkZIzhY",
  },
};

export const TopRatedAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTcyNzA5Nzc1NS4yNTg4MTUsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMzqRJeTBdj-V9-68uXeYxjJ97zEmJTlnUG6VA1nwRQ",
  },
};

export const UpcomingAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTcyNzA5Nzc1NS4yNTg4MTUsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMzqRJeTBdj-V9-68uXeYxjJ97zEmJTlnUG6VA1nwRQ",
  },
};

export const searchMovieAPI = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTcyOTQyNTExNS43MDcwMzQsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUXaLqiL_QCmSIUFks5Xcx30BgsjyF3KOMpF--sQqgE",
  },
};

export const Image_URL = "https://image.tmdb.org/t/p/w500/";

export const Discover_Movies_API = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTczMjAwODczNC40NzE2NDUsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRqpCpjFH0K4ajHrFTc_k9lB-98IeL9JxqDkzT-XaA0",
  },
};
export const Supported_Languages = [
  { id: "eng", name: "English" },
  { id: "san", name: "Sanskrit" },
  { id: "tel", name: "Telugu" },
  { id: "hin", name: "Hindi" },
  { id: "ger", name: "German" },
  { id: "fra", name: "French" },
];

export const Trending_All_API = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWFkZjE5YzY5NTcwNGY5ZjhlNDY4YTRjMTUxZmY2MyIsIm5iZiI6MTczMjAwODczNC40NzE2NDUsInN1YiI6IjY1MmQ2YzkwNjYxMWI0MDBlMjU1MWUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRqpCpjFH0K4ajHrFTc_k9lB-98IeL9JxqDkzT-XaA0",
  },
};
