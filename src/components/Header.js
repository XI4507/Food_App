import React from "react";
import { useState ,useContext} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import UserContext from "../utils/UserContext";


const Title = () => {
  return (
    <Link to="/">
      <img className="h-24" src={logo} />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user}  =useContext(UserContext);
  const cartItem=useSelector(store => store.cart.items)
  return (
    <div className="flex justify-between shadow-lg ">
      <Title />
      <div>
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/grocery">
            <li className="px-2">Grocery</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart -{cartItem.length} Items</li>
        </ul>
      </div>
      <span className="p-9 text-blue-600">{user.name}</span>
      {isLoggedIn ? (
        <button className="px-4 bg-green-500 w-20 h-12 my-6 rounded-md hover:bg-green-600 mx-2"
          onClick={() => {
            setIsLoggedIn(false);
          }}
          id="logout"
        >
          LogOut
        </button>
      ) : (
        <button className="px-4 bg-gray-400 w-20 h-12 my-6 rounded-md hover:bg-gray-500 mx-2"
          onClick={() => {
            setIsLoggedIn(true);
          }}
          id="login"
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
