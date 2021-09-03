import React, {useState } from "react";

import "./index.css";


export default function Signin(props) {
  let credential = (e) => {
    let key = e.target.name;
    switch (key) {
      case "fullname":
        setstate2({ password: state2.password, userName: e.target.value });
        break;
      case "password":
        setstate2({ userName: state2.userName, password: e.target.value });
        break;
    }
  };
  
  const [state2, setstate2] = useState({ userName: "", password: "" });
  

  let button = (e) => {
    if (
      state2.userName === JSON.parse(localStorage.getItem("state")).userName &&
      state2.password === JSON.parse(localStorage.getItem("state")).password
    ) {
      let loggedIn=JSON.stringify({value:true})
      localStorage.setItem("login",loggedIn)
      props.sign2(false);
      props.sign(false);
      props.gallery(true);
    } else {
      alert("enterd wrong credential")
    }
  };
  
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-yellow-200 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
              onChange={(e) => credential(e)}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Enter username"
            />

            <input
              onChange={(e) => credential(e)}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Enter Password"
            />

            <button
              onClick={(e) => button(e)}
              className=" mx-28 styled bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Login
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By login, you agree to the Terms of Service and conditions
              <p>
                if you does't have any account,then
                <button
                  onClick={() => {
                    props.sign2(false);
                    props.sign(true);
                    props.gallery(false);
                  }}
                  className="font-bold"
                >
                  Signup
                </button>
                here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
