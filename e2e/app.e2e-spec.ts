import { MyWebSitePage } from './app.po';

describe('my-web-site App', function() {
  let page: MyWebSitePage;

  beforeEach(() => {
    page = new MyWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
