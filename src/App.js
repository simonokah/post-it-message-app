import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import SignUpForm from "./Component/SignUpForm";
import Dashboard from "./homepage/Dashboard";
import Create from "./CreateChannel/Create";
import AddPeople from "./Component/AddPeople";

class App extends Component {
  state = {
    modalOpen: false,
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };
  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path={"/signUpForm"} component={SignUpForm} />
          <Route exact path='/homepage' component={Dashboard} />
          <Route exact path='/createchannel' component={Create} />
          <Route
            exact
            path='/messageBoard/:groupId'
            render={() => <Dashboard />}
          />
        </Switch>
        <Route
          path='/addPeople'
          render={() => (
            <AddPeople
              closeModal={this.closeModal}
              openModal={this.openModal}
              modalOpen={this.state.modalOpen}
            />
          )}
        />
      </Fragment>
    );
  }
}

export default App;
