import {
  groupData,
  users,
  dummyMessages,
  data,
  groupData2,
} from "../Data/Data";

const initialState = {
  groupData,
  groupData2,
  users,
  dummyMessages,
  userTypedMessage: "",
  data,
  selectedGroup: null,
  newMessage: [],
  valueReset: "",
};

const UserReducer = (state = initialState, action) => {
  const newstate = { ...state };

  if (action.type === "GET_MESSAGE") {
    newstate.userTypedMessage = action.message;
  }

  if (action.type === "POST_MESSAGE") {
    const newGroupData2 = newstate.groupData2.map((grp) => {
      let grpMap = grp;
      if (grpMap.id === action.payload.groupId) {
        const newData = {
          id: `${grpMap.data.length + 1}`,
          ...action.payload,
        };
        grpMap.data = [...grpMap.data, newData];
      }
      console.log(grpMap);
      return grpMap;
    });
    newstate.groupData2 = newGroupData2;
    newstate.userTypedMessage = "";
  }

  if (action.type === "GET_GROUP_NAME") {
    console.log("Action NAme", action.groupName);
  }

  return newstate;
};

export default UserReducer;
