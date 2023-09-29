import "./index.css";
import React, { useState, useEffect } from "react";
//import Card from "./components/CardAndGridofCards/cardandgridofcards.jsx";
import NavigationBar from "../src/components/NavBar/navBar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
// import Card from "./components/Card/card.jsx";
import Section from "./components/Section(ContainsGrid)/section.jsx";
import { fetchTopAlbums } from "./APIcall/apicall.jsx";

const App = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const getTopAlbumData = async () => {
    try {
      const res = await fetchTopAlbums();
      //console.log(res)
      setTopAlbumData(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopAlbumData();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      {/* <Card albumData={topAlbumData} /> */}
      <div className= "main-section-wrapper">
        <Section title="Top Albums" data={topAlbumData} type="album" />
      </div>
      <Footer year="2023" name="Mohammad Tarique" />
    </div>
  );
};

export default App;
