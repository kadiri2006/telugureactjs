import React, { useState } from "react";
import "./index.css";

export default function Singup(props) {
  let showLogin = () => {
    props.sign2(true);
    props.sign(false);
    props.gallery(false);
  };
  let button = (e) => {
    let data = JSON.stringify(state);
    localStorage.setItem("state", data);
    if (state.userName && state.password) {
      showLogin();
    }
  };
  let Credentials = (e) => {
    let key = e.target.name;
    switch (key) {
      case "fullName":
        setstate({ password: state.password, userName: e.target.value });
        break;
      case "password":
        setstate({ userName: state.userName, password: e.target.value });

        break;
    }
  };
  const [state, setstate] = useState({ userName: "", password: "" });

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-yellow-200 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullName"
            placeholder="User name"
            onChange={(e) => Credentials(e)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => Credentials(e)}
          />

          <button
            type="submit"
            onClick={(e) => button(e)}
            className=" mx-28 styled bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Signup
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <br />
          <p>
            if you already signup,then{" "}
            <button onClick={showLogin} className="font-bold">
              ClickHere
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
