import { ActionTypes, ADD_SHEET, SET_THEME, State } from '../types/index';

export const initialState: State = {
  sheets: {},
  theme: {
    palette: {
      primary: {
        alternate: '#397B91',
        color: '#1b3b46',
        hover: '#1C2852'
      },
      secondary: {
        alternate: '#F7E3CD',
        color: '#AB9D8E',
        hover: '#B98F62'
      }
    },
    shape: {
      borderRadius: '16px'
    }
  }
};

export function reducer(state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ADD_SHEET:
      const sheets = { ...state.sheets, ...action.sheet };
      return { ...state, sheets: sheets };
    case SET_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}
