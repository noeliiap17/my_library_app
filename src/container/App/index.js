import React from "react";
import "./App.css";
import Link from "../../component/Link";

const App = () => {
  return (
    <div className="App">
      <p>My react app</p>
      <Link to="/about" className="App-link">
        <p>About</p>
      </Link>
    </div>
  );
};

export default App;
