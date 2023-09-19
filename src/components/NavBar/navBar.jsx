import React from "react";
import Logo from "../Logo/logo.jsx";
import SearchBar from "../SearchBar/search.jsx";
import Button from "../Button/button.jsx";
import Hero from "../Hero/hero.jsx";
import "./navBar.css"


const NavBar = () => {
  return (
    <div>
      <nav className="Navigation">
        <Logo />
        <SearchBar placeholderText="Search a album of your choice" />
        <Button text="Give Feedback" />
      </nav>
      <Hero />
    </div>
  );
};

export default NavBar;