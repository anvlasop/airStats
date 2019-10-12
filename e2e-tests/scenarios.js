'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /isolation when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/isolation");
  });


  describe('isolation', function() {

    beforeEach(function() {
      browser.get('index.html#!/isolation');
    });


    it('should render isolation when user navigates to /isolation', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('anonymization', function() {

    beforeEach(function() {
      browser.get('index.html#!/anonymization');
    });


    it('should render anonymization when user navigates to /anonymization', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
