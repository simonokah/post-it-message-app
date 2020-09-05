export const getTypedMessage = (message) => {
  return {
    type: "GET_MESSAGE",
    message: message,
  };
};

export const postMessage = (message) => {
  return {
    type: "POST_MESSAGE",
    payload: message,
  };
};

export const selectedGroup = (groupData, dispatch) => {
  console.log(groupData, dispatch);
  dispatch({
    type: "SELECTED_GROUP",
    payload: groupData,
  });
};

export const openGroup = (groupName) => {
  return {
    type: "OPEN_GROUP",
    groupName: groupName,
  };
};

export const getGroupName = (groupName) => {
  return {
    type: "GET_GROUP_NAME",
    groupName: groupName,
  };
};

