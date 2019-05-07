import React from 'react';
import { Link } from 'react-router-dom';

import IconSend from './svg/IconSend';
import IconBox from './svg/IconInbox';

const Menu = () => {
  return (
    <nav className="o-menu">
      <ul>
        <li className="o-menu__element o-menu__element--logo">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="o-menu__element">
          <Link to={'/'}>
            <i>
              <IconBox width="20" height="20" fill={'#f7905f'} />
            </i>
            Tous les messages
          </Link>
        </li>
        <li className="o-menu__element">
          <Link to={'/create'}>
            <i>
              <IconSend width="20" height="20" fill={'#f7905f'} />
            </i>
            Nouveau message
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
