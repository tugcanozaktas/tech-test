import React, {useState} from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages.js";
import PropTypes from "prop-types";

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState(null);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const imageLinks = await getImages(value);
      setSearchResults(imageLinks);
    }
  return(
    <div className="Search">
      <form onSubmit={handleSubmit} className="search-form">
        <input className="search-input" type="text" onChange={(e) => setValue(e.target.value)}/>
        <button className="search-btn" type="submit">Go!</button>
      </form>
    </div>
  )
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;