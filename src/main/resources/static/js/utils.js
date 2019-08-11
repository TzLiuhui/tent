var Utils = (function () {

    var utils={}
    /*询问框*/
    utils.confirm = function (content, d) {
        layer.confirm(content, {
            icon: 3,
            title: "系统提示",
            btn: ['确认', '取消'],
            btnclass: ['btn btn-primary', 'btn btn-danger'],
        }, function (index) {
            layer.close(index);
            d(true);
        });
    };

    return Utils;
})
(Utils, window);