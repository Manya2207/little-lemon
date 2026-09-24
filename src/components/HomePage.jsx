import React from "react";
import { Link } from "react-router-dom";
import recipes from "../constants/recipes.js";
import "../HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-text">
          <h1 style={{ color: "#fde047" }}>Little Lemon</h1>
          <div>
            <h2>Munich</h2>
            <p>Your favorite restaurant for delicious meals. Book Now!</p>
            <Link to="/booking" className="btn">
              Reserve
            </Link>
          </div>
        </div>
        <img src="home.jpg" alt="home" className="header-img" />
      </header>

      <main>
        <nav className="specials-nav">
          <h1>Special this week!</h1>
          <Link to="/OnlineMenu" className="btn">
            Online Menu
          </Link>
        </nav>

        <section className="menu-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="card-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "#b45309" }}>
                    ${recipe.price}
                  </span>
                  <Link to="/booking" className="btn">
                    Reserve a Table
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
