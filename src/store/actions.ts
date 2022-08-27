import { ActionTypes, ADD_SHEET, Sheet, StyleSheet } from '../types/index';

export function addSheet(sheet: Sheet<string, StyleSheet>): ActionTypes {
  return { type: ADD_SHEET, sheet };
}
