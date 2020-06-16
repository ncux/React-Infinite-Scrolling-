import React from 'react';
import './App.css';
import { Search } from "./components/search/search";
import { Results } from "./components/results/results";
import { LoadingOrError } from "./components/loading-or-error/loading-or-error";

function App() {
  return (
    <div className="App">
      <Search />
      <Results />
      <LoadingOrError />
    </div>
  );
}

export default App;
