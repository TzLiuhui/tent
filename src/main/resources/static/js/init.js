$(function () {
    var menus = "";
    $.ajax({
        type: 'get',
        url: '/permission/list',
        // url: '/getResource',
        data: {},
        success: function (data) {
            generateResource(0, data);
            $("#main-menu").append(menus);
        }
    });

    function generateResource(id, array) {
        //获取一级菜单
        var oneMenu = getChilds(id, array);

        for (var i in oneMenu) {
            var twoMenu = getChilds(oneMenu[i].id, array);
            //有二级子菜单
            if (twoMenu.length > 0) {
                menus += '<li class="nav-item has-treeview">';
                menus += '<a href="#' + oneMenu[i].url + '" class="nav-link" id="menu_"' + oneMenu[i].id + '"><i class="' + oneMenu[i].icon + ' nav-icon "></i>'
                    + '<p>' + oneMenu[i].name + '<i class="right fas fa-angle-left"></i></p></a>';
                menus += '<ul class="nav nav-treeview">';
                for (var j in twoMenu) {
                    menus += '<li class="nav-item">';
                    menus += '<a href="#' + twoMenu[j].url + '" class="nav-link" id="menu_' + twoMenu[j].id + '" ><i class="' + twoMenu[j].icon + ' nav-icon ml-3"></i>'
                        + '<p>' + twoMenu[j].name + '</p></a></li>';
                }
                menus += '</ul>'

            } else {
                menus += '<li class="nav-item">';
                menus += '<a href="#' + oneMenu[i].url + '" class="nav-link" id="menu_' + oneMenu[i].id + '" ><i class="' + oneMenu[i].icon + ' nav-icon "></i>'
                    + '<p>' + oneMenu[i].name + '</p></a>';
            }
            menus += '</li>'
        }
    }

    function getChilds(id, arry) {
        var newArry = new Array();
        for (var i in arry) {
            if (arry[i].parentId == id)
                newArry.push(arry[i]);
        }
        return newArry;
    }

    /**
     * active： 本菜单是否是正在激活的标志
     * icon:：前置图标
     * url：URL调用
     * title：主要功能描述
     *
     */
    var opts = {};
    // 定义菜单单击功能
    $(document).on("click",".sidebar a",function () {

        // 如果本菜单正在激活标志，以方便下一步处理。
        if ($(this).hasClass("active")) {
            opts.active = true;
        } else {
            opts.active = false;
            // 去掉原菜单的激活状态，激活本菜单和一级菜单
            $(".sidebar a.active").removeClass("active");
            $(this).addClass("active");
            //应有判断是否 li 元素，如是则激活，不是什么不做
            if ($(this).parent().parent().parent().hasClass("mt-2")) {
                return;
            } else {
                $(this).parent().parent().parent().find("a").first().addClass("active");
            }
        }

        // 本菜单没有URL，则直接跳出。方便了没有一级菜单（没有子菜单）的也可以有直接的功能调用
        if ($(this).attr("href") == "#") {
            return
        }

        //获得功能图标，处理其它的 Class
        var icon = $(this).children("i").attr("class");
        opts.icon = icon.split(" nav-icon")[0];
        //获得功能标题
        opts.title = $(this).children("p").text();
        //获得功能编号
        opts.id = $(this).attr("id").substring(5);
        //获得功能的url，主要去掉加上的 #
        var url = $(this).attr("href");
        opts.url = url.substring(1);
        //加载 功能模块
        TabCore.load(opts);
    });
});

