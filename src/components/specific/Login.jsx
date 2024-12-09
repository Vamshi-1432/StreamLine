import React, { useState, useRef, Fragment } from "react";
import Header from "../common/Header";
// import NetflixBG from "../../Images/NetflixBG.png";
import { CheckValidDetails } from "../../utils/ValidateUser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../services/FireBase";
import { ProfileUrl } from "../../Images/ProfileUrl";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/UserSlice";

const Login = () => {
  const [show, setShow] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [alertMsg, setAlertMsg] = useState("");
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleInputChange() {
    const message = CheckValidDetails(
      email.current.value,
      password.current.value
    );
    setAlertMsg(message);
    if (message) return;
  }

  function handleSignIn() {
    const message = CheckValidDetails(
      email.current.value,
      password.current.value
    );
    setAlertMsg(message);
    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: ProfileUrl,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMsg(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <Fragment>
      <div className="relative min-h-screen bg-bg-color bg-custom-gradient">
        <Header />
        <div className="absolute inset-0 z-0">
          {/* <img
            src={NetflixBG}
            alt="background"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="flex items-center justify-center h-full z-10 relative w-[300px] md:w-full pt-[25%] md:pt-[10%] mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className={`w-full max-w-md p-8 bg-black bg-opacity-70 rounded-xl shadow-xl font-semibold text-white ${
              signIn ? "h-[500px]" : "h-[550px]"
            }`}
          >
            <h1 className="md:text-3xl font-bold underline font-serif mb-6 mt-10 text-base">
              {signIn ? "Sign In" : "Sign Up"}
            </h1>
            {!signIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            {!signIn && (
              <input
                ref={email}
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            {!signIn && (
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            {!signIn && (
              <input
                ref={password}
                type={show ? "text" : "password"}
                placeholder="Enter New Password"
                maxLength={15}
                onChange={handleInputChange}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            {!signIn && (
              <input
                ref={password}
                type={show ? "text" : "password"}
                placeholder="Re-enter New Password"
                maxLength={15}
                onChange={handleInputChange}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            {signIn && (
              <input
                ref={email}
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            {signIn && (
              <input
                ref={password}
                type={show ? "text" : "password"}
                placeholder="Password"
                maxLength={15}
                onChange={handleInputChange}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 focus:bg-gray-300 text-black mb-4"
              />
            )}
            <div className="flex items-center mb-4">
              <input type="checkbox" onClick={() => setShow(!show)} />
              <label className="ml-2">Show Password</label>
            </div>
            <p className="text-sm text-red-400 mb-4">{alertMsg}</p>
            <button
              className="w-full py-2 px-4 bg-red-700 hover:bg-red-600 rounded-lg text-lg font-bold"
              onClick={handleSignIn}
            >
              {signIn ? "Sign In" : "Create an account"}
            </button>
            <div className="mt-4">
              <p className="text-gray-400 text-xs text-center md:text-base">
                {signIn ? "New to StreamLine? " : "Already have an account? "}
                <span
                  className="text-white cursor-pointer hover:underline"
                  onClick={() => setSignIn(!signIn)}
                >
                  {signIn ? "Sign Up Now" : "Sign In"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
