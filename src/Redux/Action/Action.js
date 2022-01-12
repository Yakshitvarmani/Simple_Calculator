export let addPost = a => {
  return async dispatch => {
    let data = a;
    dispatch({
      type: "FETCH",
      payload: data,
    });
  };
};
