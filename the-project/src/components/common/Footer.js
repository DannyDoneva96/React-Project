import React from 'react';


export  const Footer = (props) =>{
    return (
    <footer className="footer">


            <div className="container">
                <div className="row">
                    
                        
                    <div className="services">
                        <h3>Услуги</h3>
                        <ul>
                            <li><a href="#">ОБЩИ УСЛОВИЯ</a></li>
                            <li><a href="#">ДОСТАВКА</a></li>
                            <li><a href="#">ВРЪЩАНЕ НА ПРОДУКТ</a></li>
                            <li><a href="#">ПОВЕРИТЕЛНОСТ</a></li>
                           </ul>
                            </div>  

                    <div className="social"><a href="https://www.facebook.com/kmbsportbg/"><i class="fa-brands fa-facebook"></i></a><a href="#"><i class="fa-solid fa-envelope"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a></div>
                
                       

                 
                  
                <p className="copyright">KStyle © 2022</p>
            </div>
            </div>
            </footer>)
}
