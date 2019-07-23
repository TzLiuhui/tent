$(function () {

    $(".sidebar li li a").click(function () {

        $(".sidebar a").filter(".active").removeClass("active");
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

