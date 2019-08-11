var TabCore = (function () {
    var tabCore = {};
    tabCore.addTab = function (opts) {
        $("#tabs a.active").removeClass("active");
        $("#content div.active").removeClass("active");

        //增加tab，显示图标、标题、关闭
        var tab_html = '<li class="nav-item border "><a href="#content-' + opts.id + '" class="nav-link active" data-toggle="tab" id="tab-' + opts.id + '">';
        tab_html += '<i class="' + opts.icon + ' mr-1"></i>' + opts.title + '<i class="fa fa-times ml-2 " ></i></a></li>';
        $("#tabs").append(tab_html);

        //加载 功能页面
        $("#content").append('<div class="tab-pane active" id="content-' + opts.id + '"></div>');
        $("#content-" + opts.id).load(opts.url);
    };
    tabCore.removeTab = function (id) {
        //如果关闭的是当前激活tab，则激活前一个tab
        if ($("#tab-" + id).hasClass("active")) {
            $("#tab-" + id).parent().prev().children("a").trigger("click");
        }
        //关闭TAB
        $("#tab-" + id).parent().remove();
        $("#content-" + id).remove();
    };
    tabCore.activeTab = function (id) {
        if ($("#tab-" + id).hasClass("active")) {
            return
        }
        $("#tab-" + id).trigger("click");
    };

    tabCore.load = function (opts) {
        if (document.getElementById("tab-" + opts.id)) {
            this.activeTab(opts.id)
        } else {
            this.addTab(opts)
        }
    };
    return tabCore;
})
(TabCore, window);

$(function () {
    // 定义tab的关闭功能
    $(document).on("click", "#tabs i.fa-times", function () {
        var id = $(this).parent().attr("id").substring(4);
        TabCore.removeTab(id);
    });
});
