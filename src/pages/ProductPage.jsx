import { useEffect, useState } from "react";
import { Features } from "../components";
import { Link } from "react-router-dom";

export const ProductPage = ({product}) => {

    const {name, sku, price, stock, color, sizes, multiImg, brand, activity, material, gender, details, img, category, discount} = product;

    const [expand, setExpand] = useState(false)

    const onExpand = (e) => {
        console.log(e);
        setExpand(!expand);
    }

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    
    useEffect(() => {
        topFunction();
    }, );

  return (
    <>
    <div className="single products">
        <div className="container">
            <div className="wrapper">
                <div className="breadcrumb">
                    <ul className="flexitem">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={`/${category}`}>{category}</Link></li>
                        <li>{name}</li>
                    </ul>
                </div>

                <div className="column">
                    <div className="products one">
                        <div className="flexwrap">
                            <div className="row">
                                <div className="item is_sticky">
                                    <div className="price">
                                        <span style={{display: discount ? 'block' : 'none'}} className="discount">{discount}<br/>Off</span>
                                    </div>
                                    <div className="big-image">
                                        <div className="big-image-wrapper swiper-wrapper">
                                            <div className="image-show swiper-slide">
                                                <a data-fslightbox href={`../src/assets/products/${img}.jpg`}><img src={`../src/assets/products/${img}.jpg`} alt=""/></a>
                                            </div>
                                            <div className="image-show swiper-slide">
                                                <a data-fslightbox href={`../src/assets/products/${img}-1.jpg`}><img src={`../src/assets/products/${img}-1.jpg`} alt=""/></a>
                                            </div>
                                            <div className="image-show swiper-slide">
                                                <a data-fslightbox href={`../src/assets/products/${img}-2.jpg`}><img src={`../src/assets/products/${img}-2.jpg`} alt=""/></a>
                                            </div>
                                            <div className="image-show swiper-slide">
                                                <a data-fslightbox href={`../src/assets/products/${img}-3.jpg`}><img src={`../src/assets/products/${img}-3.jpg`} alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                    </div>

                                    <div thumbSlider="" className="small-image" style={ {display: multiImg ? 'block' : 'none' }}>
                                        <ul className="small-image-wrapper flexitem swiper-wrapper">
                                            <li className="thumbnail-show swiper-slide">
                                                <img src="../src/assets/products/shoe1.jpg" alt=""/>
                                            </li>
                                            <li className="thumbnail-show swiper-slide">
                                                <img src="../src/assets/products/shoe1-1.jpg" alt=""/>
                                            </li>
                                            <li className="thumbnail-show swiper-slide">
                                                <img src="../src/assets/products/shoe1-2.jpg" alt=""/>
                                            </li>
                                            <li className="thumbnail-show swiper-slide">
                                                <img src="../src/assets/products/shoe1-3.jpg" alt=""/>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="item">
                                    <h1>{name}</h1>
                                    <div className="content">
                                        {/* <div className="rating">
                                            <div className="stars"></div>
                                            <a href="" className="mini-text">2,251 reviews</a><a href="" className="add-review- mini-text">Add Your Review</a>
                                        </div> */}
                                        <div className="stock-sku">
                                            <span className={stock ? 'available' : 'not-available'}>{stock ? 'In Stock' : 'Out Of Stock'}</span>
                                            <span className="sku mini-text">{sku}</span>
                                        </div>
                                        <div className="price">
                                            <span className="current">${Math.floor(price * (1 - (discount / 100)))}</span>
                                            <span className="normal">${price}</span>
                                        </div>
                                        {/* <div className="colors">
                                            <p>Color</p>
                                            <div className="variant">
                                                <form action="">
                                                    <p>
                                                        <input type="radio" name="color" id="cogrey"/>
                                                        <label for="cogrey" className="circle"></label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" name="color" id="coblue"/>
                                                        <label for="coblue" className="circle"></label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" name="color" id="cogreen" checked/>
                                                        <label for="cogreen" className="circle"></label>
                                                    </p>
                                                </form>
                                            </div>
                                        </div> */}
                                        <div className="sizes" style={{display: sizes.haveVariants ? 'block' : 'none'}}>
                                            <p>Sizes</p>
                                            <div className="variant">
                                                <form action="">
                                                    {
                                                        sizes.variantsSizes.map(sizes => (
                                                            <p>
                                                                <input checked/>
                                                                <label className="circle"><span>{sizes}</span></label>
                                                            </p>
                                                        ))
                                                    }
                                                </form>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <div className="qty-control flexitem">
                                                <button className="minus circle">-</button>
                                                <input type="text" value="1"/>
                                                <button className="plus circle">+</button>
                                            </div>
                                            <div className="button-cart">
                                                <button className="primary-button">Add to cart</button>
                                            </div>
                                            <div className="wish-share">
                                                <ul className="flexitem second-links">
                                                    <li>
                                                        <a href="">
                                                            <span className="icon-large"><i className="ri-heart-line"></i></span>
                                                            <span>Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <span className="icon-large"><i className="ri-share-line"></i></span>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="description collapse">
                                            <ul>
                                                <li
                                                    className={ expand ? 'has-child expand' : 'has-child'}
                                                    onClick={(e)=>onExpand(e)}    
                                                >
                                                
                                                    <span className="icon-small">Information</span>
                                                    <ul className="content">
                                                        <li><span>Brands</span> <span>{brand}</span></li>
                                                        <li><span>Activity</span> <span>{activity}</span></li>
                                                        <li><span>Material</span> <span>{material}</span></li>
                                                        <li><span>Gender</span> <span>{gender}</span></li>
                                                    </ul>
                                                </li>
                                                <li
                                                    className={ expand ? 'has-child expand' : 'has-child'}
                                                    onClick={(e)=>onExpand(e)}    
                                                >
                                                    <span className="icon-small">Details</span>
                                                    <div className="content">
                                                        <div className="content">
                                                            {details}
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <li className="has-child">
                                                    <a href="" className="icon-small">Custom</a>
                                                    <div className="content">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Size </th>
                                                                    <th>Bust <span className="mini-text">(cm)</span></th>
                                                                    <th>Waist <span className="mini-text">(cm)</span></th>
                                                                    <th>Hip <span className="mini-text">(cm)</span></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>XS</td>
                                                                    <td>82,5</td>
                                                                    <td>62</td>
                                                                    <td>87,5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>S</td>
                                                                    <td>85</td>
                                                                    <td>63,5</td>
                                                                    <td>89</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>M</td>
                                                                    <td>87,5</td>
                                                                    <td>67,5</td>
                                                                    <td>93</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>XL</td>
                                                                    <td>93</td>
                                                                    <td>77,5</td>
                                                                    <td>103</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </li>
                                                <li className="has-child expand">
                                                    <a href="" className="icon-small">Reviews<span className="mini-text">2.2K</span></a>
                                                    <div className="content">
                                                        <div className="review">
                                                            <h4>Customers Reviews</h4>
                                                            <div className="review-block">
                                                                <div className="review-block-head">
                                                                    <div className="flexitem">
                                                                        <span className="rate-sum">4.9</span>
                                                                        <span>2,251 Reviews</span>
                                                                    </div>
                                                                    <a href="#review-form" className="secondary-button">Write review</a>
                                                                </div>
                                                                <div className="review-block-body">
                                                                    <ul>
                                                                        <li className="item">
                                                                            <div className="review-form">
                                                                                <p className="person">Review by Sarah</p>
                                                                                <div className="mini-text">On 7/7/22</div>
                                                                            </div>
                                                                            <div className="review-rating rating">
                                                                                <div className="stars"></div>
                                                                            </div>
                                                                            <div className="review-title">
                                                                                <p>Awesome Product!</p>
                                                                            </div>
                                                                            <div className="review-text">
                                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem provident deserunt magni nobis cumque ad dolorum deleniti suscipit aperiam.</p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="item">
                                                                            <div className="review-form">
                                                                                <p className="person">Review by Sarah</p>
                                                                                <div className="mini-text">On 7/7/22</div>
                                                                            </div>
                                                                            <div className="review-rating rating">
                                                                                <div className="stars"></div>
                                                                            </div>
                                                                            <div className="review-title">
                                                                                <p>Awesome Product!</p>
                                                                            </div>
                                                                            <div className="review-text">
                                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem provident deserunt magni nobis cumque ad dolorum deleniti suscipit aperiam.</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="second-links">
                                                                        <a href="" className="view-all">View all reviews <i className="ri-arrow-right-line"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div id="review-rorm" className="review-form">
                                                                    <h4>Write a review</h4>
                                                                    <div className="rating">
                                                                        <p>Are you satisfied enough?</p>
                                                                        <div className="rate-this">
                                                                            <input type="radio" name="rating" id="star5"/>
                                                                            <label for="star5"><i className="ri-star-fill"></i></label>

                                                                            <input type="radio" name="rating" id="star4"/>
                                                                            <label for="star4"><i className="ri-star-fill"></i></label>

                                                                            <input type="radio" name="rating" id="star3"/>
                                                                            <label for="star3"><i className="ri-star-fill"></i></label>

                                                                            <input type="radio" name="rating" id="star2"/>
                                                                            <label for="star2"><i className="ri-star-fill"></i></label>

                                                                            <input type="radio" name="rating" id="star1"/>
                                                                            <label for="star1"><i className="ri-star-fill"></i></label>
                                                                        </div>
                                                                    </div>
                                                                    <form action="">
                                                                        <p>
                                                                            <label>Name</label>
                                                                            <input type="text"/>
                                                                        </p>
                                                                        <p>
                                                                            <label>Summary</label>
                                                                            <input type="text"/>
                                                                        </p>
                                                                        <p>
                                                                            <label>Review</label>
                                                                            <textarea cols="30" rows="10"></textarea>
                                                                        </p>
                                                                        <p><a href="" className="primary-button">Submit Review  </a></p>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Features/>
    </>

  )
}
