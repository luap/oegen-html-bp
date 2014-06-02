$(".js-include").each(function(){
    var inc=$(this);
    $.get(inc.attr("data-src"), function(data){
        inc.replaceWith(data);
    });
});