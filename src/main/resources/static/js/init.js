$(function () {
    /**
     * active： 本菜单是否是正在激活的标志
     * icon:：前置图标
     * url：URL调用
     * title：主要功能描述
     *
     */
    var opts = {};
    // 定义菜单单击功能
    $(".sidebar  a").click(function () {
        // 本菜单没有URL，则直接跳出。方便了没有一级菜单（没有子菜单）的也可以有直接的功能调用
        if ($(this).attr("href") == "#") {
            return
        }
        // 如果本菜单正在激活标志，以方便下一步处理。
        if ($(this).hasClass("active")) {
            opts.active = true;
        } else {
            opts.active = false;
            // 去掉原菜单的激活状态，激活本菜单和一级菜单
            $(".sidebar a.active").removeClass("active");
            $(this).addClass("active");
            $(this).parent().parent().parent().find("a").first().addClass("active");
        }

        //获得功能图标，处理其它的 Class
        var icon = $(this).children("i").attr("class");
        opts.icon = icon.split(" nav-icon")[0];
        //获得功能标题
        opts.title = ($(this).children("p").html()).split(" <span")[0];
        //获得功能编号
        opts.id = $(this).attr("id");
        //获得功能的url，主要去掉加上的 #
        var aHref = $(this).attr("href");
        opts.url=aHref.substring(1, aHref.length);
        //加载 功能模块
        Core.load(opts);
    });
});

