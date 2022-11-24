import { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

export const Navigation = (props) => {

    const [visible, setVisible] = useState(true)


    //this toggles the visibility
    const toggleVisible = () => {
        //this selects the root document element
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled);
        if (scrolled > 300) return setVisible(state => false);
        //else
        setVisible(state => true);
    };
    //this sets an eventLsitener to the window itself
    window.addEventListener('scroll', toggleVisible);

    return (
        <header className="navCon">
            <div className='logo-container' style={{ display: visible ? "block" : "none" }}>
                <img className="logo-nav" src={Logo} alt="logo" />
                <Link to="/"></Link>
            </div>
            {/* <div className="stickypo"> */}
            <ul className="navigation">
                <li>
                    <Link to="/">Жени</Link>
                </li>
                <li>
                    <Link to="/">Мъже</Link>
                </li>
                <li>
                    <Link to="/">Намаления</Link>
                </li>
                <li>
                    <Link to="/"><i className="fa-solid fa-magnifying-glass"></i> </Link>
                </li>

                <li>
                    <i className="fa-solid fa-phone"></i>
                </li>

                <li>
                    <i className="fa-solid fa-cart-plus"></i>
                </li>
            </ul>
            {/* </div> */}
        </header>
    )
}
