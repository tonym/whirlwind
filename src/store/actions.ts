import { ActionTypes, ADD_SHEET, SET_THEME, Sheet, StyleSheet, Theme } from '../types/index';

export function addSheet(sheet: Sheet<string, StyleSheet>): ActionTypes {
  return { type: ADD_SHEET, sheet };
}

export function setTheme(theme: Theme): ActionTypes {
  return { type: SET_THEME, theme };
}
