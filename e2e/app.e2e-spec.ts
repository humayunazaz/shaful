import { ShafulPage } from './app.po';

describe('shaful App', function() {
  let page: ShafulPage;

  beforeEach(() => {
    page = new ShafulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
