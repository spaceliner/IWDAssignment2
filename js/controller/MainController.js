app.controller('myCtrl', function($scope, $http) {
					$http({
						method: 'GET',
						url: 'js/wine.json'
					}).then(function successCallback(response) {
							$scope.apps = response.data;
						}, function errorCallback(response) {
					});

				});

