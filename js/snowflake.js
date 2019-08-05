 window.onload = function () {
                    var minSize = 5; 
                    var maxSize = 50;//鏈€澶у瓧浣�
                    var newOne = 100; //鐢熸垚闆姳闂撮殧
                    var flakColor = "#fff"; //闆姳棰滆壊
                    var flak = $("<div class='xh'></div>").css({position:"absolute","top":"0px"}).html("*");//瀹氫箟涓€涓洩鑺�
                    var dhight = $(window).height(); 
                    var dw =$(window).width(); 
                    setInterval(function(){
                    var sizeflak = minSize+Math.random()*maxSize; 
                    var startLeft = Math.random()*dw; 
                    var startopcity = 0.7+Math.random()*0.3; 
                    var endpositionTop= dhight-100; 
                    var endLeft= Math.random()*dw; 
                    var durationfull = 5000+Math.random()*5000; 
                    flak.clone().appendTo($("body")).css({
                    "left":startLeft ,
                    "opacity":startopcity,
                    "font-size":sizeflak,
                    "color":flakColor
                    }).animate({
                    "top":endpositionTop,
                    "left":endLeft,
                    "apacity":0.1
                    },durationfull,function(){
                    $(this).remove()
                    });
                    },newOne);
                } 