import { useState } from "react"
import { Features } from "../components"
import { allProducts } from "../data/allProducts";
import { Link } from "react-router-dom";

export const CategoryPage = ({category}) => {
    const [itemsPerPage, setitemsPerPage] = useState(9);
    const productList = allProducts.filter((product) => product.category === category);

  return (
    <>
    <div className="single-category">
        <div className="container">
            <div className="wrapper">
                <div className="column">
                    <div className="holder">
                        <div className="row sidebar">
                            <div className="filter">
                                <div className="filter-block">
                                    {/* <h4>Category</h4>
                                    <ul>
                                        <li>
                                            <input/>
                                            <label>
                                                <span className="checked"></span>
                                                <span>Bags</span>
                                            </label>
                                            <span className="count">15</span>
                                        </li>
                                        <li>
                                            <input/>
                                            <label>
                                                <span className="checked"></span>
                                                <span>Beauty</span>
                                            </label>
                                            <span className="count">2</span>
                                        </li>
                                        <li>
                                            <input/>
                                            <label>
                                                <span className="checked"></span>
                                                <span>Clothing</span>
                                            </label>
                                            <span className="count">3</span>
                                        </li>
                                        <li>
                                            <input/>
                                            <label>
                                                <span className="checked"></span>
                                                <span>Jewelry</span>
                                            </label>
                                            <span className="count">1</span>
                                        </li>
                                        <li>
                                            <input/>
                                            <label>
                                                <span className="checked"></span>
                                                <span>Shoes</span>
                                            </label>
                                            <span className="count">7</span>
                                        </li>
                                    </ul> */}
                                    <h4>Activity</h4>
                                    <ul>
                                        {
                                            productList.length
                                            ? productList.map(product => (
                                                <li>
                                                    <input/>
                                                    <label>
                                                        <span className="checked"></span>
                                                        <span>{product.activity}</span>
                                                    </label>
                                                    <span className="count">{product.activity.length}</span>
                                                </li>
                                            ))
                                            : allProducts.map(product => (
                                                <li>
                                                    <input/>
                                                    <label>
                                                        <span className="checked"></span>
                                                        <span>{product.activity}</span>
                                                    </label>
                                                    <span className="count">{product.activity.length}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <h4>Brands</h4>
                                    <ul>
                                        {
                                            productList.length
                                            ? productList.map(product => (
                                                <li>
                                                    <input/>
                                                    <label>
                                                        <span className="checked"></span>
                                                        <span>{product.brand}</span>
                                                    </label>
                                                    <span className="count">{product.brand.length}</span>
                                                </li>
                                            ))
                                            : allProducts.map(product => (
                                                <li>
                                                    <input/>
                                                    <label>
                                                        <span className="checked"></span>
                                                        <span>{product.brand}</span>
                                                    </label>
                                                    <span className="count">{product.brand.length}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {/*
                                <div className="filter-block products">
                                    <h4>Color</h4>
                                    <ul className="bycolor variant flexitem">
                                        <li>
                                            <input type="radio" name="color" id="cogrey"/>
                                            <label className="circle"></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="color" id="coblue"/>
                                            <label className="circle"></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="color" id="cogreen"/>
                                            <label className="circle"></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="color" id="cored"/>
                                            <label className="circle"></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="color" id="colight"/>
                                            <label className="circle"></label>
                                        </li>
                                    </ul>
                                </div>
                                */}
                            </div>
                            {/* <div className="filter-block pricing">
                                <h4>Price</h4>
                                <div className="byprice">
                                    <div className="range-track">
                                        <input type="range" value="2500" min="0"/ max="10000">
                                    </div>
                                    <div className="price-range">
                                        <span className="price-form">$50</span>
                                        <span className="price-to">$5000</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="section">
                            <div className="row">
                                <div className="cat-head">
                                    <div className="breadcrumb">
                                        <ul className="flexitem">
                                            <li><Link to="/">Home</Link></li>
                                            <li>{category}</li>
                                        </ul>
                                    </div>
                                    <div className="page-title">
                                        <h1>{category}</h1>
                                    </div>
                                    {/* <div className="cat-description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia accusamus eveniet doloribus quaerat. Error provident voluptas nisi totam illo! Aliquid dolor quaerat obcaecati consequuntur doloremque, commodi possimus facilis eaque cupiditate dolore ab consectetur reiciendis enim voluptatum excepturi molestias? Maxime, ea magni id officia ullam qui dolor at saepe. Ipsa quos cumque corrupti expedita inventore eaque dolore, sit incidunt obcaecati numquam architecto sed vero placeat quae, ducimus iste cupiditate id nobis. Autem corrupti omnis eius!</p>
                                    </div> */}
                                    <div className="cat-navigation flexitem">
                                        <div className="item-filter desktop-hide">
                                            <a href="" className="filter-trigger label">
                                                <i className="ri-menu-2-line ri-2x"></i>
                                                <span>Filter</span>
                                            </a>
                                        </div>
                                        <div className="item-sortir">
                                            <div className="label">
                                                <span className="mobile-hide">Sort by default</span>
                                                <div className="desktop-hide">Default</div>
                                                <i className="ri-arrow-down-s-line"></i>
                                            </div>
                                            <ul>
                                                <li>Default</li>
                                                <li>Product Name</li>
                                                <li>Price</li>
                                                <li>Brand</li>
                                            </ul>
                                        </div>
                                        <div className="item-perpage mobile-hide">
                                            <div className="label">items {itemsPerPage} per page </div>
                                            <div className="desktop-hide">{itemsPerPage}</div>
                                            <ul>
                                                <li onClick={() => setitemsPerPage(9)}>9</li>
                                                <li onClick={() => setitemsPerPage(18)}>18</li>
                                                <li onClick={() => setitemsPerPage(27)}>27</li>
                                                <li onClick={() => setitemsPerPage(allProducts.length)}>ALL</li>
                                            </ul>
                                        </div>
                                        <div className="item-options">
                                            <div className="label">
                                                <span className="mobile-hide">Show 9 per page</span>
                                                <div className="desktop-hide">9</div>
                                                <i className="ri-arrow-down-s-line"></i>
                                            </div>
                                            <ul>
                                            <li onClick={() => setitemsPerPage(9)}>9</li>
                                                <li onClick={() => setitemsPerPage(18)}>18</li>
                                                <li onClick={() => setitemsPerPage(27)}>27</li>
                                                <li onClick={() => setitemsPerPage(allProducts.length)}>ALL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Features itemsPerPage={itemsPerPage} filterProduct={category}/>
                            {/* <div className="load-more flexcenter">
                                <a href="" className="secondary-button">Load more</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}
