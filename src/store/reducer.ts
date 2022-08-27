import { ActionTypes, ADD_SHEET, State } from '../types/index';

export const initialState: State = {
  sheets: {}
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case ADD_SHEET:
      const sheets = { ...state.sheets, ...action.sheet };
      return { ...state, sheets: sheets };
    default:
      return state;
  }
}
