import loginImg from '../../images/login-img.jpg'
import Logo from '../../images/logo.png'

export const Login = (props) => {
    return (

        <div className="main-login-container">
            <img src={loginImg} alt="img" />
            <div className="container">
                <div className="logo-login">  <img src={Logo} alt="img" />
                </div>
                <div className="main-div-login">
                    <form className="form-login">
                        <label for="username" name="username" >Потребител</label>
                        <input type="text" name="username" ></input>
                        <label for="password" name="password" >Парола</label>
                        <input type="text" name="password" ></input>

                        <button className="btn-login"><i class="fa-regular fa-paper-plane"></i></button>
                    </form>

                </div>
            </div>
        </div>

    )
}
