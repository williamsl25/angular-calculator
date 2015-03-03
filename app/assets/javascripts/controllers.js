var indexCtrl = calculator.controller('indexCtrl', function($scope) {

  $scope.displayNumber = '';
  $scope.answer = 0;
  $scope.operation = '';

// Set display number to a specific operator
  $scope.calculate = function(){
    if($scope.operation == ''){
      $scope.answer = $scope.displayNumber 
    }
    else if($scope.operation == '+'){
      $scope.answer = Number($scope.displayNumber) + Number($scope.answer);
    }
    else if($scope.operation == '-'){
      $scope.answer = Number($scope.answer) - Number($scope.displayNumber);
    };
  };

  // Add y to x
  $scope.addition = function(){
    $scope.calculate();
    $scope.clearNumber();
    $scope.operation = '+'
  };

  $scope.subtraction = function(){
    $scope.calculate();
    $scope.clearNumber();
    $scope.operation = '-'
  };

  // Display the value after addition or subtraction
  $scope.doMath = function(){
    $scope.calculate();
    $scope.displayNumber = $scope.answer
  };

  // show number in input box
  $scope.buildNumber = function(clickNumber) {      
      $scope.displayNumber = $scope.displayNumber + '' + clickNumber;
    };

  // click "C" to clear displayValue
  $scope.clearAll = function(){
    $scope.displayNumber = "";
    $scope.answer = 0;
    $scope.operation = '';
  };
  
  
  // Clear number after clicking on + or - 
  $scope.clearNumber = function(){
    $scope.displayNumber = ''
  };

});   


