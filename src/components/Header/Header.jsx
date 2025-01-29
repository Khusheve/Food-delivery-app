import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Straight out of the kitchen to your doorstep!</h2>
        <p>
        Explore a diverse menu showcasing a mouthwatering selection of dishes, expertly crafted using the finest ingredients. Our goal is to delight your taste buds and enhance your dining experience, one exceptional meal at a time.
        </p>
        <a href="#food-display">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
