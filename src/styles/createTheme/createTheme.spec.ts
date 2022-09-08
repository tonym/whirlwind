import createTheme from './createTheme';
import { ThemeOptions } from '../../types/index';

describe('createTheme', () => {
  it('should return the default theme if no options provided', () => {
    const theme = createTheme();
    const expectedTheme = createTheme({});
    expect(theme).toEqual(expectedTheme);
  });

  it('should return a theme with updated palette', () => {
    const themeOptions: ThemeOptions = {
      palette: {
        primary: {
          color: '#9b9b9b'
        }
      }
    };
    const theme = createTheme(themeOptions);
    const localTheme = createTheme();
    localTheme.palette.primary.color = '#9b9b9b';
    expect(theme).toEqual(localTheme);
  });

  it('should return a theme with an updated shape', () => {
    const themeOptions: ThemeOptions = {
      shape: {
        borderRadius: 6
      }
    };
    const theme = createTheme(themeOptions);
    expect(theme.shape).toEqual(themeOptions.shape);
  });
});
