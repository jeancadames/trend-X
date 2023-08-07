import { allProducts } from "../data/allProducts"
import { womenDpt } from "../data/womenDpt"
import { CategoryPage, HomePage, ProductPage } from "../pages/index"

import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        {
          allProducts.map(product => (
            product && <Route key={product.id} path={`${product.category}/${product.name}`} element={<ProductPage product={product}/>}/>
          ))
        }
        {
          womenDpt.map(department => (
              department.subDpt.map(subDpt => (
                subDpt && <Route key={department.id} path={`${department.dpt}/${subDpt}`} element={<CategoryPage category={subDpt}/>}/>  
              ))))
        }
        <Route path="/men" element={<CategoryPage category={'Men'}/>}/>
        <Route path="/sports" element={<CategoryPage category={'Sports'}/>}/>
    </Routes>
    )
}
