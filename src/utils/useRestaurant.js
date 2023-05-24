import { useState,useEffect } from "react";
import { FETCH_MENU } from "../Constant";

const useRestaurant=(resId)=>{
    const [restaurant,setRestaurant]=useState(null)
    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const data=await fetch(FETCH_MENU+resId)
        const json=await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }
    return restaurant;
}
export default useRestaurant;