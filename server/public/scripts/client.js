myApp = angular.module("myApp", []);

myApp.controller('InputController', ['$scope', 'MovieListFactory', function($scope, mList) {
     $scope.addMovieData = mList.addMovieData;
}]);

myApp.controller('OutputController', ['$scope', 'MovieListFactory',  function($scope, MovieList){
    $scope.movieSet = MovieList.movieSet;
}]);

myApp.factory('MovieListFactory', [function() {

//set the movieSet array
  var movieSet = [];
//grab all the information and set it as the thisMovie array
  var addMovieData = function(data) {
    var thisMovie = {
      name: data.name,
      desc: data.desc,
      director: data.director,
      duration: data.duration
    };
    movieSet.push(thisMovie);
  };
  return {
    movieSet: movieSet,
    addMovieData: addMovieData
  };
}]);
