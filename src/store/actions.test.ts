import { StyleSheetFactoryOptions } from 'jss';
import { addSheet, setTheme } from './actions';
import { initialState } from './reducer';
import { ADD_SHEET, SET_THEME, StyleSheet } from '../types/index';
import createStylesheet from '../styles/createStylesheet/index';

const { theme } = initialState;
const options: StyleSheetFactoryOptions = {
  meta: 'Styles'
};
const stylesheet: StyleSheet = createStylesheet({}, options);

describe('Actions', () => {
  it(`should create an ${ADD_SHEET} action`, () => {
    const key = options.meta || '';
    const sheet = { [key]: stylesheet };
    const action = addSheet(sheet);
    expect(action).toEqual({ type: ADD_SHEET, sheet });
  });

  it(`should create a ${SET_THEME} action`, () => {
    const action = setTheme(theme);
    expect(action).toEqual({ type: SET_THEME, theme: theme });
  });
});
