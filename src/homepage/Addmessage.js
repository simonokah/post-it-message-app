import React from "react";
import { connect } from "react-redux";
import InputMessageBox from "../Component/InputMessageBox";
import MessageBoard from "../Component/MessageBoard";

const Addmessage = ({ groupId }) => {
  return (
    <div className='scroll-bar'>
      <MessageBoard groupId={groupId} />
      <InputMessageBox />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dummyMessages: state.dummyMessages,
  };
};

export default connect(mapStateToProps)(Addmessage);
