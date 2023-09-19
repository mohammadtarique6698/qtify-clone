import React from "react";
import "./footer.css"

const footer = ({year, name}) => {
    return(
        <div className="footer">
            <h4>Copyright © {year}. All rights reserved.</h4>
            <h3>Developed by {name}.</h3>
        </div>
    )
}

export default footer;