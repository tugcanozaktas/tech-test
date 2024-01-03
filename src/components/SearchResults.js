import React from "react";
import "../styles/SearchResults.css"

const SearchResults = ({searchResults}) =>{

  return (
    <>
      <p><b><i>Search Results</i></b></p>
      <div className="search-results">
        {searchResults.map((link, index) => (
          <img key={index} className="image-card"  src={link} alt="spaceImage" />))}
        
      </div>
    </>
  )
};

export default SearchResults;