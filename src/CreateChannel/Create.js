import React from "react";
import { Link } from "react-router-dom";

export const Create = () => {
  return (
    <div className='container-form'>
      <h1>Create New Group</h1>
      <form>
        <div className='row'>
          <div className='col-75'>
            <input type='text' placeholder='Group Name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <input type='text' placeholder='Group Description' />
          </div>
        </div>
        <div className='row'>
          {/* <span><i class="fa fa-user-plus"></i></span> */}
          <div className='right'>
            <Link to='/' className='lnk'>
              Add People
            </Link>
            <input type='submit' value='Create Group' />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Create;
