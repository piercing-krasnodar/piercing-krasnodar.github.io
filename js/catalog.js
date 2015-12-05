(function(){
    $(window).load(function(){
        $.getJSON('js/data/jewels.json', function(data){
            var context = {items: data};
            var source = $("#catalog-template").html();
            var template = Handlebars.compile(source);
            var html  = template(context);
            $('#jewels-catalog').html(html);
        });
        $.getJSON('js/data/piercing.json', function(data){
            var context = {items: data};
            var source = $("#catalog-template").html();
            var template = Handlebars.compile(source);
            var html  = template(context);
            $('#piercing-catalog').html(html);
        });
    });
})();