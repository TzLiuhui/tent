$(function () {

    $(".sidebar li li a").click(function () {
        // alert("click");

        $(".sidebar a").filter(".active").removeClass("active");
        $(".sidebar li").filter(".menu-open").removeClass("menu-open");
        // $(".sidebar li li a").removeClass("active");
        // $(".sidebar li a").removeClass("active");
        // $(".sidebar li").removeClass("menu-open");

        $(this).parent().parent().parent().addClass("menu-open");
        $(this).parent().parent().parent().find("a").first().addClass("active");
        $(this).addClass("active");
        var aHref = $(this).attr("href");
        aHref = aHref.substring(1, aHref.length);
        // alert(aHref);
        if (aHref != "") {
            $("#contentId").html("");
            $("#contentId").load(aHref);
        }
    });
});

