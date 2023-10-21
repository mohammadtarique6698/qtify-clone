import React from "react";
import "./playerfooter.css";
import { ReactComponent as PlayButton } from "../../assets/play-button.svg";
import { ReactComponent as Bar } from "../../assets/bar.svg";

const Playerfooter = ({ data1, data2, data3, selectedSong }) => {
  //   console.log("data1:", data1);
  //   console.log("data2:", data2);
  //   console.log("Song data:", data3);

  let allSongsOfData1 = data1.map((item) => item.songs);
  //console.log(allSongsOfData1)

  let allSongsOfData2 = data2.map((item) => item.songs);
  //console.log(allSongsOfData2)

  let allSONGSOfAlbum = allSongsOfData1.concat(allSongsOfData2);
  //console.log('All song of album', allSONGSOfAlbum)

  const titlesAndImagesOfAlbumSongs = allSONGSOfAlbum.map((album) => {
    return album.map((song) => {
      const { image, title } = song;
      return { image, title };
    });
  });
  console.log(titlesAndImagesOfAlbumSongs);

  const titleAndImagesOfSongs = data3.map(({ image, title }) => {
    return {
      image,
      title,
    };
  });

  //   console.log(titleAndImagesOfSongs);

  titlesAndImagesOfAlbumSongs.push(titleAndImagesOfSongs);
  //    console.log(titlesAndImagesOfAlbumSongs);

  return (
    <div style={{ paddingTop: "2rem" }}>
      <div className="player">
        <div
          style={{ display: "flex", width: "15%", justifyContent: "flex-end" }}
        >
          {selectedSong.image ? (
            <img
              style={{
                height: "10rem",
                width: "8rem",
                borderRadius: "0.5rem",
                border: "0",
                objectFit: "cover",
              }}
              src={selectedSong.image}
              alt={selectedSong.title}
            />
          ) : (
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "var(--white-color)",
              }}
            >
              No Image
            </p>
          )}
        </div>
        <div className="song-name">
          <h3>{selectedSong.title}</h3>
        </div>
        <div className="player-and-play-button">
          <button style={{ borderRadius: "3rem" }}>
            <PlayButton />
          </button>
          <span style={{ paddingTop: "1rem", paddingBottom: "1rem" }}></span>
          <div className="player-bar">
            <p style={{ paddingRight: "0.5rem", color: "var(--white-color)" }}>
              0:00
            </p>
            <Bar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playerfooter;
