import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
        }}
    />
);

export default ColoredLine;