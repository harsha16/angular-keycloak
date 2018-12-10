import { AngularKeycloakPage } from './app.po';

describe('angular-keycloak App', function() {
  let page: AngularKeycloakPage;

  beforeEach(() => {
    page = new AngularKeycloakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
