import React from "react";
import "./App.css";
import { MainScreenComponent } from "./container/mainScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MeetingComponent } from "./exampleComponent/simpleDyteClient";
import { CustumLayoutButton } from "./exampleComponent/custumLayoutButton";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={MainScreenComponent} />
          <Route
            path="/simple-dyte-client/meeting/:id"
            component={MeetingComponent}
          />
          <Route
            path="/custum-layout-button/meeting/:id"
            component={CustumLayoutButton}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
