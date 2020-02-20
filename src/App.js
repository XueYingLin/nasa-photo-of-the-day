import React from "react";
 // PostPage from "PostPoge";
import "./App.css";
import Title from "./components/HeaderSection/Title";
import SearchBar from "./components/HeaderSection/SearchBar";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        <Title />
        <SearchBar />
      </p>
    </div>
  );
}

export default App;
