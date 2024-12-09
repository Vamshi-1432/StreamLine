import "./App.css";
import Home from "./components/layout/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/specific/Login";
import Movies from "./components/layout/Movies/Movies";
import TvShows from "./components/layout/TvShows/TvShows";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => {
  return (
    // <div className="App bg-bgcolor bg-custom-gradient w-[100%] h-[100%] min-h-[32rem]">
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} errorElement={<ErrorBoundary />} />
        <Route
          exact
          path="/home"
          element={<Home />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          exact
          path="/movie"
          element={<Movies />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          exact
          path="/tv"
          element={<TvShows />}
          errorElement={<ErrorBoundary />}
        />
      </Routes>
    </div>
  );
};

export default App;
