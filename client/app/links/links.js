angular.module('shortly.links', [])
.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links:[]
  };

  $scope.getLinks = Links.getLinks;
  $scope.getLinks()
    .then(function(response){
      $scope.data.links = response.data;
    });
  // then(function(links){
  //   console.log(links);
  //   $scope.data.links = links;
  // });
    // $scope.getLinks = function () {
    //   Links.getLinks()
    //     .then(function (token) {
    //       $window.localStorage.setItem('com.shortly', token);
    //       $location.path('/links');
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // };
});


/*
it('should have a data property on the $scope', function () {
    createController();
    expect($scope.data).to.be.an('object');
  });

  it('should have a getLinks method on the $scope', function () {
    createController();
    expect($scope.getLinks).to.be.a('function');
  });
  it('should call getLinks() when controller is loaded', function () {
    var mockLinks = [{},{},{}];
    $httpBackend.expectGET("/api/links").respond(mockLinks);
    createController();
    $httpBackend.flush();
    expect($scope.data.links).to.eql(mockLinks);
  });
});
*/