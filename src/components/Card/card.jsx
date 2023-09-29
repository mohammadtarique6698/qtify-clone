import React from "react";
import { Chip, Tooltip } from "@mui/material";
import "./card.css";

function Card({ data, type }) {
  //console.log(data)
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className="main">
              <div className="card">
                <img
                  src={image}
                  alt="album"
                  style={{
                    height: "14rem",
                    width: "12rem",
                    objectFit: "cover",
                    borderRadius: "0.8rem 0.8rem 0.8rem 0.8rem",
                  }}
                  loading="lazy"
                />
                <div className="banner">
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    sx={{
                      color: "var(--white-color)",
                      backgroundColor: "var(--black-color)",
                    }}
                  />
                </div>
              </div>
              <div className="title-name">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      default:
        return null;
    }
  };
  return getCard(type);
}

export default Card;
