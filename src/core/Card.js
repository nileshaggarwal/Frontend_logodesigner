import React from "react";
import { Link } from "react-router-dom";
import "../explore.css";

const Card = ({ logo }) => {
  const Capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  
  return (
    <div className="card border">
      <div className="card-header">{Capitalize(logo.name)}</div>
      <div className="card-body">
        <div className="image">
          <Link to={`/explore/logo/${logo.logo_id}`}>
            <img
              className="card-photo"
              src={logo.logo_img_url}
              alt={"Logo Preview"}

            />
          </Link>
        </div>
        <p className="card-description">{Capitalize(logo.description)}</p>
        <span className="category">
          Category: {Capitalize(logo.category_name)}
        </span>
      </div>
    </div>
  );
};

export default Card;
