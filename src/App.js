import "./index.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./components/CardAndGridofCards/cardandgridofcards.jsx";
import NavigationBar from "../src/components/NavBar/navBar.jsx"; 
import Footer from "../src/components/Footer/footer.jsx"

const App = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = "https://qtify-backend-labs.crio.do/albums/top";
        const response = await axios.get(api);
        const data = response.data;
        setTopAlbumData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <NavigationBar />
      <Card albumData={topAlbumData} />
      <Footer year="2023" name="Mohammad Tarique" />
    </div>
  );
}

export default App;

