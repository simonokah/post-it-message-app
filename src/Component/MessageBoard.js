import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

function MessageBoard(props) {
  const [found, setFound] = useState(false);
  const [groupSelected, setGroupSelected] = useState({});
  const { dummyMessages, groupData2, groupId, newMessage } = props;
  const postRef = useRef(null);

  useEffect(() => {
    const filteredGroup = groupId
      ? groupData2.find(({ id }) => id === groupId)?.data
      : dummyMessages;
    if (filteredGroup) {
      const selected = newMessage
        ? filteredGroup.concat(newMessage)
        : filteredGroup;

      setGroupSelected(selected);
      setFound(true);
    } else {
      setFound(false);
    }
  }, [groupId, groupData2, dummyMessages, newMessage]);

  useEffect(() => {
    postRef.current.scrollTo(0, postRef.current.scrollHeight);
  }, [groupSelected.length]);

  return (
    <Fragment>
      <div className='compo-1' ref={postRef}>
        {found ? (
          <>
            {groupSelected.map((member, index) => (
              <div className='post' key={index}>
                <Chip
                  avatar={
                    <Avatar alt='Memeber-profile' src={member.memberAvatar} />
                  }
                  label={member.memberName}
                />
                <p>{member.message}</p>
              </div>
            ))}
          </>
        ) : (
          <h2>Not Found!!</h2>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    dummyMessages: state.dummyMessages,
    groupData2: state.groupData2,
    newMessage: state.newMessage,
  };
};

export default connect(mapStateToProps)(MessageBoard);
