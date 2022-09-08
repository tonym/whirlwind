import defaultTheme from '../defaultTheme/index';
import { Theme, ThemeOptions } from '../../types/index';

const deepmerge = require('deepmerge');

export default function createTheme(userTheme: ThemeOptions = {}): Theme {
  const palette = deepmerge(defaultTheme.palette, userTheme.palette);
  const shape = userTheme.shape ? { ...userTheme.shape } : { ...defaultTheme.shape };

  return { palette, shape };
}
