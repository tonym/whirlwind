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

export const ADD_SHEET = 'ADD_SHEET';
export const SET_THEME = 'SET_THEME';

export type Sheet<K extends keyof any, StyleSheet> = { [P in K]: StyleSheet };

interface AddSheetAction {
  type: typeof ADD_SHEET;
  sheet: Sheet<string, StyleSheet>;
}

interface SetThemeAction {
  type: typeof SET_THEME;
  theme: Theme;
}

export type ActionTypes = AddSheetAction | SetThemeAction;

export interface State {
  sheets: Sheet<string, StyleSheet>;
  theme: Theme;
}

export interface PaletteColor {
  alternate: string;
  color: string;
  hover: string;
}

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
}

export interface PaletteOptions {
  primary?: Partial<PaletteColor>;
  secondary?: Partial<PaletteColor>;
}

export interface Shape {
  borderRadius: string | number;
}

export interface Theme {
  palette: Palette;
  shape: Shape;
}

export interface ThemeOptions {
  palette?: PaletteOptions;
  shape?: Shape;
}
