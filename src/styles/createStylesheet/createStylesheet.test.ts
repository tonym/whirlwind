import createStylesheet from './createStylesheet';

const styles = {
  body: {
    margin: 'auto'
  }
};

const stylesheet = createStylesheet(styles);

const styleRule = stylesheet.getRule('body');

describe('createStylesheet', () => {
  it('should create', () => {
    expect(stylesheet).toBeTruthy();
  });

  it('should create valid CSS from JSS', () => {
    expect(styleRule.toString()).toMatch('margin: auto;');
  });
});
