var Core = (function () {
    var core = {};
    core.addTab = function (opts) {
        $("#tabs a.active").removeClass("active");
        $("#content div.active").removeClass("active");

        //增加tab，显示图标、标题、关闭
        var tab_html = '<li class="nav-item border "><a href="#content_' + opts.id + '" class="nav-link active" data-toggle="tab"> ';
        tab_html += '<i class="' + opts.icon + '"></i>  ' + opts.title + '<i class="fa fa-times ml-2 " tabclose="' + opts.id + '"></i></a></li>';
        $("#tabs").append(tab_html);

        //加载 功能页面
        $("#content").append('<div class="tab-pane active" id="content_' + opts.id + '"></div>');
        $("#content_" + opts.id).load(opts.url);
    };
    core.removeTab = function (id) {
        //如果关闭的是当前激活tab，则激活前一个tab
        var ahref = $("#tabs a[href='#content_" + id + "']");

        if ($(ahref).hasClass("active")) {
            ahref.parent().prev().children("a").trigger("click");
        }
        //关闭TAB
        ahref.parent().remove();
        // $("#tab_" + id).remove();
        $("#content_" + id).remove();
    };
    core.activeTab = function (id) {

        var ahref = $("#tabs a[href='#content_" + id + "']");

        ahref.trigger("click");
    };

    core.load = function (opts) {
        if ($("#tabs i[tabclose='" + opts.id + "']")[0]) {
            this.activeTab(opts.id)
        } else {
            this.addTab(opts)
        }
    };
    return core;
})(Core, window);

$(function () {
    // 定义tab的关闭功能
    $("#tabs").on("click", "[tabclose]", function (e) {
        var id = $(this).attr("tabclose");
        Core.removeTab(id);
    });
});
