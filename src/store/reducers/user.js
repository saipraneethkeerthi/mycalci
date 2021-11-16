import * as type from "../type";
  
  const initialState = {
    history:[]
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case type.HISTORY:
        return {
          ...state,
          history:action.payload
        };
      
  
      default:
        return state;
    }
  }
  