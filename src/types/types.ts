import { StyleSheet as StyleSheetJSS } from 'jss';

export interface Theme {}

export const ADD_SHEET = 'ADD_SHEET';

export type StyleSheet = StyleSheetJSS;

export type Sheet<K extends keyof any, StyleSheet> = { [P in K]: StyleSheet };

interface AddSheetAction {
  type: typeof ADD_SHEET;
  sheet: Sheet<string, StyleSheet>;
}

export type ActionTypes = AddSheetAction;

export interface State {
  sheets: Sheet<string, StyleSheet>;
  theme: Theme;
}
