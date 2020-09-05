import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { getGroupName } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Groups = ({ groupData2 }) => {
  return (
    <div className='group'>
      <List>
        {groupData2.map((group, index) => (
          <Link key={index} to={`/messageBoard/${group.id}`}>
            <ListItem key={index}>
              <ListItemText primary={group.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.groupData,
    groupData2: state.groupData2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGroupName: (groupName) => dispatch(getGroupName(groupName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
