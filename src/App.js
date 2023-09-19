import "./index.css";
import { useState, useEffect } from 'react';
//import Card from "./components/CardAndGridofCards/cardandgridofcards.jsx";
import NavigationBar from "../src/components/NavBar/navBar.jsx"; 
import Footer from "../src/components/Footer/footer.jsx"
import Card from "./components/Card/card.jsx"
import {fetchTopAlbums} from "./APIcall/apicall.jsx"

const App = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const getTopAlbumData = async() => {
    try {
      const res = await fetchTopAlbums();
      //console.log(res)
      setTopAlbumData(res);
    }
    catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
      getTopAlbumData();
    }, []);

  return (
    <div className="App">
      <NavigationBar />
      {/* <Card albumData={topAlbumData} /> */}
      {topAlbumData.map(item => (
        <Card data={item} type="album" />
      ))}
      <Footer year="2023" name="Mohammad Tarique" />
    </div>
  );
}

export default App;

