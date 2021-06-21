import React from 'react';
import { signIn } from "../redux/users/operator";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div id="form">
      <div className="email">
        <label htmlFor="">
          Email: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="email" name="email" className="form-email" />
        </label>
      </div>
      <div className="password">
        <label htmlFor="">
          Password:
          <input type="password" name="password" className="form-password" />
        </label>
      </div>
      <button onClick={() => {dispatch(signIn())}}>login</button>
    </div>
  );
}

export default Login;
