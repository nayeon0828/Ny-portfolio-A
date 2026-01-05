$(function(){
    var hamToggle = true;
    $(".menu-trigger").click(function(){
        if(hamToggle){
            $("#mob_nav ul").css({"height":"200px"})
        }else{
            $("#mob_nav ul").css({"height":"0px"})
        }
        hamToggle=!hamToggle;
    });
})