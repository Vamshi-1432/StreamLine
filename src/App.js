import "./App.css";
import Home from "./components/layout/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/specific/Login";
import Movies from "./components/layout/Movies/Movies";
import TvShows from "./components/layout/TvShows/TvShows";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/movie" element={<Movies />} />
        <Route exact path="/tv" element={<TvShows />} />
        <Route exact path="*" errorElement={<ErrorBoundary />} />
      </Routes>
    </div>
  );
};

export default App;
