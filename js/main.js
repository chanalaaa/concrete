//

$(document).ready(function() {
    var c_view = $('.content-view');
    c_view.load('views/home.html');
    var pullNav = $('.pull_nav');
    var navTop = $('.nav_top');
  

    pullNav.click(function() {
        navTop.slideToggle();
    });

    $('li#home').css({
        "text-decoration": "underline",
        "color": "white"
    });

    $('ul.nav_ul li a', this).click(function() {

        //$('ul.nav_ul > li').css('text-decoration', 'none','important');
        console.log(this);
        $("li").removeAttr("style");
        var page = $(this).attr('href');
        $(this).parent().css({
            "text-decoration": "underline",
            "color": "white"
        });

        c_view.load('views/' + page + '.html');
        return false;
    });

    $('ul.nav_ul_top li a', this).click(function() {

        //$('ul.nav_ul > li').css('text-decoration', 'none','important');
        console.log(this);
        $("li").removeAttr("style");
        var page = $(this).attr('href');
        $(this).parent().css({
            "text-decoration": "underline",
            "color": "white"
        });

        c_view.load('views/' + page + '.html');
        return false;
    });




});





/*
$('#link_home_to_cag').click(function() {

    var page = $(this).attr('href');
    $("li").removeAttr("style");
    var page = $(this).attr('href');
    $('#categories').css({
        "text-decoration": "underline",
        "color": "white"
    });

    c_view.load('views/' + page + '.html');
    return false;

});
*/
