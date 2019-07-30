var Core = (function () {
    var core = {};
    core.addTab = function (opts) {
        $("#tabs a.active").removeClass("active");
        $("#content div.active").removeClass("active");

        //增加tab，显示图标、标题、关闭
        var tab_html = '<li class="nav-item border " id="tab_' + opts.id + '"><a href="#content_' + opts.id + '" class="nav-link active" data-toggle="tab"> ';
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
            var prev_id = $("#tab_" + id).prev().attr("id");
            prev_id = prev_id.substring(4, prev_id.length);
            this.activeTab(prev_id);
        }
        //关闭TAB
        $("#tab_" + id).remove();
        $("#content_" + id).remove();
    };
    core.activeTab = function (id) {
        $("#tabs a.active").removeClass("active");
        $("#content div.active").removeClass("active");
        $("#content_" + id).addClass("active");
        $("#tabs a[href='#content_" + id + "']").addClass("active")
    };

    core.load = function (opts) {
        if ($("#tab_" + opts.id)[0]) {
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
