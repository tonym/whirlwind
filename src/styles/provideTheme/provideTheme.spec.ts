import provideTheme from './provideTheme';
import useTheme from '../useTheme/index';
import { ThemeOptions } from '../../types/index';
import createTheme from '../createTheme/index';

describe('provideTheme', () => {
  it('should provide a theme', () => {
    provideTheme();
    const providedTheme = useTheme();
    const expectedTheme = createTheme();
    expect(providedTheme).toEqual(expectedTheme);
  });

  it('should provide a theme from theme options', () => {
    const themeOptions: ThemeOptions = {
      shape: {
        borderRadius: 6
      }
    };
    provideTheme(themeOptions);
    const providedTheme = useTheme();
    const expectedTheme = createTheme(themeOptions);
    expect(providedTheme).toEqual(expectedTheme);
  });

  it('should provide a theme from an array of theme options', () => {
    const themeOptions: ThemeOptions[] = [];
    themeOptions.push({
      shape: {
        borderRadius: 12
      }
    });
    themeOptions.push({
      shape: {
        borderRadius: 6
      }
    });
    const mergedThemeOptions: ThemeOptions = {
      shape: {
        borderRadius: 6
      }
    };
    provideTheme(themeOptions);
    const providedTheme = useTheme();
    const expectedTheme = createTheme(mergedThemeOptions);
    expect(providedTheme).toEqual(expectedTheme);
  });
});
