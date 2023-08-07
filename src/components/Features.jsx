import { allProducts } from "../data/allProducts"

import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import EyeLineIcon from 'remixicon-react/EyeLineIcon'
import ShuffleLineIcon from 'remixicon-react/ShuffleLineIcon'
import { Link } from "react-router-dom"
import ReactPaginate from 'react-paginate';
import { Pagination } from "./Pagination"
import { useState } from "react"
import { ProductItem } from "./ProductItem"

export const Features = ({itemsPerPage, filterProduct}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastNew = currentPage * itemsPerPage;
    const indexOfFirstNew = indexOfLastNew - itemsPerPage;
    const categoryProducts = allProducts.filter((product) => product.category === filterProduct);
    const currentCategoryProduct = categoryProducts.slice(indexOfFirstNew, indexOfLastNew);
    const currentProduct = allProducts.slice(indexOfFirstNew, indexOfLastNew);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="features">
        <div className="container">
            <div className="wrapper">
                <div className="column">
                    <div className="sectop flexitem">
                        <h2><span className="circle"></span><span>Featured Products</span></h2>
                        <div className="second-links">
                            <span className="view-all">{categoryProducts.length ? categoryProducts.length : allProducts.length} total products<i className="ri-arrow-line"></i></span>
                        </div>
                    </div>
                    <div className="products main flexwrap">
                        <ProductItem currentItem={currentCategoryProduct.length ? currentCategoryProduct : currentProduct}/>
                    </div>
                    <Pagination itemsPerPage={itemsPerPage} totalItems={categoryProducts.length ? categoryProducts.length : allProducts.length} paginate={paginate}/>
                </div>
            </div>
        </div>
    </div>
  )
}
