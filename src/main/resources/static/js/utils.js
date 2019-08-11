var Utils = (function () {

    var utils={};
    /*询问框*/
    utils.confirm = function (content, fun) {
        layer.confirm(content, {
            icon: 3,
            title: "系统提示",
            skin: 'layui-layer-lan',
            btn: ['确认', '取消'],
        }, function (index) {
            layer.close(index);
            fun(true);
        });
    };
    utils.showMessage = function (content,optis) {
        var layerOptis=$.extend({},{
                title: "系统信息",
                time: 1000,
                icon: 6,
                shift: 0,
                skin: 'layui-layer-lan'},
            optis);
        layer.msg(content, layerOptis);
    };
    return utils;
})
(Utils, window);