import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../../data/portfolioData";

const SubNavbar = ({ activeCategoryName }) => {
  return (
    <nav className="sub-navbar">
      <ul className="sub-navbar__list">
        {categories.map(
          (category, index) =>
            index !== 0 && (
              <li key={category.name} className="sub-navbar__item">
                <NavLink
                  to={`/portfolio/${category.name}`}
                  className={({ isActive }) => {
                    const isSelected =
                      isActive || activeCategoryName === category.name;
                    return `${isSelected ? "active" : ""}`;
                  }}
                  aria-pressed={activeCategoryName === category.name}
                >
                  {category.label}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default SubNavbar;
