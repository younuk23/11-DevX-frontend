import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Falcon9 from "./Pages/falcon9/Falcon9";
import Main from "./Pages/main/Main";
import Shop from "./Pages/shop/Shop";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/falcon9" component={Falcon9} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;