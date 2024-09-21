import React from 'react';
import { Link } from 'react-router-dom';

function Meni() {
  return (
    <div>
      <p>meni</p>
      <Link to='/'>Početna</Link>
      <Link to='/usluge'>Usluige</Link>
      <Link to='/about'>about</Link>
      <Link to='/contacts'>kontakt</Link>
    </div>
  )
}

export default Meni
