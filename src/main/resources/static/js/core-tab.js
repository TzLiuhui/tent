var Core =(function () {
    var core={};
    core.addTab = function (options) {

    };
    core.removeTab = function (id) {
        alert("remove " + id);
    };
    core.activeTab = function (id) {
        alert("active " + id);
    };

    core.load=function (opts) {
        console.log(opts)
    };
    return core;
})(Core, window);

$(function () {
    // 定义tab的关闭功能
    $("#tab").on("click", "[tabclose]", function (e) {
        var id = $(this).attr("tabclose");
        // core.removeTab(id);
    });
});
