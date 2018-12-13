import { CssModule } from './css.module';

describe('CssModule', () => {
  let cssModule: CssModule;

  beforeEach(() => {
    cssModule = new CssModule();
  });

  it('should create an instance', () => {
    expect(cssModule).toBeTruthy();
  });
});
