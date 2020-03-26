import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./sass/style.scss";
import LandingPage from "./Pages/LandingPage";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ResidenceContextProvider from "./contexts/ResidenceContextProvider";


function App() {
  let menu = [
    { label: "Home", route: "/" },
    { label: "Explore", route: "/explore" },
    { label: "About", route: "/about" },
    { label: "Log In", route: "/login" }
  ];

  let userIsLoggedIn = false;

  return (
    
    <div className="App">
      <ResidenceContextProvider>
      <Router>
        <Header menuData={menu} userIsLoggedIn={userIsLoggedIn}/>
        <main className="mt-4">
          {/* <Router> */}
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </main>
        <Footer className="footer"/>
      </Router>
      </ResidenceContextProvider>
  </div>
  );
}

export default App;
