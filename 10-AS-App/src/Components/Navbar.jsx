import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { RiMobileDownloadFill } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import { FaTabletScreenButton } from "react-icons/fa6";
import { LuFilterX } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { items } from "../Data/data";
const Navbar = ({ setData ,cart}) => {
  // const conversionRate = 82; // 1 USD = 75 INR

  const [searchterm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filterdByItems = (catagory) => {
    const element = items.filter((product) => product.category === catagory);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const formatNumber = (num) => {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setSearchTerm("");
  };

  // const formatNumber = (num) => {
  //   const dollars = (num / conversionRate).toFixed(2);
  //   if (dollars >= 1000 && dollars < 1000000) {
  //     return `$${(dollars / 1000).toFixed(1)}k`;
  //   }
  //   return `$${dollars}`;
  // };

  return (
    <>
    <header className="sticky-top">
      <div className="nav-bar">
        <Link to={"/"} className="brand">
          As-Cart
        </Link>

        <form onSubmit={handleSearch} action="" className="search-bar">
          <input
            type="text"
            placeholder="Search products"
            value={searchterm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="search-icon" />
          </button>
        </form>

        <Link to={"/cart"} className="cart">
          <button type="button" class="btn btn-primary position-relative">
            Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>


      {location.pathname === "/" && (
        <div className="nav-bar-wrapper">
        <div className="items">
          Filter by <FaArrowRight />
        </div>
        <div onClick={() => setData(items)} className="items">
          No Filter <LuFilterX />
        </div>
        <div onClick={() => filterdByItems("mobiles")} className="items">
          Mobiles <RiMobileDownloadFill />
        </div>
        <div onClick={() => filterdByItems("laptops")} className="items">
          Laptop <IoMdLaptop />
        </div>
        <div onClick={() => filterdByItems("tablets")} className="items">
          Tablets <FaTabletScreenButton />
        </div>
        <div onClick={() => filterByPrice(30000)} className="items">
          {formatNumber(30000)}
        </div>
        <div onClick={() => filterByPrice(49999)} className="items">
          {formatNumber(49999)}
        </div>
        <div onClick={() => filterByPrice(69999)} className="items">
          {formatNumber(69999)}
        </div>
        <div onClick={() => filterByPrice(89999)} className="items">
          {formatNumber(89999)}
        </div>
      </div>
      )}
      
    </header>
    </>
  );
};

export default Navbar;
