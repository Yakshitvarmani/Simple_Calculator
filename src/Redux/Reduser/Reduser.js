let initialState = {
  val: [0],
};

export let reduser = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, val: action.payload };

    default:
      return state;
  }
};
