import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootreduser } from "./../Reduser/RootReduser";

export let store = createStore(
  rootreduser,
  composeWithDevTools(applyMiddleware(thunk))
);
