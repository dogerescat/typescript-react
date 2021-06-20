function FormHeader() {
  
  return (
    <header className='header'>
      <div className="header_wrapper">
        <div className="title">React App</div>
            <nav className="nav">
              <ul className="nav_wrapper">
                <li className="nav_item">  
                  <a href="/login">login</a>  
                </li>
                <li className="nav_item">
                  <a href="/">logout</a>
                </li>
              </ul>
            </nav>
  
      </div>
    </header>
  );
}

export default FormHeader;
