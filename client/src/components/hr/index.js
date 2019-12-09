import React from "react";
import { useAuth0 } from "../../react-auth0-spa";


const ColoredLine = (props) => (
console.log(props),
    <hr className={props.className} id={props.id}/>
)
export default ColoredLine;