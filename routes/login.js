exports.view = function(request, response){
    response.render('login', {layout: 'loginset.handlebars'});
}