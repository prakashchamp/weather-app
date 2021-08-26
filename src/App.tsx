import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { CityDetailsPage } from "./pages/cityDetailsPage/cityDetailsPage";
import { ErrorPage } from "./pages/errorPage/errorPage";
import { HomePage } from "./pages/homePage/home";
import { PageNotFound } from "./pages/pageNotFound/pageNotFound";

function App() {
  return (
    <div data-testid="App" className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/city/:id" component={CityDetailsPage} />
        <Route exact path="/contact" component={ErrorPage} />
        <Route path="**" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
