export class MaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('material-app h1')).getText();
  }
}
