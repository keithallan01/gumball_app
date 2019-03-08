import React from 'react';


const DetailComponent = (props) => {

    const listingDetail = props.listingsArr.map((listing) => {
        return (
            <tr key={listing.id}>
                <td>{listing.item}</td>
                <td>{listing.description}</td>
                <td>{listing.category}</td>
                <td>{listing.askingPrice}</td>
                <td><button className="btn-warning">Edit</button></td>
                <td><button className="btn-danger">Delete</button></td>
            </tr>
        )
    })

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Asking Price (£)</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {listingDetail}
                </tbody>
            </table>
        </div>
    );
}

export default DetailComponent;