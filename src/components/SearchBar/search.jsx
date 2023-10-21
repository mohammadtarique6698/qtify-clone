import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { ReactComponent as SVG } from "../../assets/searchIcon.svg";
import TextField from '@mui/material/TextField';

const SearchBar = ({ placeholderText, data, onSongSelect }) => {
  let songsArr = [];
  //console.log(data)

  data.map((item) => {
    //console.log(item);
    if (item && item.songs) {
      const songTitles = item.songs.map((song) => song.title);
      songsArr.push(...songTitles);
    }
    return songsArr;
  });

  //console.log(songsArr)

  const handleSongSelect = (selectedValue) => {
    const selectedSong = data
      .flatMap((item) => item.songs)
      .find((song) => song.title === selectedValue);

    onSongSelect(selectedSong);
  };

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={songsArr}
      renderInput={(params) => (
        <div>
          <TextField
            {...params}
            label={placeholderText}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            sx={{ width: "20rem", borderBottom: "1px solid black", borderLeft: "1px solid black", borderRight: "1px solid black", borderRadius: "4px 0 0 4px"}}
          />
          <button style={{height: "3.55rem", width: "3.5rem", background: "transparent", border: "1.5px solid black", borderRadius: "0 4px 4px 0"}}><SVG /></button>
        </div>
      )}
      onChange={(event, value) => handleSongSelect(value)}
    />
    </div>
  );
};


export default SearchBar;

// import React, { useState } from "react";
// import "./search.css";
// import { ReactComponent as SVG } from "../../assets/searchIcon.svg";

// const SearchBar = ({ placeholderText, data }) => {
// const [val, setVal] = useState("");
// const onSubmit = (eve) => {
//   eve.preventDefault();
// };

// const changeHandler = (event) => {
//   setVal(event.target.value)
//   //console.log(event.target.value)
// }

//   return (
//     <form className="wrapper" onSubmit={onSubmit}>
//       <input
//         className="searchbar"
//         type="text"
//         placeholder={placeholderText}
//         required
//         value={val}
//         onChange={changeHandler}
//       />
//       <div className="rectangle">
//         <button className="center" type="submit">
//           <SVG />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;
