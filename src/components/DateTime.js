import React from 'react';
import './style.css';

export default function DateTime() {

  var showdate = new Date();
  var dt = showdate.toDateString();

  return (
    <div>
     <h6 style={{ marginLeft:"20px" , color:"#FFFFFF"}}> {dt}</h6>
    </div>

  ) ;
}