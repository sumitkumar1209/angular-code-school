(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController',['$http',function($http){
    var store = this;
    $http.get('/store-products.json').success(function(data){
    store.products=data;
    });
    store.products = [];
    
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();