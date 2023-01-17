import beige from '../../images/w-o-beige.jpg'
import {Article} from '../Article/Article'
import {Details} from '../Article/Details'
export const Women = (props) => {
    return (
        <div className="womenC">
            {/* <div className="allArticleContainer">
                <p> ДАМСКИ СПОРТНИ ЕКИПИ</p>
                <div className="article-container">
                    <div className="this will be slider">
                        <img src={beige} alt="beige" />
                        <h2>Летен екип Nike</h2>
                        <p>some text here</p>
                        <p><span className="scretch">80.00лв</span> 50.00лв</p>
                    </div>
                 */}
                <div className="allArticleContainer">
                   <Details/>
                </div>
                <div> promocii</div>
                <div> dostavka</div>
            
        </div>
    )
}
