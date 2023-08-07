import { Link } from "react-router-dom"
import HeartLineIcon from "remixicon-react/HeartLineIcon"
import EyeLineIcon from "remixicon-react/EyeLineIcon"
import ShuffleLineIcon from "remixicon-react/ShuffleLineIcon"
import { allProducts } from "../data/allProducts"

export const ProductItem = ({currentItem}) => {
  return (
    <>
    {
        currentItem.map(product => (
            <div className="item" key={product.id}>
            <div className="media">
                <div className="thumbnail object-cover">
                    <Link to={`/${product.category}/${product.name}`}>
                        <img src={`../src/assets/products/${product.img}.jpg`} alt=""/>
                    </Link>
                </div>
                <div className="hoverable">
                    <ul>
                        <li className="active"><Link><HeartLineIcon/></Link></li>
                        <li><Link><EyeLineIcon/></Link></li>
                        <li><Link><ShuffleLineIcon/></Link></li>
                    </ul>
                </div>
                {
                    product.discount 
                    ? <div className="discount circle flexcenter"><span>{product.discount}%</span></div>
                    : ''
                }
            </div>
            <div className="content">
                {/* <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(2,548)</span>
                </div> */}
                <h3 className="main-link"><Link to={`/${product.category}/${product.name}`}>{product.name}</Link></h3>
                <div className="price">
                    <span className="current">${Math.floor(product.price * (1 - (product.discount / 100)))}</span>
                    <span className="normal mini-text">${product.price}</span>
                </div>
                <div className="footer">
                    <ul className="mini-text">
                        {
                            product.attribute && product.attribute.map(attribute => (
                                <li key={product.id * Math.random()}>{attribute}</li>
                                ))
                            }
                    </ul>
                </div>
            </div>
        </div>
        ))
    }
    </>
  )
}
