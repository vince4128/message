import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="o-menu">
      <Link to={'/'}>Home</Link>
      <div>
        <Link to={'/'}>Tous les messages</Link>
        <Link to={'/create'}>Nouveau message</Link>
      </div>
    </nav>
  );
};

export default Menu;
