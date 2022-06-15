import React from "react";
import Router from "./Router/Router";
import GlobalState from "./Global/GlobaState";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};

export default App;
