import React from 'react'
import {Link} from "react-router-dom";
import {Routes} from "../helpers/Routes";

export const Header = () => {
  return (
    <nav className="navbar-dark bg-dark">
      <span className='navbar-brand'>JEDI</span>
      <Link  to={Routes.planets}><span className='navbar-brand'>Planets</span></Link>
      <Link to={Routes.people}><span className='navbar-brand'>People</span></Link>
      <Link to={Routes.starShip}><span className='navbar-brand'>Starship</span></Link>
    </nav>)
}