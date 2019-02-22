import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutManager from "./components/LayoutManager";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <LayoutManager>
            <Routes />
          </LayoutManager>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
