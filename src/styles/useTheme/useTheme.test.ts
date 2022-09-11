import useTheme from './useTheme';
import { initialState } from '../../store/index';

describe('useTheme', () => {
  it('should return a theme', () => {
    const theme = useTheme();
    expect(theme).toEqual(initialState.theme);
  });
});
