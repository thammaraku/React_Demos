import React from "react";

import BootstrapJumbotron from "./components/BootstrapJumbotron";
import BootstrapNavbar from "./components/BootstrapNavbar";
import BootstrapCard from "./components/BootstrapCard";

function App() {
  return <>

    <div className="container">
      <BootstrapNavbar />
      <BootstrapJumbotron />
      <BootstrapCard />

    </div>



  </>;
}

export default App;
