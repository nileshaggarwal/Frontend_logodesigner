import React from "react";
import "./explore.css";

const CategoryDropdown = ({ categories, onCategoryChange }) => {
  return (
    <div style={{ textAlign: "center", marginTop: '30px', marginBottom: '30px' }}>
      <form>
        <label style={{ color: "#c5c6c7", font: '1.2em' }} htmlFor="categ">
          Select a Category to filter Logos:
      </label>
        <br />
        <select
          style={{
            font: '1.2em',
            fontFamily: '"Libre Franklin", sans-serif',
            background: 'none',
            color: '#c5c6c7'
          }}
          onChange={() =>
            onCategoryChange(document.getElementById("categ").value)
          }
          id={"categ"}
          placeholder="Category"
        >
          <option>All</option>
          {categories.map((cate, index) => (
            <option className="option" value={cate} key={index}>
              {" "}
              {cate}{" "}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default CategoryDropdown;

