
const Login = () => {
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
      {/* <button onClick={login}>login</button> */}
    </div>
  );
}

export default Login;
