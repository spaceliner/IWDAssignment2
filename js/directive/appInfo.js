app.directive('appInfo',function(){
return{
restrict: 'E',
scope:{
info:'='
},
templateUrl: 'js/directive/appInfo.html'


};
});


app.directive('appFeature',function(){
return{
restrict: 'E',
scope:{
feature:'='
},
templateUrl: 'js/directive/appfeature.html'


};
});