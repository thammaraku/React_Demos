import React from "react";

// remove old way to route
// import PortfolioContainer from "./components/PortfolioContainer";

//Try convert to a better solution by using router
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

// convert const App to function router
// const App = () => <PortfolioContainer />;

function App() {

    return (
        //Output from Router
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;
