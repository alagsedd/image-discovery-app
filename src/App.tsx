import { useState } from "react";
import NavBar from "./Components/NavBar";
import Filter from "./Components/FIlter";
import IntroText from "./Components/IntroText";
import Body from "./Components/Body";

const App = () => {
  const [search, setSearch] = useState("");

  const handleSearchGame = (search: string) => {
    setSearch(search);
  };

  const handleSelectSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <>
      <div className="nav">
        <NavBar onSearchGame={handleSearchGame} />
      </div>
      <div className="filter">
        <IntroText />
        <Filter onSelectSearch={handleSelectSearch} />
      </div>
      <div className="main">
        <Body search={search} />
      </div>
    </>
  );
};

export default App;
