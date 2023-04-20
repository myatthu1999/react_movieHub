import React from "react";
import { Link } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";

const Cart = ({ id, poster_path }) => {
  return (
    <Link to={`/detail/${id}`} className=" w-48">
      <div className="overflow-hidden relative card rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className=" w-full object-cover"
          alt=""
        />
        <div className="dark-ov"></div>
        <BsPlayCircle className=" play-ic" />
      </div>
    </Link>
  );
};

export default Cart;
