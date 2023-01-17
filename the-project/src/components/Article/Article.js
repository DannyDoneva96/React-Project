import img from '../../images/w-o-beige.jpg'
import 'swiper/css';

export const Article = () => {
    return (
    <div className="article-container">
    <div className="image-wrapper"><img src={img}/></div>
    <div className="content-wrapper">
    {/* here have to display the path */}
      <p className="label">НАЧАЛО / ДАМСКИ СПОРТНИ ЕКИПИ</p>
      <h2 className="header">Летен екип Nike</h2>
      <p className="description">some text here</p>
      <div className="prices">
        <h3 className="price">80.00лв</h3>
        <h3 className="price-sale">50.00лв</h3>
      </div>
      <button className="add-button"><i className="fa-brands fa-shopify"></i>Add to Cart</button>
    </div>
    </div>)
}