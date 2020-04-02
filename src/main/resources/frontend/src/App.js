//REACT
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS/SASS
import "./sass/style.scss";

// PAGES
import LandingPage from "./Pages/LandingPage";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ResidenceDetailsPage from "./Pages/ResidenceDetailsPage";

// CONTEXTPROVIDERS
import ResidenceContextProvider from "./contexts/ResidenceContextProvider";
import ImageContextProvider from "./contexts/ImageContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";

// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  let menu = [
    { label: "Home", route: "/" },
    { label: "Explore", route: "/explore" },
    { label: "About", route: "/about" },
  ];

  return (
    <div className="App">
      <UserContextProvider>
        <ResidenceContextProvider>
          <ImageContextProvider>
            <Router>
              <Header menuData={menu}/>
              <main className="mt-4">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/explore" component={Explore}/>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/account-login" component={Login} />
                  <Route path="/details/residence_id=:id?" component={ResidenceDetailsPage} />
                  <Route exact path="/explore/destination=:destination?&guests=:numberofguests?"
                    key={window.location.pathname} component={Explore}/>
                </Switch>
              </main>
              <Footer className="footer" />
            </Router>
          </ImageContextProvider>
        </ResidenceContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
