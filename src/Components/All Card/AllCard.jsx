/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const AllCard = ( {pr}) => {

    const {title, price, brand, images, thumbnail, id } = pr

    console.log(pr.id)
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-[400px] h-[300px]"
            src={thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <h1 className="flex">price:- {price} $</h1>
          <div className="card-actions justify-end">
           <Link to={`/Products/${id}`}> <button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
