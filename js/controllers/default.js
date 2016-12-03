/*
*  defaultCtrl
*/
(function(){
"use strict"
tempApp.controller("defaultCtrl",['$scope','$http','$interval',defaultCtrlFn]);
function defaultCtrlFn($scope,$http,$interval){
    this.value = "Hello World";
    //要循环的数据
    $scope.data = [
        {
            str: 'a'
        },
        {
            str: 'b'
        },
        {
            str: 'c'
        }
    ];

    $scope.change = function(){
        $http({
            url:'http://10.73.40.69:8080/iplanning/iplanning/forecastHeaders/test',
            method:'POST',
            data: {},
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function(rep){
            //console.log($scope.data);
            console.log(rep.data);
            //var mapdata = JSON.parse(text[, reviver]);
            //console.log(mapdata);
            //$scope.data = rep;

        }).error(function(data,header,config,status){
        //处理响应失败
            console.log('失败')
        
        });
    }

    $scope.change();

 /*$http.jsonp('http://10.73.40.69:8080/iplanning/iplanning/forecastHeaders/test', {

        params: {
            // q: 'chart_data1',
            
            callback: 'JSON_CALLBACK'
        }

    }).success(function(data) {
        
        console.log("从php取回数据");   

    }).error(function(){

        console.log('失败');

    });













    $scope.renderFinish = function(){
        console.log('渲染完之后的操作')
    };
    $http({
        url:'data/demo.json',
        method:'GET'
    }).success(function(data,header,config,status){
        //响应成功
        console.log('成功')
        
    }).error(function(data,header,config,status){
        //处理响应失败
        console.log('失败')
        
    });
    var promise=$http({
            method:'GET',
            url:"data/demo.json"
        });
    console.log(promise);
    promise.then(function(resp){
        //resp是一个响应对象
        console.log(resp)
        

    },function(resp){
        //带有错误信息的resp
        console.log(resp);
        

    });
    //then()方法与其他两种方法的主要区别是，它会接收到完整的响应对象，而success()和error()则会对响应对
    //象进行析构
    promise.success(function(data,status,config,headers){
    //处理成功的响应
    });

    promise.error(function(data,status,hedaers,config){
        //处理失败后的响应
    });

     $http({
        method:'GET',
        url:'data/demo.json',
        params:{
            'username':'tan'
        }
     });
     var blob=new Blob(['Hello world'],{type:'text/plain'});
        $http({
            method:'POST',
            url:'data/demo.json',
            data:blob
        }); 
    $http({
        method: 'GET',
        url: 'data/demo.json'
    }).then(function(resp) {
        // 读取X-Auth-ID
        resp.headers('X-Auth-ID');
        
    });*/
};


tempApp.controller('directive2',['$scope',  
    function($scope) {  
        $scope.number = '1111 ';  
        $scope.$on('parent',function(){
            console.log('son give father;');
            // 父亲向儿子传递信息失败；
            $scope.$broadcast('to-child');
            console.log('已经向子传递');
        });



    }  
])



























// AngularJS拖动窗口滑块以加载更多
/*tempApp.controller('unitarySearchCtrl', ['$scope', '$window', '$document', '$interval', '$routeParams', '$resource', function ($scope, $window, $document, $interval, $routeParams, $resource) {*/  
tempApp.controller('unitarySearchCtrl', ['$scope', '$window', '$document', '$interval', function ($scope, $window, $document, $interval) {  
  
 /*       var Components = $resource('rest/components/:componentName',{  
            componentName:"@componentName"  
        });          
  
        $scope.allComponents = [];  
        $scope.components = [];  
        $scope.searchText=$routeParams.componentName;  
  
        var start = 0,  
            increment = 4,  
            end = increment;  
  
        Components.query({componentName:$routeParams.componentName},function(data){  
            $scope.allComponents = data;  
  
            $scope.components = $scope.allComponents.slice(start, end);  
  
            start += increment;  
            end += increment;  
  
            var promise = $interval(function () {  
                if (angular.element($window).height() >= angular.element($document).height()) {  
                    $scope.loadMore();  
                } else {  
                    $interval.cancel(promise);  
                }  
            }, 0);  
        });  
  
        $scope.loadMore = function () {  
            var slicedComponents = $scope.allComponents.slice(start, end);  
            for (var i = 0; i < slicedComponents.length; i++) {  
                $scope.components.push(slicedComponents[i]);  
            }  
            start += increment;  
            end += increment;  
        };  */
  
    }]);



}());
