import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { addMovieTrailerId } from "../../utils/MoviesSlice";
import { useMovieTrailer } from "../../hooks/useMovieTrailer";

const VideoContainer = ({ movieId }) => {
  const dispatch = useDispatch();
  dispatch(addMovieTrailerId(movieId));
  useMovieTrailer();
  const trailerVideo = useSelector((id) => id.movies.trailerVideo);
  if (!trailerVideo?.key) return;

  return (
    <div className="w-full" key={trailerVideo.key}>
      <iframe
        className="w-full aspect-video player"
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestBranding=1&rel=0&playsinline=1&enablejsapi=1&playlist=${trailerVideo.key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen="allowFullScreen"
      />
    </div>
  );
};

export default VideoContainer;
