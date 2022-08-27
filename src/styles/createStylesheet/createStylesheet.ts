import jss, { Styles, StyleSheetFactoryOptions } from 'jss';
import { StyleSheet } from '../../types/index';
import { defaultJssOptions } from '../defaultTheme/index';

export default function createStylesheet(
  styles: Styles,
  options: StyleSheetFactoryOptions = {}
): StyleSheet {
  jss.setup(defaultJssOptions);
  return jss.createStyleSheet(styles, options);
}
