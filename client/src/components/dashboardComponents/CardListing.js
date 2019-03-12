import React from "react";
import faker from "faker";

const CardListing = () => {
  return (
    <div className="card-listing">
      <div>
        <img src={faker.image.avatar()} alt="Card cap" />
      </div>
      <div className="card-detail">
        <h3>Product name</h3>
        <p>Product descriptio</p>
        <div className= "price-location">
          <div className="price">
            <h3>£40.0</h3>
          </div>
          <div className="loction">
            <h3>Location</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListing;
