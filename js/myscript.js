const URL='https://s3-ap-southeast-1.amazonaws.com/he-public-data';

let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope, $http) => {
  // This is controller
  $scope.title = "BeerDB";

  // calling api

  $http.get(`${URL}/beercraft5bac38c.json`).then((response)=>{
    //success
    // console.log("Inside Success");
    //console.log(response.data);

    $scope.all_data=response.data;

  },(error)=>{
    //error
    console.log(error);
  });


  $http.get(`${URL}/beerimages7e0480d.json`).then((response)=>{
    //success
    // console.log("Inside Success");
    //console.log(response.data);
    
    $scope.all_images=response.data;



  },(error)=>{
    //error
    console.log(error);
  });
    

  



});