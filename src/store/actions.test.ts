import { StyleSheetFactoryOptions } from 'jss';
import { addSheet } from './actions';
import { ADD_SHEET, StyleSheet } from '../types/index';
import createStylesheet from '../styles/createStylesheet/index';

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
});
