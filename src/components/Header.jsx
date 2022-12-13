import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { RiShoppingBag2Line } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

function Header() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <header className="header">
      <Button className="logo">
        <BsHouseDoor />
        ImmoCoin
      </Button>
      <SearchBar />
      <Button className="cart">
        <RiShoppingBag2Line />
        <span>{cartItems.length}</span>
      </Button>
    </header>
  );
}

export default Header;
