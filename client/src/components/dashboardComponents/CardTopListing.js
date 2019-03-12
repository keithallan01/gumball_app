import React from "react";
import faker from "faker";

const CardTopListing = () => {
  return (
    <div className="card-top">
      <img width="100%" src={faker.image.avatar()} alt="Card cap" />
      <div className="container">
        <p>Architect & Engineer</p>
        <h3>
          <b>£40.0</b>
        </h3>
      </div>
    </div>
  );
};

export default CardTopListing;
