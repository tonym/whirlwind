import { JssOptions } from 'jss';
import preset from 'jss-preset-default';

const defaultJssPlugins = preset();

export const defaultJssOptions: JssOptions = {
  ...defaultJssPlugins
};
