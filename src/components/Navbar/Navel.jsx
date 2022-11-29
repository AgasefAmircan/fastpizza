import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #777777;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  margin-left:-70vw;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    margin-left:-50vw;
  }
  @media screen and (max-width: 400px) {
    margin-left:-2vw;
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top:15px;
  right:2vw;
  cursor: pointer;
  color: #151515;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const Cart = styled(Link)`
  position: absolute;
  left: 10px;
  top: 10px;

  button{
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    margin: 5px;
    cursor: pointer;
  }

  span{
    background-color: red;
    position: absolute;
    padding: 2px 8px;
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
    border-radius: 50%;
    cursor: pointer;
  }
`