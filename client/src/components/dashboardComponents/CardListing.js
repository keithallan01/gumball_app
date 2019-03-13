import React, { useState } from "react";
// import faker from "faker";

const CardListing = props => {



  const listingDetail = props.listings.map((listing) => {
<<<<<<< HEAD
    const click = e => {
      console.log(e.target.value);
=======


    const [newListing, setNewListing] = useState({
      id: listing.id,
      item: listing.item,
      description: listing.description,
      category: listing.category,
      askingPrice: listing.askingPrice,
      searchCounter: listing.searchCounter
    })

    const handleClick = e => {
      setNewListing({ ...newListing, searchCounter: listing.searchCounter + 1 })
      props.handleListingClick(newListing, listing.id);
>>>>>>> develop
    }

    return (
      <li className="card-listing" onClick={handleClick} value={listing}>
        {/* http://localhost:8080/listings/{listings.id} */}
        <div>
          <img src={listing.image} alt="Card cap" />
        </div>
        <div className="card-detail">
          <h3>{listing.item}</h3>
          <h4>{listing.category}</h4>
          <h4>{`£${listing.askingPrice}`}</h4>
        </div>
        <div className="card-description">
          <h5>{listing.description}</h5>
        </div>
      </li>
    )

  })

  return (
    <li>
      {listingDetail}
    </li>
  )

};

export default CardListing;
