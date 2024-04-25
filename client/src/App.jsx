import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import SearchResultsList from "./components/SearchResultsList";
const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div style={{ backgroundColor: '#E8E8E8'}}>
      <div className="w-full p-6">
        <Navbar />
        <Search results={searchResults} setSearchResults={setSearchResults} />
        <Outlet />
      </div>
    </div>
  );
};
export default App
