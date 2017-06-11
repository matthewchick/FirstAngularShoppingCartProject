import { AngularShoppingcartPage } from './app.po';

describe('angular-shoppingcart App', () => {
  let page: AngularShoppingcartPage;

  beforeEach(() => {
    page = new AngularShoppingcartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
