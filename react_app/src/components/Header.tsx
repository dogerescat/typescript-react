import React from 'react';
import { Link } from 'react-router-dom';

function FormHeader() {
  
  return (
    <header className='header'>
      <div className="header_wrapper">
        <div className="title">React App</div>
            <nav className="nav">
              <ul className="nav_wrapper">
                <li className="nav_item">  
                  <Link to="/login">login</Link>  
                </li>
                <li className="nav_item">
                  <Link to="/">logout</Link>
                </li>
              </ul>
            </nav>
  
      </div>
    </header>
  );
}

export default FormHeader;
