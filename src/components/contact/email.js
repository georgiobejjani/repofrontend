import React from "react";
import { Link,Router } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Router>
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </Router>
    );
};

export default ButtonMailto;