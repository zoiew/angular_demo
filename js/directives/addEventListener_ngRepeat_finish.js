

tempApp
.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            console.log(scope.$index);
            scope.$watch('$last',function(){
                if(scope.$last == true){
                    console.log('$watch 监听 $last;');
                };
            })
            if(scope.$last == true){
                console.log('ng-repeat执行完毕')
                //向父控制器传递事件
                scope.$emit('to-parent');
                //向子控制器传递事件
                scope.$broadcast('to-child');
            }
        }
    }
});
/*//父控制器中监听事件
$scope.$on('to-parent',function(){
    //父控制器执行操作
    console.log("i'm father");
})

//子控制器中监听事件
$scope.$on('to-child',function(){
    //子控制器执行操作
    console.log("i'm son");
    
})*/