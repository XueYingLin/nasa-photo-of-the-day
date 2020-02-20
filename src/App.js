import React from "react";
 // PostPage from "PostPoge";
import "./App.css";
import Title from "./components/HeaderSection/Title";
import SearchBar from "./components/HeaderSection/SearchBar";
import PostPage from "./components/PostsContainer/PostPage";
// import PageGuide from "./components/PostsContainer/PageGuide";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
        <Title />
        <SearchBar />
        {/* <PageGuide /> */}
        <PostPage />
      
    </div>
  );
}

export default App;
