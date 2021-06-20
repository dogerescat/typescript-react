
const Register = () => {
  return (
    <>
      <div id="form">
        <div className="name">
          <label htmlFor="">
            Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="text" name="name" className="form-name"/>
          </label>
        </div>
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
      </div>
    </>
  );
}

export default Register;
