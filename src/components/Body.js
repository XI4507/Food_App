import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import React from "react";
import { SWIGGY_API } from "../Constant";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";


const Body = () => {
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getRestaurant();
  },[])
  async function getRestaurant(){
    const data=await fetch(SWIGGY_API);
    const json=await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  }

  const isOnline=useOnline();
  if(!isOnline){
    return <h1>Oops...look like Your Internet is offline.</h1>
  }

  
  return (filteredRestaurant.length===0)?<Shimmer/>: (
    <>
      <div className="search-container m-2">
        <input
          type="text"
          className="border p-1 focus:border-2 border-orange-400"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn px-2 py-1 ml-2 bg-orange-400 rounded-lg text-white"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurant(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-between flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data}  /> </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
