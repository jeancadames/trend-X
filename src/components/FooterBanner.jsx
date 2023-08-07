import { footerCat } from "../data/footerCat"

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'

export const FooterBanner = () => {
  return (
    <div className="banners">
        <div className="container">
            <div className="wrapper">
                <div className="column">
                    <div className="banner flexwrap">
                        <div className="row">
                            <div className="item">
                                <div className="image">
                                    <img src="../src/assets/banner/banner1.jpg" alt=""/>
                                </div>
                                <div className="text-content flexcol">
                                    <h4>Brutal Sale!</h4>
                                    <h3><span>Get the deal in here</span><br/>Living Room</h3>
                                    <a href="" className="primary-button">Shop Now</a>
                                </div>
                                <a href="" className="over-link"></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <div className="image get-gray">
                                    <img src="../src/assets/banner/banner2.jpg" alt=""/>
                                </div>
                                <div className="text-content flexcol">
                                    <h4>Brutal Sale!</h4>
                                    <h3><span>Discount Everyday</span><br/>Office Outfit</h3>
                                    <a href="" className="primary-button">Shop Now</a>
                                </div>
                                <a href="" className="over-link"></a>
                            </div>
                        </div>
                    </div>
                    <div className="product-categories flexwrap">
                        {
                            footerCat.map(category => (
                                <div className="row" key={category.id}>
                                    <div className="item">
                                        <div className="image">
                                            <img src={`../src/assets/banner/${category.image}.jpg`} alt=""/>
                                        </div>
                                        <div className="content mini-links">
                                            <h4>{category.category}</h4>
                                            <ul className="flexcol">
                                                {
                                                    category.groups.map(item => (
                                                        <li key={Math.random()}><a href="#">{item}</a></li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="second-links">
                                                <a href="" className="view-all">View all<ArrowRightLineIcon/></a>
                                            </div>
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
  )
}
