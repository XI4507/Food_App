import { IMG_CDN_URL } from "../Constant";
import React from "react";

const RestaurantCard=({cloudinaryImageId,name,cuisines})=>{
    return(
        <div className="card border w-72 shadow-lg h-80 p-1 m-2">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="Restaurant Image"/>
            <h3 className="font-semibold">{name}</h3>
            <p id="cuisines">{cuisines.join(" ,")}</p>
            <p>4.2 stars</p>
        </div>
    )
}

export default RestaurantCard;