import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide";


export default function RightSide() {
  return (
    <Fragment>
    <LeftSide />
    <div className='col-lg-6 landingRight'>
      <form action='' className='form-div'>
        <div>
          <input
            type='text'
            placeholder='Firstname'
            name='firstname'
            id='firstname'
            autoComplete='off'
          />
          <br />
          <input
            type='text'
            placeholder='Lastname'
            name='lastname'
            id='lastname'
            autoComplete='off'
          />
          <br />
          <input
            type='email'
            placeholder='Email'
            name='email'
            id='email'
            autoComplete='on'
          />
          <br />
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password'
            autoComplete='off'
          />
        </div>
        <div className='below-input'>
          <div className='below-input-right'>
            <input type='checkbox' />
            Remember me
          </div>
          <Link to=''>Forgot Password</Link>
        </div>
        <button className='login'>Sign In</button>
        <button className='google-signIn' id='login'>
          Sign In with Google
        </button>
      </form>
      <div className='dontHaveAccount'>
        <p>
          Dont have an account? <Link to='/'>Sign In</Link>
        </p>
      </div>
    </div>
    </Fragment>
  );
}
