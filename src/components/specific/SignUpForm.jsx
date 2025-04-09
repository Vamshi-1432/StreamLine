import React, { Fragment } from "react";

const SignUpForm = () => {
  <Fragment>
    <div></div>
  </Fragment>;
};

export default SignUpForm;

export const CheckValidDetails = (email, password) => {
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  return {
    emailMessage: isEmailValid ? "" : "Email Id is not valid",
    passwordMessage: isPasswordValid ? "" : "Password is not valid",
  };
};
