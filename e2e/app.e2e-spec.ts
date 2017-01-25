import { ShivpalPage } from './app.po';

describe('shivpal App', function() {
  let page: ShivpalPage;

  beforeEach(() => {
    page = new ShivpalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
