app.controller('bookController',['$scope',function($scope){
    $scope.bookTypes = [
        {id:'ertong',name:'儿童',img:'./assets/images/ertong.jpg',description:'儿童热卖新品'},
        {id:'lishi',name:'历史',img:'./assets/images/lishi.jpg',description:'历史热卖新品'},
        {id:'dongman',name:'动漫',img:'./assets/images/dongman.jpg',description:'动漫热卖新品'},
        {id:'qingchunwenxue',name:'青春文学',img:'./assets/images/qingchun.jpg',description:'青春热卖新品'},
    ]
}])