$(function(){

    $("main>.content").on("wheel DOMMouseScroll", function(event) {
        let E = event.originalEvent;
        let delta = 0;

        if (E.detail) {
            delta = E.detail * -40;
        } else {
            delta = E.wheelDelta;
        }

        if (delta < 0) {
            // 휠을 아래로 굴렸을 때
            let nextElement = $(this).next();

            if (nextElement.length > 0) {
                let posTop = nextElement.offset().top;
                $("html,body").stop().animate({scrollTop: posTop}, 1000);
                $("main>.content").removeClass("on");
                nextElement.addClass("on");
                updateThemeAndPage(nextElement);
            }
        } else {
            // 휠을 위로 굴렸을 때
            let prevElement = $(this).prev();

            if (prevElement.length > 0) {
                let posBot = prevElement.offset().top;
                $("html,body").stop().animate({scrollTop: posBot}, 1000);
                $("main>.content").removeClass("on");
                prevElement.addClass("on");
                updateThemeAndPage(prevElement);
            }
        }

        return false;
    });

    function updateThemeAndPage(currentElement) {
        // 테마 설정
        if (currentElement.hasClass("MyVolvoDesign")) {
            setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            setThemePage("#2a609d");
        } else if (currentElement.hasClass("RechargeModel")) {
            setTheme("./img/volvo_logo_white.svg", "./img/menuOpen_black.png", "#000");
            setThemePage("#2a609d");
        } else if (currentElement.hasClass("AllRechargeModel")) {
            setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            setThemePage("#2a609d");
        } else if (currentElement.hasClass("whyVolvoDiv")) {
            setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            setThemePage("#2a609d");
        } else if (currentElement.hasClass("news")) {
            setTheme("./img/volvo_logo_black.svg", "./img/menuOpen_black.png", "#000");
            setThemePage("#2a609d");
        } else if (currentElement.hasClass("banner")) {
            setTheme("./img/volvo_logo_white.svg", "./img/menuOpen.png", "#fff");
            setThemePage("#fff");
        }

        // fullpage_nav 업데이트
        let idx = currentElement.index();
        let proIdx = idx + 1;
        let pagePro = Number((proIdx / 7) * 100);
        $(".fullpage_nav_current").html("0" + idx);
        $(".fullpage_nav_progress_active").css("height", pagePro + "%");
    }

    // 테마 설정 함수
    function setTheme(logoSrc, menuOpenImgSrc, menuOpenColor) {
        setTimeout(function(){
            $(".logo img").attr("src", logoSrc);
            $(".menuOpenImg").attr("src", menuOpenImgSrc);
            $(".menuOpen").css("color", menuOpenColor);
        }, 1000);
    }

    // fullpage_nav 테마 설정 함수
    function setThemePage(color) {
        $(".fullpage_nav_current").css("color", color);
        $(".fullpage_nav_total").css("color", color);
        $(".fullpage_nav_progress_active").css("background", color);
    }
});
