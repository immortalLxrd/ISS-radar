const setMembers = (members) => {
  return {
    type: "SET_MEMBERS",
    payload: members,
  };
};

export default { setMembers };
