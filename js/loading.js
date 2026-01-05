$(function(){
    setTimeout(removeLoader, 1000);
   
    function removeLoader(){
        $(".load").hide();
        $(".loader-Wrapper").fadeOut(500);
        /*$("body").addclass("load-end");*/
    }
});
   