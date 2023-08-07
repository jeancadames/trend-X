import { useState } from 'react'

import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'
import Menu2LineIcon from 'remixicon-react/Menu2LineIcon'
import Menu3LineIcon from 'remixicon-react/Menu3LineIcon'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import ShoppingCartLineIcon from 'remixicon-react/ShoppingCartLineIcon'
import BearSmileLineIcon from 'remixicon-react/BearSmileLineIcon'
import BluetoothConnectLineIcon from 'remixicon-react/BluetoothConnectLineIcon'
import TShirtAirLineIcon from 'remixicon-react/TShirtAirLineIcon'
import TShirtLineIcon from 'remixicon-react/TShirtLineIcon'
import User5LineIcon from 'remixicon-react/User5LineIcon'
import User6LineIcon from 'remixicon-react/User6LineIcon'
import HeartPulseLineIcon from 'remixicon-react/HeartPulseLineIcon'
import Home8LineIcon from 'remixicon-react/Home8LineIcon'
import AndroidLineIcon from 'remixicon-react/AndroidLineIcon'
import BasketballLineIcon from 'remixicon-react/BasketballLineIcon'
import ShieldStarLineIcon from 'remixicon-react/ShieldStarLineIcon'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import { Link } from 'react-router-dom'
import { womenDpt } from '../data/womenDpt'
import { allCat } from '../data/allCat'
import { allProducts } from '../data/allProducts'
export const Header = () => {

    const [menu, setMenu] = useState(false);

    const onClickMenu = () => {
        setMenu(!menu);
    }

    let multiCat = allCat.filter((department) => department.categories && department.categories.length > 0);
    console.log(multiCat);

  return (
    <>
        <aside className="site-off desktop-hide">
            <div className="off-canvas">
                <div className="canvas-head flexitem">
                    <div className="logo"><Link to="/"><span className="circle"></span>TrendX</Link></div>
                    <Link to="#" className="t-close flexcenter"><i className="ri-close-line"></i></Link>
                </div>
                <div className="departments"></div>
                <nav></nav>
                <div className="thetop-nav"></div>
            </div>
        </aside>
        <header>
            <div className="header-top mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <ul className="flexitem main-links">
                                <li><Link to="#">Blog</Link></li>
                                <li><Link to="#">Featured </Link></li>
                                <li><Link to="#">Wishlist</Link></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="flexitem main-links">
                                <li><Link to="#">Sign Up</Link></li>
                                <li><Link to="#">My Account</Link></li>
                                <li><Link to="#">Order Tracking</Link></li>
                                <li><Link to="#">USD<span className="icon-small"><ArrowDownSLineIcon/></span></Link>
                                    <ul>
                                        <li className="current"><Link to="#">USD</Link></li>
                                        <li><Link to="#">EUR</Link></li>
                                        <li><Link to="#">DOP</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">English<span className="icon-small"><ArrowDownSLineIcon/></span></Link>
                                    <ul>
                                        <li className="current"><Link to="#">English</Link></li>
                                        <li><Link to="#">Spanish</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                    <div className="container">
                        <div className="wrapper flexitem">
                            <Link to="#" className="trigger desktop-hide"><Menu2LineIcon/></Link>
                            <div className="left flexitem">
                                <div className="logo"><Link to="/"><span className="circle"></span>TrendX</Link></div>
                                <nav className="mobile-hide">
                                    <ul className="flexitem second-links">
                                        <li className="mobile-hide"><Link to="#">Home</Link></li>
                                        <li><Link to="#">Shop</Link></li>
                                        <li className="has-child">
                                            <Link to="#">Women
                                                <div className="icon-small"><ArrowDownSLineIcon/></div>
                                            </Link>
                                            <div className="mega">
                                                <div className="container">
                                                    <div className="wrapper">
                                                        {
                                                            womenDpt.map(department => (
                                                                <div className="flexcol" key={department.id}>
                                                                    <div className="row">
                                                                        <h4>{department.dpt}</h4>
                                                                        <ul>
                                                                            {
                                                                                department.subDpt.map(subDpt => (
                                                                                    <li><Link to={`${department.dpt}/${subDpt}`}>{subDpt}</Link></li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                        <div className="flexcol products">
                                                            <div className="row">
                                                                <div className="media">
                                                                    <div className="thumbnail object-cover">
                                                                        <Link to="#">
                                                                            <img src="../src/assets/products/apparel4.jpg" alt=""/>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="text-content">
                                                                    <h4>Most wanted</h4>
                                                                    <Link to="#" className="primary-button">Order Now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to="/men">Men</Link></li>
                                        <li>    
                                            <Link to="/sports">
                                                Sports
                                                <div className="fly-item"><span>New!</span></div>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="right">
                                <ul className="flexitem second-links">
                                    <li><Link to="#">
                                        <div className="icon-large"><HeartLineIcon>
                                        <div className="fly-item"><span className="item-number">0</span></div>
                                        </HeartLineIcon></div>
                                    </Link></li>
                                    <li><Link to="#" className="iscart">
                                        <div className="icon-large">
                                            <ShoppingCartLineIcon/>
                                            <div className="fly-item"><span className="item-number">0</span></div>
                                        </div>
                                        <div className="icon-text">
                                            <div className="mini-text">Total</div>
                                            <div className="cart-total">$0.00</div>
                                        </div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-main mobile-hide">
                    <div className="container">
                        <div className="wrapper flexitem">
                            <div className="left">
                                <div className="dpt-cat">
                                    <div className="dpt-head">
                                        <div className="main-text">All Departments</div>
                                        <div className="mini-text mobile-hide">Total {allProducts.length} products</div>
                                        <span 
                                            className="dpt-trigger mobile-hide"
                                            onClick={() => onClickMenu()}
                                        >
                                            {
                                                menu 
                                                ? <CloseLineIcon/>
                                                : <Menu3LineIcon/> 
                                            }
                                        </span>
                                    </div>
                                    <div 
                                        className="dpt-menu"
                                        style={{display: menu ? 'block' : 'none'}}
                                    >
                                        <ul className="second-links">
                                            {
                                                allCat.filter(categorie => categorie.categories != false).map(categorie => (
                                                    <li className={`has-child ${categorie.dpt}`} key={categorie.id}>
                                                        <Link to="#">
                                                            <div className="icon-large"><BearSmileLineIcon/></div>
                                                            {categorie.dpt}
                                                            <div className="icon-small"><ArrowRightLineIcon/></div>
                                                        </Link>
                                                        <ul>
                                                            {
                                                                categorie.categories.map(department => (
                                                                    <li><Link to="#">{department}</Link></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                            {
                                                allCat.filter(department => department.categories = false).map(department => (
                                                    <li className="">
                                                        <Link to="#">
                                                            <div className="icon-large"><TShirtLineIcon/></div>
                                                            {department.dpt}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                            <li className="">
                                                <Link to="#">
                                                    <div className="icon-large"><User5LineIcon/></div>
                                                    Girl's Fashion
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="#">
                                                    <div className="icon-large"><User6LineIcon/></div>
                                                    Boy's Fashion
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="#">
                                                    <div className="icon-large"><HeartPulseLineIcon/></div>
                                                    Health & Household
                                                </Link>
                                            </li>
                                            <li className="has-child homekit">
                                                <Link to="#">
                                                    <div className="icon-large"><Home8LineIcon/></div>
                                                    Home & Kitchen
                                                    <div className="icon-small"><ArrowRightLineIcon/></div>
                                                </Link>
                                                <div className="mega">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4><Link to="#">Kitchen & Dining</Link></h4>
                                                            <ul>
                                                                <li><Link to="#">Kitchen</Link></li>
                                                                <li><Link to="#">Dining Room</Link></li>
                                                                <li><Link to="#">Pantry</Link></li>
                                                                <li><Link to="#">Great Room</Link></li>
                                                                <li><Link to="#">Breakfast Nook</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h4><Link to="#">Living</Link></h4>
                                                            <ul>
                                                                <li><Link to="#">Living Room</Link></li>
                                                                <li><Link to="#">Family Room</Link></li>
                                                                <li><Link to="#">Sunroom</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4><Link to="#">Bed & Bath</Link></h4>
                                                            <ul>
                                                                <li><Link to="#">Bathroom</Link></li>
                                                                <li><Link to="#">Powder Room</Link></li>
                                                                <li><Link to="#">Bedroom</Link></li>
                                                                <li><Link to="#">Storage & Closet</Link></li>
                                                                <li><Link to="#">Baby & Kids</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="row">
                                                            <h4><Link to="#">Utility</Link></h4>
                                                            <ul>
                                                                <li><Link to="#">Laundry</Link></li>
                                                                <li><Link to="#">Garage</Link></li>
                                                                <li><Link to="#">Mudroom</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4><Link to="#">Outdoor</Link></h4>
                                                            <ul>
                                                                <li><Link to="#">Landscape</Link></li>
                                                                <li><Link to="#">Patio</Link></li>
                                                                <li><Link to="#">Deck</Link></li>
                                                                <li><Link to="#">Pool</Link></li>
                                                                <li><Link to="#">Backyard</Link></li>
                                                                <li><Link to="#">Porch</Link></li>
                                                                <li><Link to="#">Exterior</Link></li>
                                                                <li><Link to="#">Outdoor Kitchen</Link></li>
                                                                <li><Link to="#">Driveway</Link></li>
                                                                <li><Link to="#">Poolhouse</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="icon-large"><AndroidLineIcon/></div>
                                                    Pet Supplies
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="icon-large"><BasketballLineIcon/></div>
                                                    Sports
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="icon-large"><ShieldStarLineIcon/></div>
                                                    Best Seller
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="search-box">
                                    <form action="" className="search">
                                        <span className="icon-large"><SearchLineIcon/></span>
                                        <input type="search" placeholder="Search for product"/>
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    </>
  )
}
