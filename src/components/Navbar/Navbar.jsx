import React from 'react';
import { Nav, NavLink, NavIcon, Bars} from './Navel';
import Logo from '../../assets/logo-.png'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><img src={Logo} alt="" /></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;