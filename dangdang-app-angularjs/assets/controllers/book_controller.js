app.controller('bookController',['$scope',function($scope){
    $scope.bookTypes = [
        {id:'ertong',name:'儿童',img:'https://images-cn.ssl-images-amazon.com/images/I/51rRjCeiKnL._AC_SR300,300_AC_.jpg',description:'儿童热卖新品'},
        {id:'lishi',name:'历史',img:'https://images-cn.ssl-images-amazon.com/images/I/31b2CzZyYdL._AC_SR300,300_.jpg',description:'历史热卖新品'},
        {id:'dongman',name:'动漫',img:'https://images-cn.ssl-images-amazon.com/images/I/51OYLEjMGIL._AC_SR300,300_.jpg',description:'动漫热卖新品'},
        {id:'qingchunwenxue',name:'青春文学',img:'https://images-cn.ssl-images-amazon.com/images/I/51DpYUXIh2L._AC_SR300,300_.jpg',description:'青春热卖新品'},
    ]
}])