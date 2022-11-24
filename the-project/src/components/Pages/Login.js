import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import loginImg from '../../images/login-img.jpg'
import Logo from '../../images/logo.png'
import { UserAuth } from '../../context/AuthContext'

export const Login = () => {

    const  {signIn}  = UserAuth();

    let navigate = useNavigate();


    const [error, setError] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        try {
            await signIn(email, password)
            navigate('/home')
        } catch (e) {
            // setError(e.message.split('/')[1].split(')')[0]);  
            setError(e.message)
        }
    }


    return (

        <div className="main-login-container">
            <img src={loginImg} alt="img" />
            <div className="container">
                <div className="logo-login">  <img src={Logo} alt="img" />
                </div>
                <div className="main-div-login">
                    <form onSubmit={onSubmit} className="form-login">
                        <label htmlFor="username" name="email" >Потребител</label>
                        <input type="text" name="email"  required></input>
                        <label htmlFor="password" name="password" >Парола</label>
                        <input type="text" name="password"  required></input>

                        <button className="btn-login"><i class="fa-regular fa-paper-plane"></i></button>
                        {error
                    ?<h3 className="errorMsg">{error}</h3>
                    : null  }

                    </form>

                </div>
            </div>
        </div>

    )
}
