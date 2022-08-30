import { Styles } from '../../types/index';
import createStyles from './createStyles';

describe('createStyles', () => {
  it('should return what it was provided', () => {
    const styles: Styles = createStyles({ body: { margin: 'auto' } });
    expect(styles).toEqual({ body: { margin: 'auto' } });
  });
});
