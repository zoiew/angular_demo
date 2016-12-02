tempApp
.directive('fractionNum',function(){  
    return {  
        link : function(scope, elements, attrs, controller){  
            elements[0].onkeyup = function(){  
                if(isNaN(this.value) || this.value<1 || this.value>10){  
                    this.style.borderColor = 'red';  
                }  
                else{  
                    this.style.borderColor = '';  
                }  
            };  
        }  
    };  
})
.directive('exampleDirective', function() {  
    return {  
        restrict: 'E',  
        template: '<p>Hello {{number}}!</p>',  
        controller: function($scope, $element){  
            $scope.number = $scope.number + "22222 ";  
            $scope.$emit('parent');
            console.log('已经向父传递');
            $scope.$on('to-child',function(){
                console.log('father give son');
            });
            console.log('是否收到子的广播；');
        },  
        //controllerAs:'myController',  
        link: function(scope, el, attr) {  
            scope.number = scope.number + "33333 ";  
        },  
        compile: function(element, attributes) {  
            return {  
                pre: function preLink(scope, element, attributes) {  
                    scope.number = scope.number + "44444 ";  
                },  
                post: function postLink(scope, element, attributes) {  
                    scope.number = scope.number + "55555 ";  
                }  
            };  
        }  
    }  
});