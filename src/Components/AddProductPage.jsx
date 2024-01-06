import axios from "axios";
import React from "react";
import { useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom"
// import "./app.css"
// import ProductService from "../service/ProductService";
export default function AddProductPage() {
  const navigate=useNavigate();
  const [formdetails, setFormDetails] = useState({
    Foodid: "",
    Foodname: "",
  
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails((prevFormDetails) => ({
      ...prevFormDetails,
      [name]: value,
    }));
  };
  const addProduct = async() => {
    console.log(formdetails);
    try{
      const data=await axios.post("http://localhost:8080",formdetails)
     console.log(data.message);
    }catch(err){ 
    console.log(err);
    }
    navigate("/list");
    

  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="pid" className="htmlForm-label">
            Product Id
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="pid"
            name="pid"
            value={formdetails.pid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pname" className="htmlForm-label">
            Product Name
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="pname"
            name="pname"
            value={formdetails.pname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="htmlForm-label">
            Product Price
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="price"
            name="price"
            value={formdetails.price}
            onChange={handleChange}
            required
          />
        </div>
       

        <button type="button" className="btn btn-primary" onClick={addProduct}>
          Add Product
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/list">  <span className="btn btn-secondary">
          Back
        </span></Link>
      </form>
    </div>
  );
}
