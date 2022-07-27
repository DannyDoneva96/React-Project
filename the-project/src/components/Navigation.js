import React from 'react';
 
export const Nav =()=>{

    return (    <nav id="nav-conteiner">

       <ul id="nav" className="nav">
    <li ><a  href="#home">Home</a></li>
    <li><a  href="#about">About</a></li>
     <li><a  href="#resume">Resume</a></li>
    <li><a  href="#portfolio">Works</a></li>
    <li><a  href="#contact">Contact</a></li>
    <li><a  href="#references">references</a></li>
 
    <li><a  className="logReg" href="#references">login</a></li>
    <li><a className="logReg" href="#references">register</a></li>


 </ul>
 </nav>
 );
}