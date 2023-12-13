$(function(){


    //menu 
    $(".menuOpen").click(function(){
        $(".hiddenMenu").addClass("active")
        $(".hiddenMenuWrap").addClass("active")
    })
    $(".menuClose").click(function(){
        $(".hiddenMenu").removeClass("active")
        $(".hiddenMenuWrap").removeClass("active")
    })

    $(".model>li").click(function(){
        $(".model>li").removeClass("on")
        $(this).addClass("on")
    })
    $(".gnb>li").click(function(){
        $(".gnb>li").removeClass("on")
        $(this).addClass("on")
    })
    
    //model 객체 입력
    $("#el_cross").html(getArrayModel("Crossover","Electric",modelArray))
    $("#el_suv").html(getArrayModel("SUV","Electric",modelArray))
    $("#Plug_suv").html(getArrayModel("SUV","Plug-in hybrids",modelArray))
    $("#Plug_Sedan").html(getArrayModel("Sedan","Plug-in hybrids",modelArray))
    $("#Mild_suv").html(getArrayModel("SUV","Mild hybrids",modelArray))
    $("#Mild_Sedan").html(getArrayModel("Sedan","Mild hybrids",modelArray))
    $("#Mild_CROSS").html(getArrayModel("CROSS COUNTRY","Mild hybrids",modelArray))

    // bannerTxt
    setTimeout(function(){
        $(".bannerTxt").addClass("on")
    },2000)

    //MyVolvoDesign
    let count = 0
    let idx = 0
    setInterval(() => {
        count++
        if(count>$(".designTrain>li").length-1){count=0}
        $(".designTrain>li").removeClass("on")
        $(".designTrain>li").eq(count).addClass("on")

        $(".pagination>li").click(function(){
            idx = $(this).index()
            $(".designTrain>li").removeClass("on")
            $(".designTrain>li").eq(idx).addClass("on")
            return count = idx
        })
        
    }, 2500);
    
    //
    $(".tabRecharge>.tabSuv").click(function(){
        $(".tabRecharge>dt").removeClass("on")
        $(".tabSuv").addClass("on")
        $(".dtDeco").css("transform","translateX(-118%)")
    })
    $(".tabRecharge>.tabSedan").click(function(){
        $(".tabRecharge>dt").removeClass("on")
        $(".tabSedan").addClass("on")
        $(".dtDeco").css("transform","translateX(8%)")
    })

    

})