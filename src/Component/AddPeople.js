import React, { Fragment } from 'react'

export default function AddPeople({openModal, closeModal, modalOpen}) {
    return (
        <Fragment>           
            <span onClick={openModal}>add people </span>
            {!modalOpen ? null :        
                <div className="searchAreaDiv">
                    <h1>Add people goes in here</h1>
                    <input type="text" id="searchArea" placeholder="Search Here  to add people" value=""/>
                    <button className="btn btn-primary" onClick={closeModal}>Add Member</button>
                </div>
            }           
        </Fragment>
    )
}

