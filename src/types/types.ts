import * as CSS from 'csstype';
import { Styles as StylesJSS, StyleSheet as StyleSheetJSS } from 'jss';

type JSSNormalCssProperties = CSS.Properties<number | string>;
type JSSFontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };

export interface BaseCSSProperties extends JSSNormalCssProperties {
  '@font-face'?: JSSFontface | JSSFontface[];
}

export interface CSSProperties extends BaseCSSProperties {
  [key: string]: unknown | CSSProperties;
}

export type Styles = StylesJSS | CSSProperties;

export type StyleSheet = StyleSheetJSS;

export interface Theme {}

export const ADD_SHEET = 'ADD_SHEET';

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
