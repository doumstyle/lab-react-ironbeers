import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar is-info is-flex is-justify-content-center mb-3'>
        <span className="icon is-large">
            <Link className='is-link has-text-white' to='/'><i className="fas fa-home"></i></Link>
        </span>
    </nav>
  );
};

export default Navbar;
