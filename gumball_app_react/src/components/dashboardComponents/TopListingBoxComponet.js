import React, { Component } from 'react';
import CardTopHotComponet from './CardTopListingComponet'

const TopListingBoxComponet = () => {
    return (  
           <div className="container">
           <h2>Top picks</h2>
           <ul className="ul-card">
            <li className="li-card"> <CardTopHotComponet /></li>
            <li className="li-card"> <CardTopHotComponet /></li>
            <li className="li-card"> <CardTopHotComponet /></li>
            <li className="li-card"> <CardTopHotComponet /></li>
           </ul>
         </div>
    );
}
 
export default TopListingBoxComponet;