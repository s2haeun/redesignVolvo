$(function(){

    

    $("main>.content").on("wheel DOMMouseScroll",function(event){
        //event는 사용자의 행동정보를 담고있는 객체
        let E = event.originalEvent
        let delta = 0
        if(E.detail){
            // 파이어폭스
            delta = E.detail * -40
        }else{
            // 크롬,익스..
            delta = E.wheelDelta
        }

        if(delta<0){
            //휠을 아래로 굴렸다
            let posTop = $(this).next().offset().top
            $("html,body").stop().animate({scrollTop:posTop},1000)
            $("main>.content").removeClass("on")
            $(this).next().addClass("on")
            // header 변경요소
            // MyVolvoDesign 클래스가 존재하는 경우
            if ($(".MyVolvoDesign").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // RechargeModel 클래스가 존재하는 경우
            else if ($(".RechargeModel").hasClass("on")) {
                setTheme("./img/volvo_logo_white.svg", "./img/menuOpen_black.png", "#000");
            }
            // AllRechargeModel 클래스가 존재하는 경우
            else if ($(".AllRechargeModel").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // whyVolvoDiv 클래스가 존재하는 경우
            else if ($(".whyVolvoDiv").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // news 클래스가 존재하는 경우
            else if ($(".news").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }

            
        }else{
            //휠을 위로 굴렸다
            let posBot = $(this).prev().offset().top
            $("html,body").stop().animate({scrollTop:posBot},1000)
            $("main>.content").removeClass("on")
            $(this).prev().addClass("on")
            
            // header 변경요소
            // news 클래스가 존재하는 경우
            if ($(".news").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // whyVolvoDiv 클래스가 존재하는 경우
            else if ($(".whyVolvoDiv").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // AllRechargeModel 클래스가 존재하는 경우
            else if ($(".AllRechargeModel").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // RechargeModel 클래스가 존재하는 경우
            else if ($(".RechargeModel").hasClass("on")) {
                setTheme("./img/volvo_logo_white.svg", "./img/menuOpen_black.png", "#000");
            }
            // MyVolvoDesign 클래스가 존재하는 경우
            else if ($(".MyVolvoDesign").hasClass("on")) {
                setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            }
            // MyVolvoDesign 클래스가 존재하는 경우
            else if ($(".banner").hasClass("on")) {
                setTheme("./img/volvo_logo_white.svg", "./img/menuOpen.png", "#fff");
            }
        
        
        
        
        
        }
        return false

        
    })
    // 테마를 설정하는 함수
    
    function setTheme(logoSrc, menuOpenImgSrc, menuOpenColor) {
        setTimeout(function(){
            $(".logo img").attr("src", logoSrc);
            $(".menuOpenImg").attr("src", menuOpenImgSrc);
            $(".menuOpen").css("color", menuOpenColor);
        },1000)
    }
    
        




});

    



