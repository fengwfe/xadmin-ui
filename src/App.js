import React from "react";
import "./App.css";
import SignIn from "./views/SignIn";
import AppLayout from "./components/AppLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route component={AppLayout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
