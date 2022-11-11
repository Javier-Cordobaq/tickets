import {
  SET_USER
} from "../actions/index";

const inicialState = {
  user: null
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
     case SET_USER: {
       return {
         ...state,
         user: action.payload
       }
     }
    default:
      return state;

  }
};

export default rootReducer;
