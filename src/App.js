import "./index.css";
import React, { useState, useEffect } from "react";
import NavigationBar from "../src/components/NavBar/navBar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
import Section from "./components/Section(ContainsGrid)/section.jsx";
import PlayerFooter from "./components/PlayerFooter/playerfooter.jsx";
import { fetchTopAlbums } from "./APIcall/apicall.jsx";
import { fetchNewAlbums } from "./APIcall/apicall.jsx";
import { fetchSongs } from "./APIcall/apicall.jsx";
import Accordion from "../src/components/FAQ/faq.jsx"
import "swiper/css";
import "./App.css";

const App = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [newSongs, setNewSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState({ title: '', image: '' });

  const handleSongSelect = (selectedSong) => {
    setSelectedSong(selectedSong);
  };

  const getTopAlbumData = async () => {
    try {
      const res = await fetchTopAlbums();
      //console.log(res)
      setTopAlbumData(res);
    } catch (err) {
      console.error(err);
    }
  };

  const getNewAlbumData = async () => {
    try {
      const res2 = await fetchNewAlbums();
      setNewAlbumData(res2);
    } catch (err) {
      console.error(err);
    }
  };

  const getNewSongs = async () => {
    try {
      const res3 = await fetchSongs();
      //console.log(newSongs)
      setNewSongs(res3);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopAlbumData();
  }, []);

  useEffect(() => {
    getNewAlbumData();
  }, []);

  useEffect(() => {
    getNewSongs();
  }, []);

  const filteredData = (val) => {
    setNewSongs(val);
  };

  return (
    <div className="App">
      <NavigationBar data={topAlbumData} handleSongSelect={handleSongSelect}/>
      <div className="main-section-wrapper">
        <Section title="Top Albums" data={topAlbumData} type="album" />
        <Section title="New Albums" data={newAlbumData} type="album" />
      </div>
      <div className="song-section">
        <Section
          title="Songs"
          data={newSongs}
          type="songs"
          filteredData={filteredData}
        />
      </div>
      <Accordion />
      <PlayerFooter data1={topAlbumData} data2={newAlbumData} data3={newSongs} selectedSong={selectedSong}/>
      <div className="space"></div>
      <Footer year="2023" name="Mohammad Tarique" />
    </div>
  );
};

export default App;
