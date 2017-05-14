import { Ng4TypescriptExperimentPage } from './app.po';

describe('ng4-typescript-experiment App', () => {
  let page: Ng4TypescriptExperimentPage;

  beforeEach(() => {
    page = new Ng4TypescriptExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
