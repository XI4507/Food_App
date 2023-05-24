import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const restaurant=useRestaurant(resId);
    const dispatch=useDispatch();
    const handleAddItem=()=>{
        dispatch(addItem("Grapes"))
    }

   
    return (!restaurant)?<Shimmer/>:(
        <div className="p-4">
            <h1 className="font-bold">Restaurant Id : 12</h1>
            <h2>{restaurant.name}</h2>
            <img className="b-2 bg-gray-400" src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt="restaurant image" />
            <h3>{restaurant.areaName}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
            <button className="p-2 m-2 bg-green-200" onClick={handleAddItem}>Add-Item</button>
        </div>
    )
}

export default RestaurantMenu;