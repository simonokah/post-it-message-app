import React, { Component } from "react";
import SignInForm from "./SignInForm";

export default class LandingPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row d-flex justify-space-between'>                    
            <SignInForm />
        </div>
      </div>
    );
  }
}
