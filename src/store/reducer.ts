import { ActionTypes, ADD_SHEET, State } from '../types/index';

const initialState = {
  sheets: {}
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ADD_SHEET:
      const sheets = { ...state.sheets, ...action.sheet };
      return { ...state, sheets: sheets };
    default:
      return state;
  }
}
