const setPosition = (position) => {
  return {
    type: "SET_POSITION",
    payload: position,
  };
};

export default { setPosition };
