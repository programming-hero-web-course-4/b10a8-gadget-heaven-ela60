
import { NavLink, useLoaderData, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const ProductCards = () => {
    const data = useLoaderData();
    const { category_name } = useParams();
    const { categories } = useOutletContext(); 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category_name) {
            const filteredProducts = data.filter(
                (product) => product.category === category_name
            );
            setProducts(filteredProducts);
        } else {
            setProducts(data);
        }
    }, [category_name, data]);

    return (
        <>
            
         <div className="flex flex-col lg:flex-row gap-6  py-12 mt-[250px]">
           
           <div role="tablist" className="tabs tabs-boxed lg:w-1/4 border flex flex-col gap-4 py-12 items-center font-semibold">
             
               <NavLink
                   to="/"  
                   role="tab"
                   className={({ isActive }) =>
                       `tab text-xl border-2  border-[#9538E2]  ${isActive ? "tab-active" : ""}`
                   }
                  
               >
                   All Products
               </NavLink>

              
               {categories && categories.map((category) => (
                   <NavLink
                       key={category.category_name}
                       to={`/category/${category.category_name}`}
                       role="tab"
                       className={({ isActive }) =>
                           `tab text-xl border-2 border-[#9538E2] ${isActive ? "tab-active" : ""}`
                       }
                   >
                       {category.category_name}
                   </NavLink>
               ))}
           </div>

          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((product) => (
                   <Card key={product.product_id} product={product} />
               ))}
           </div>
       </div></>
    );
};

export default ProductCards;
