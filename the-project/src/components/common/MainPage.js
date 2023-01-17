import Women from '../../images/241634349_2641704389308087_7962671426199824199_n-663x800.jpg'
import Men from '../../images/309463896_807967507000251_2890481045837653052_n-533x800.jpg'
import Logo from '../../images/new-logo.png'

export const MainPage = (props) => {
    return (<>
        <div className='directory'>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="wrap-dir">
                <div className="women" style={{ backgroundImage: `url(${Women})` }}>
                    <a className="a-dir" href="/women"> Жени</a>
                </div>

                <div className="men" style={{ backgroundImage: `url(${Men})` }} >
                    <a className="a-dir" href="/men" >Мъже</a></div>
            </div>
        </div>
    </>
    )
}