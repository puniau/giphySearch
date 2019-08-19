import React from "react";

const Gif = props => (
  <li>
    <img src={props.gif} alt={props.alt} />
  </li>
);

export default Gif;
