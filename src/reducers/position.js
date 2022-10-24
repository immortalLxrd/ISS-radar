const initialState = { lat: 0, lng: 0 };

const position = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSITION":
      return { ...action.payload };
    default:
      return state;
  }
};

export default position;
