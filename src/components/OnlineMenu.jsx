import React from "react";
import Menu from "../constants/recipes.js";
import "../OnlineMenu.css";

const OnlineMenu = () => {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Online Menu</h1>
      <p className="menu-description">
        Welcome to the online menu page! Explore our delicious recipes below.
      </p>

      <section className="menu-grid" aria-label="Menu Items">
        {Menu.map((recipe) => (
          <div
            key={recipe.id}
            className="menu-card"
            aria-label={`Menu item: ${recipe.title}`}
          >
            <img src={recipe.image} alt={recipe.title} className="menu-image" />

            <div className="menu-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="price-container">
                <span className="price">${recipe.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OnlineMenu;
