//    Name: Bobby Donald                                             
//    Email: robert_donald1@student.uml.edu                            
//    UMass Lowell Computer Science, 91.461 GUI Programming I                      
//    Date: 12/2/2014                                                               
//    Description: Modified version of Prof. Heines's
//    Assignment #9 starter HTML File

"use strict";  // All variables must be declared
var lastSortColumnNo = 3;
var lastSortDescending = false;
var myApp = angular.module('BeatlesApp', []);

myApp.constant("jsonUrl", "the-beatles.json");
myApp.controller('BeatlesCtrl',
            function ($scope, $http, jsonUrl) {
                $scope.jsonData = {}; 
                $http.get(jsonUrl)
                        .success(function (data) {
                            $scope.jsonData.data = data; 
                        })    
                        .error(function (error) {      
                            $scope.jsonData.error = error;
                        });    

                $scope.sortField = "date";
                $scope.sortDescending = false;


                $scope.sortColumn = function (colNo) {
                    $scope.sortDescending = lastSortColumnNo === colNo && !lastSortDescending;

                    if (colNo === 2) {
                        $scope.sortField = "name";
                    } else if (colNo === 3) {
                        $scope.sortField = "date";
                    } 

                    lastSortDescending = $scope.sortDescending;
                    lastSortColumnNo = colNo;
                };

                $scope.showImages = true;
            }
    );
