myApp = angular.module("myApp", []);

myApp.controller('InputController', ['$scope', 'MovieList', function($scope, MovieList) {
  // console.log("testing");

     $scope.addMovieData = MovieList.addMovieData;

  // //$scope.movie = MovieList.movie;
}]);


//
// myApp.controller('OutputController', ['$scope', 'MovieList',  function($scope, MovieList){
// $scope.movieSet = MovieList.movieSet;


// }]);

myApp.factory('MovieList', [function() {


var movie = {
  name: '',
  desc: '',
  director: '',
  duration: ''

};
//add them from input
var movieSet = [];

var addMovieData = function(data) {
  var thisMovie = {
    name: data.name,
    desc: data.desc,
    director: data.director,
    duration: data.duration
  };
console.log('this movie' + thisMovie);
  movieSet.push(thisMovie);
  console.log('add this' + movieSet);
};

return {
  movie: movie,
  movieSet: movieSet,
  addMovieData: addMovieData



};
 }]);
