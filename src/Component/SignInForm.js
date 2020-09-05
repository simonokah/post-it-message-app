import React, {Component, Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import LeftSide from "./LeftSide";
import { login } from "../actions"
import { connect } from "react-redux"

 class RightSide extends Component {


  render() {
    return (
      <Fragment>      
      <LeftSide />
      <div className='col-lg-6 landingRight'>
        <form action='' className='form-div'>
          <div>
            <input
              type='email'
              placeholder='Email'
              name='email'
              id='email'
              autoComplete="off"
            />
            <br />
            <input
              type='password'
              placeholder='Password'
              name='password'
              id='password'
              autoComplete="off"
            />
          </div>
          <div className='below-input'>
            <div className='below-input-right'>
              <input type='checkbox' />
              Remember me{" "}
            </div>
            <Link to={""}>Forgot Password</Link>
          </div>
          <button className='login' onClick={()=> this.props.history.push("/homepage")}>Sign In</button>
          <button className='google-signIn' id='login'>
            Sign In with Google
          </button>
        </form>
        <div className='dontHaveAccount'>
          <p>
            Dont have an account? <Link to={"/signUpForm"}> Sign Up</Link>
          </p>
        </div>
      </div>
      </Fragment>
  );
  }
}

export default withRouter(RightSide)