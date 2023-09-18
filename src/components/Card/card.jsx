import React from "react";
import "./card.css"
import {ReactComponent as SongImage} from "../../assets/song-image.svg" 

const card = ({no_Follows, Genre}) => {
    return (
        <div className="card">
            <div className="top-part">
                <div className="image">
                    <SongImage />
                </div>

                <div className="follows">
                    <div className="oval">
                        <p style={{fontSize: "10px", color: "var(--white-color)"}}>{no_Follows}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-part">
                <p style={{fontSize: "0.8rem"}}>{Genre}</p>
            </div>
        </div>
    );
}

export default card;