import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

export const Navigation = (props) => {
    return (
        <header className="navCon">
            <div className="stickypo">

                <ul className="navigation">

                    <li>
                        <img className="logo-nav" src={Logo} alt="logo" />
                        <Link to="/"></Link>
                    </li>
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
            </div>
        </header>)

}
