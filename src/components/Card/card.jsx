import React from 'react'
import {Chip, Tooltip} from "@mui/material"
import "./card.css"

function Card({data, type}) {
    //console.log(data)
    const getCard = (type) => {
        switch(type) {
            case "album" : {
                const {image, follows, title, slug, songs} = data;
                
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                    <div className="wrapper">
                        <div className="card">
                            <img src={image} alt="album" style={{height: "13rem", width: "10rem", objectFit: "cover" , borderRadius: "0.8rem 0.8rem 0.8rem 0.8rem"}} loading="lazy" />
                            <div className= "banner">
                                <Chip label= {`${follows} Follows`} size= "small" className= "chip" />
                            </div>
                        </div>
                        <div className="title">
                                <p>{title}</p>
                        </div>
                    </div>
                    </Tooltip>
                )
            }
            default: return null;
        }
    }
    return getCard(type)
}


export default Card;