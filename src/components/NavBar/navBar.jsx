import React from "react";
import Logo from "../Logo/logo.jsx";
import SearchBar from "../SearchBar/search.jsx";
import Button from "../Button/button.jsx";
import Hero from "../Hero/hero.jsx";
import Card from "../Card/card.jsx";
import "./navBar.css";

const NavBar = () => {
  return (
    <div>
      <nav class="Navigation">
        <Logo />
        <SearchBar placeholderText="Search a album of your choice" />
        <Button text="Give Feedback" />
      </nav>
      <Hero />
      <Card no_Follows="100 Follows" Genre="New English Songs"/>
    </div>
  );
};

export default NavBar;