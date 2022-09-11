import { StyleSheet, StyleSheetFactoryOptions } from 'jss';
import { reducer, initialState } from './reducer';
import { ActionTypes, ADD_SHEET, SET_THEME } from '../types/index';
import createStylesheet from '../styles/createStylesheet/index';

describe('Reducer', () => {
  it(`should add a sheet to state from an ${ADD_SHEET} action`, () => {
    const options: StyleSheetFactoryOptions = {
      meta: 'Styles'
    };
    const stylesheet: StyleSheet = createStylesheet({}, options);
    const key = options.meta || '';
    const sheet = { [key]: stylesheet };
    const action: ActionTypes = { type: ADD_SHEET, sheet };
    const newState = reducer(initialState, action);
    const sheetInStore = newState.sheets[key];
    expect(sheetInStore).toEqual(stylesheet);
  });

  it(`it should add a theme to state from a ${SET_THEME} action`, () => {
    const { theme } = initialState;
    theme.palette = { ...theme.palette };
    const action: ActionTypes = {
      type: SET_THEME,
      theme: theme
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ ...initialState, theme: theme });
  });
});
