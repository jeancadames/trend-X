import { trendingProducts } from "../data/trendingProducts"

import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import EyeLineIcon from 'remixicon-react/EyeLineIcon'
import ShuffleLineIcon from 'remixicon-react/ShuffleLineIcon'
import { Link } from "react-router-dom"


export const Trending = () => {
  return (
    <div className="trending">
    <div className="container">
        <div className="wrapper">
            <div className="sectop flexitem">
                <h2><span className="circle"></span><span>Trending Products</span></h2>
            </div>
            <div className="column">
                <div className="gridwrap">
                    <div className="row products big">
                        <div className="item">
                            <div className="offer">
                                <p>Offer ends at</p>
                                <ul className="flexcenter">
                                    <li>1</li>
                                    :
                                    <li>15</li>
                                    :
                                    <li>27</li>
                                    :
                                    <li>60</li>
                                </ul>
                            </div>
                            <div className="media">
                                <div className="image">
                                    <a href="#">
                                        <img src="src/assets/products/apparel4.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href=""><HeartLineIcon/></a></li>
                                        <li><a href=""><EyeLineIcon/></a></li>
                                        <li><a href=""><ShuffleLineIcon/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                {/* <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(2,548)</span>
                                </div> */}
                                <h3 className="main-link"><a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                                <div className="price">
                                    <span className="current">$129.99</span>
                                    <span className="normal mini-text">$189.99</span>
                                </div>
                                <div className="stock mini-text">
                                    <div className="qty">
                                    <span>Stock: <strong className="qty-available">107</strong></span>
                                    <span>Sold: <strong className="qty-sold">3,450</strong></span>
                                    </div>
                                    <div className="bars">
                                        <div className="available"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row products mini">
                        {
                            trendingProducts.map(product => (
                                <div className="item" key={product.id}>
                                <div className="media">
                                    <div className="thumbnail object-cover">
                                        <Link to={`/${product.category}/${product.name}`}>
                                            <img src={`../src/assets/products/${product.img}.jpg`} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="hoverable">
                                        <ul>
                                            <li className="active"><a href=""><HeartLineIcon/></a></li>
                                            <li><a href=""><EyeLineIcon/></a></li>
                                            <li><a href=""><ShuffleLineIcon/></a></li>
                                        </ul>
                                    </div>
                                    <div className="discount circle flexcenter"><span>{product.discount}%</span></div>
                                </div>
                                <div className="content">
                                    {/* <div className="rating">
                                        <div className="stars"></div>
                                        <span className="mini-text">(1,649)</span>
                                    </div> */}
                                    <h3 className="main-links">
                                        <Link to={`/${product.category}/${product.name}`}>                                    
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="current">${product.currentPrice}</span>
                                        <span className="normal mini-text">${product.normalPrice}</span>
                                    </div>
                                    <div className="mini-text">
                                        <p>{product.qtySold} sold</p>
                                        <p>{product.shipping}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
