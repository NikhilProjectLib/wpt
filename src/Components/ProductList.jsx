import React, { useEffect, useState } from "react";
// import ProductService from "../service/ProductService";
import axios  from "axios";

import { Link } from "react-router-dom";

export default function FoodList() {
const[change,setChange]=useState(true);
const[foodarr,setProdArr]=useState([]); 
useEffect(()=>{
fetch();

},[])

const fetch=async()=>{

  try{
      const res=await axios.get("http://localhost:8080")
      setProdArr(res.data)

    }catch(err){
      console.log(err);
    }
}




  return (
    <>
      <Link to="/">
        <span className="btn btn-info" > Add foo </span>
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Food Id</th>
            <th scope="col">Food Name</th>
           
            <th scope="col">Price</th>
           
          </tr>
        </thead>
        <tbody>

          {prodarr.map((food) => (
            <tr key={food.pid}>
              <th scope="row">{food.pid}</th>
              <td>{food.pname}</td>
             
              <td>{food.price}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  );
}
