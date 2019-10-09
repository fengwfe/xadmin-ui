import React from "react";
import "./App.css";
import SignIn from "./views/SignIn";
import Admin from "./components/Admin";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/admin" component={Admin} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
