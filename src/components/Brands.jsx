import { allBrands } from "../data/brands"

export const Brands = () => {
  return (
    <div className="brands">
        <div className="container">
            <div className="wrapper flexitem">
                {
                    allBrands.map(brand => (
                        <div className="item" key={brand.id}>
                            <span>
                                <img src={`src/assets/brands/${brand.brandName}.png`} alt={brand.brandName}/>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
