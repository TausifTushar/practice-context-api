/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../Context/Context";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const {handelChange} = useContext(MyContext)
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((pata) => setDetails(pata));
  }, []);

  const {title,thumbnail,description } = details;
  return (
    <div>
      <h1>{details.title}</h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p >{description}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>handelChange(siProduct)}>Add to Cart</button>
           {/* <Link to={"/Cart"}> </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
