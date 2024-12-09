import React, { useEffect, useState } from "react";
// import Netflix_Logo from "../../Images/Netflix_Logo.png";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/FireBase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/UserSlice";
import search from "../../Images/search.png";
import { addRoutePath } from "../../utils/RouteSlice";
import { useSearchMovie } from "../../hooks/useSearchMovie";
import { setEnableSearch } from "../../utils/searchMovie";
import logOut from "../../Images/logOut.png";
const Header = () => {
  const user = useSelector((store) => store.user);
  // const [searchItem, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedShow, setSearchedShow] = useState("");
  const route = useSelector((path) => path.route.route);
  const enableSearch = useSelector((enable) => enable.SearchMovie.enableSearch);
  useSearchMovie(searchedShow);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate(
          ["movie", "tv", "people"].includes(route) ? `/${route}` : "/home"
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [route, dispatch, navigate]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + "-" + errorMessage);
    });
  };

  const handleSearch = () => {
    if (searchText.length <= 0) {
      // setSearch(!searchItem);
      dispatch(setEnableSearch());
    } else {
      setSearchedShow(searchText);
    }
  };
  return (
    <div className="absolute z-50 w-full overflow-hidden px-8 bg-bgcolor flex justify-between bg-gradient-to-b from-black md:flex-row flex-col md:pt-5 md:mx-auto md:ml-auto md:mr-auto">
      {/* <img
        src={Netflix_Logo}
        alt="logo"
        
      /> */}
      <h1 className="font-semibold text-4xl pt-5 font-serif underline text-white mx-auto md:mx-0">
        StreamLine
      </h1>
      {user && (
        <div className="relative md:flex md:flex-row md:justify-center items-center w-full justify-center md:space-x-10 font-serif font-semibold text-white">
          <div className="flex flex-col lg:flex-row space-y-4 md:space-y-0 space-x-8 md:space-x-10 ">
            <div className="searchDiv relative flex items-center justify-center space-x-2 md:space-x-5">
              <li className="list-none">
                {enableSearch && (
                  <input
                    className="border-white border-[1.5px] rounded-xl h-[20px] w-[250px] bg-transparent text-white text-xs px-2 placeholder:text-white"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                )}
              </li>
              <li className="list-none">
                <img
                  src={search}
                  alt="search"
                  className="h-[20px] w-[20px] cursor-pointer z-50"
                  onClick={handleSearch}
                />
              </li>
            </div>
            <div className="menuDiv flex justify-center md:justify-start space-x-8 md:space-x-10 ">
              <Link to={route === "home"}>
                <li className="list-none">
                  <h3
                    className="hover:underline cursor-pointer"
                    onClick={() => dispatch(addRoutePath("home"))}
                  >
                    Home
                  </h3>
                </li>
              </Link>
              <Link to={route === "movie"}>
                <li className="list-none">
                  <h3
                    className="hover:underline cursor-pointer"
                    onClick={() => dispatch(addRoutePath("movie"))}
                  >
                    Movies
                  </h3>
                </li>
              </Link>
              <Link to={route === "tv"}>
                <li className="list-none">
                  <h3
                    className="hover:underline cursor-pointer"
                    onClick={() => dispatch(addRoutePath("tv"))}
                  >
                    TV
                  </h3>
                </li>
              </Link>
            </div>
          </div>
        </div>
      )}
      {user && (
        <div className="flex justify-between space-x-1 md:space-x-3 my-4 ml-auto mr-0 md:my-0  mx-auto pb-2 md:ml-10 md:flex-col 820:flex-row">
          <img
            className="h-[30px] w-[30px] md:mr-5 my-auto cursor-pointer z-50 bg-gray-900 hover:opacity-80 shad rounded-md"
            onClick={handleSignOut}
            src={logOut}
            alt="logOut"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
