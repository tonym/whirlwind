import { StyleSheet } from 'jss';

export const ADD_SHEET = 'ADD_SHEET';

export type Sheet<K extends keyof any, StyleSheet> = { [P in K]: StyleSheet };

interface AddSheetAction {
  type: typeof ADD_SHEET;
  sheet: Sheet<string, StyleSheet>;
}

export type ActionTypes = AddSheetAction;

export type Svg = { [k: string]: string };

export interface State {
  sheets: Sheet<string, StyleSheet>;
}
