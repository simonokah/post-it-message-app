import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getTypedMessage, postMessage } from "../actions";

const InputMessageBox = (props) => {
  const { groupId } = useParams();
  const handleTypedMessage = (input) => {
    props.getTypedMessage(input);
  };

  const handlePostMessage = (userInput) => {
    const newMessage = {
      message: userInput,
      memberName: "Test User",
      memberAvatar:
        "https://ui-avatars.com/api/?name=DY&background=fc0&color=000",
      groupId,
    };
    props.postMessage(newMessage);
  };

  return (
    <Fragment>
      <form className='addmessage'>
        <div className='medialine'>
          <input
            type='text'
            className='form-control'
            placeholder='Type your message here...'
            aria-label='Type your message here...'
            aria-describedby='basic-addon'
            onChange={(e) => handleTypedMessage(e.target.value)}
            value={props.userTypedMessage}
          />
          <button
            className='input-group-text'
            id='basic-addon'
            onClick={(e) => {
              e.preventDefault();
              handlePostMessage(props.userTypedMessage);
            }}
          >
            <span>
              <i className='fa fa-paper-plane'></i>
            </span>
          </button>
          <button className='input-group-text' id='basic-addon'>
            <span>
              <i className='fa fa-paperclip'></i>
            </span>
          </button>
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
    groupData: state.groupData,
    dummyMessages: state.dummyMessages,
    userTypedMessage: state.userTypedMessage,
    valueReset: state.valueReset,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTypedMessage: (typedMessage) => dispatch(getTypedMessage(typedMessage)),
    postMessage: (newMessage) => dispatch(postMessage(newMessage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMessageBox);
