
import * as types from "../type";
/**
 * @description this function consists sequence of actions which assists the reducers
 * @param {string} data 
 */
export const updateHistory = (data) => ({
  type: types.HISTORY,
  payload: data
});


