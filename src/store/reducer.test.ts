import { StyleSheet, StyleSheetFactoryOptions } from 'jss';
import { reducer, initialState } from './reducer';
import { ActionTypes, ADD_SHEET } from '../types/index';
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
});
