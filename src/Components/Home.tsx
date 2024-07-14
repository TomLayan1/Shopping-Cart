import { Product as ProductType } from "../types";
import { products } from "../Assets/Products";
import { useEffect, useState } from "react";

const Home = () => {
 const [productList, setProductList] = useState<ProductType[]>(products)
 
 useEffect(() => {
  console.log(productList);
 }, [productList])

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 py-6 md:px-20 md:py-10 gap-6 md:gap-8">
      {productList.map((item, index) => (
        <div key={index} className="w-[180px] lg:w-[200px] h-auto p-3 flex flex-col items-center shadow-customShadow">
          <div className="h-[150px] mb-4">
            <img src={item.image} alt={item.name} className="w-full h-full flex justify-center" />
          </div>
          <div className="w-full mb-2">
            <p className="text-[15px] text-nowrap text-ellipsis overflow-hidden">{item.name}</p>
          </div>
          <div className="flex items-center justify-between w-full mb-2">
            <p>${(item.priceCents / 100).toFixed(2)}</p>
            <img src={item.rating.stars} alt={item.rating.stars} className="w-[100px]" />
          </div>
          <button className="rounded-lg bg-black text-white w-full py-2">ADD TO CART</button>
        </div>
      ))}
    </div>
  )
}

export default Home