import * as type from "../type";
  
  const initialState = {
    history:[]
  };
  /**
 * @description this function works according to the given actions
 * @param {initialState, action}  
 * @return {state, history:action.payload} 
 */
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
  