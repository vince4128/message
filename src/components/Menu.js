import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import IconSend from './svg/IconSend';
import IconBox from './svg/IconInbox';

const Menu = () => {
  return (
    <nav className="o-menu" role="navigation">
      <ul>
        <li className="o-menu__element o-menu__element--logo">
          <Link to={'/'}>Messages</Link>
        </li>
        <li className="o-menu__element">
          <NavLink to={'/'} exact activeClassName="o-menu__element--selected">
            <i>
              <IconBox
                className="a-icon"
                width="20"
                height="20"
                fill={'#f7905f'}
              />
            </i>
            <span>Tous les messages</span>
          </NavLink>
        </li>
        <li className="o-menu__element">
          <NavLink
            to={'/create'}
            exact
            activeClassName="o-menu__element--selected"
          >
            <i>
              <IconSend
                className="a-icon"
                width="20"
                height="20"
                fill={'#f7905f'}
              />
            </i>
            <span>Nouveau message</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
