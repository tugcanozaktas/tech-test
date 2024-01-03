import React, { useState } from 'react';
import '../styles/App.css';
import Search from './Search.js';
import SearchResults from './SearchResults.js';

function App() {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="App">
      <img className='nasa-logo' src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt='nasa logo'/>
      <Search setSearchResults={setSearchResults} className="search-box" />
      {!searchResults ? <p>Search...</p> : searchResults && searchResults.length > 0 ? <SearchResults searchResults={searchResults} /> : <p>No Results</p>}
    </div>
  );
}

export default App;
