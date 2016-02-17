(function(){

angular
  .module("app")
  .controller("DonutChartController", DonutChartController)

  DonutChartController.$inject = ["$scope", "$window"];

  function DonutChartController($scope, $window){
    var myData = [];
    // $scope.charts = d3.range(10).map(function(){
    //   return d3.range(10).map(Math.random)
    // })

    // $scope.shared = {
    //   ourData: d3.range(10).map(Math.random)
    //   }
    $scope.myData = [25, 25, 25, 25, 25, 25, 25];
    $scope.choices = [{id: 'choice1'}, {id: 'choice2'}, {id: 'choice3'}];

    $scope.addNewChoice = function() {
       var newItemNo = $scope.choices.length+1;
       $scope.choices.push({'id':'choice'+newItemNo});
    };

    $scope.showAddChoice = function(choice) {
      return choice.id === $scope.choices[$scope.choices.length-1].id;
    };

    $scope.submit = function(){
      $scope.myData = [];
      for (var i = $scope.choices.length - 1; i >= 0; i--) {
        if($scope.choices[i].value !== undefined){
          $scope.myData.push(parseInt($scope.choices[i].value));
        }
      }
      console.log($scope.myData);
    }

    // $scope.myData = {
    //   dataPoints: myData
    // }

    // $scope.ourData = d3.range(10).map(Math.random);
    angular.element($window).on('resize', function(){
      $scope.$apply();
    })

  }

})();
