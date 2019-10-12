'use strict';

describe('myApp.isolation module', function() {

  beforeEach(module('myApp.view1'));

  describe('isolation controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});