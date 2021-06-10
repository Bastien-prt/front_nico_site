import { useEffect, useState } from "react";
import axios from "axios";

import "./Product.scss"

function Product() {
const [ ardoises, setArdoises ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/ardoises")
        .then(resp => setArdoises(resp.data))
    }, [])
    return (
      <div className="mb-44 w-11/12 my-0 mx-auto">
          
        <p className="text-lightGray font-thin mb-4"> {ardoises.length} articles  </p>
        <div className="flex justify-between flex-wrap">
            {ardoises.map((ardoise) => (
                <div className="div-card mb-10">
                    <img className="card-product-img" src={ardoise.image} alt="" />
                    <div className="p-2">
                        <p className="text-lightGray uppercase"> {ardoise.title} </p>
                        <p> {ardoise.price} € </p>
                        <p> {ardoise.dimension} </p>
                        <p className="text-lightGray font-thin"> {ardoise.description} </p>
                    </div>
                    
                </div>
                
            ))}
        </div>
      </div>
    );
  }
  
  export default Product;
