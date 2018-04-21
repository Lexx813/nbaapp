import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../components/Home/HomePage";

import Layout from "../hoc/Layout/Layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route to="/" exact component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
