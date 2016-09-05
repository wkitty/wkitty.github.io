/**
 * Created by Administrator on 16-9-1.
 */
$(document).ready(
    function () {
        setTimeout($("#photo").fadeIn(1000),3000)/*.animate({
            height:'180px',
            width:'180px'
        }).animate({
            height:'120px',
            width:'120px'
        })*/;
        $("#photo img").animate({
            left:'80px'
        }).animate({
            left:'0px'
        });
        $("#other0").slideDown(3000);
        $("#btn_close").slideDown(1000);

        /*----------------------------*/
        var bool0=false;
        $("#btn_close").click(
        function(){
            if(!bool0){
            $("#center0").addClass("center0_black");
            $("#information").addClass("information_black");
            $("#photo").addClass("photo_black");
            $("#other0").addClass("other0_black");
            this.innerHTML="开灯";bool0=true;
            }
            else{
                $("#center0").removeClass("center0_black");
                $("#information").removeClass("information_black");
                $("#photo").removeClass("photo_black");
                $("#other0").removeClass("other0_black");
                this.innerHTML="护眼";bool0=false;
            }
    });
        $("#box1").mouseover(
            function () {
                $("#box1 div").eq(2).fadeIn(1000);
            });
        $("#box1").mouseout(
            function () {
                $("#box1 div").eq(2).fadeOut();
            });
        $("#box2").mouseover(
            function () {
                $("#box2 div").eq(2).fadeIn(1000);
            });
        $("#box2").mouseout(
            function () {
                $("#box2 div").eq(2).fadeOut();
            });
        $("#box3").mouseover(
            function () {
                $("#box3 div").eq(2).fadeIn(1000);
            });
        $("#box3").mouseout(
            function () {
                $("#box3 div").eq(2).fadeOut();
            });
        $("#box4").mouseover(
            function () {
                $("#box4 div").eq(2).fadeIn(1000);
            });
        $("#box4").mouseout(
            function () {
                $("#box4 div").eq(2).fadeOut();
            });
});
