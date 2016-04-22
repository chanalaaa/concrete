$(document).ready(function() {
    var size = $('.tt').size();
    var rand = Math.floor((Math.random() * 3) + 1);
    //console.log(rand);
    for (var i = 1; i <= rand; i++) {
        var rand_border = Math.floor((Math.random() * size));
        var index = $(".tt").eq(rand_border);
        var index_img = $(".tt img").eq(rand_border);
        var width = index.width() - 1;
        var height = index.height() - 1;
        console.log(index_img);
        $(index_img).css({
            //"width": width+'px',
            //"height": height+'px',

            //"padding": "1px"
        });
        $(index).css({
            //"width": width+'px',
            //"height": height+'px',
            "border-style": "solid",
            "border-width": "1px",
            "border-color": "yellow"
                //"margin:": "1px"
        });

    };

    $("#content_for_scroll").mCustomScrollbar({
        theme: "minimal"
            //mouseWheel:{ enable: true }
            //mouseWheel:{ scrollAmount: 60 }

    });


    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

});
