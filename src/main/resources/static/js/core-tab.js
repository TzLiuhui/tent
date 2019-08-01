var Core = (function () {
    var core = {};
    core.addTab = function (opts) {
        $("#tabs a.active").removeClass("active");
        $("#content div.active").removeClass("active");

        //增加tab，显示图标、标题、关闭
        var tab_html = '<li class="nav-item border "><a href="#content_' + opts.id + '" class="nav-link active" data-toggle="tab" id="tab_' + opts.id + '">';
        tab_html += '<i class="' + opts.icon + ' mr-1"></i>' + opts.title + '<i class="fa fa-times ml-2 " ></i></a></li>';
        $("#tabs").append(tab_html);

        //加载 功能页面
        $("#content").append('<div class="tab-pane active" id="content_' + opts.id + '"></div>');
        $("#content_" + opts.id).load(opts.url);
    };
    core.removeTab = function (id) {
        //如果关闭的是当前激活tab，则激活前一个tab
        if ($("#tab_" + id).hasClass("active")) {
            $("#tab_" + id).parent().prev().children("a").trigger("click");
        }
        //关闭TAB
        $("#tab_" + id).parent().remove();
        $("#content_" + id).remove();
    };
    core.activeTab = function (id) {
        if ($("#tab_" + id).hasClass("active")) {
            return
        }
        $("#tab_" + id).trigger("click");
    };

    core.load = function (opts) {
        if (document.getElementById("tab_" + opts.id)) {
            this.activeTab(opts.id)
        } else {
            this.addTab(opts)
        }
    };
    return core;
})(Core, window);

$(function () {
    // 定义tab的关闭功能
    $(document).on("click", "#tabs i.fa-times", function () {
        var id = $(this).parent().attr("id").substring(4);
        Core.removeTab(id);
    });
});
