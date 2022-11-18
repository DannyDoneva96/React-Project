import React from 'react';
import Logo from '../../images/logo.png'


export  const Header = (props) =>{
    return (<header id="header">

    <div className="wrap">
    <div className="logo">
      <img src={Logo} alt="logo"/>
      
    </div>
    </div>

   
 </header>)
}
