var FormCore = (function () {
    var formCore = {};
    var tableOpts = {
        id: "",
        url: "",
        columns: [],
        uniqueId: "id",//每一行的唯一标识，一般为主键列
        method: "post",//请求方式（*）
        undefinedText: "-", /*为undefiend时显示的字*/
        striped: true, //是否显示行间隔色
        // queryParams: queryInitParams,
        // responseHandler: responseHandler,
        toolbar: '',        //工具按钮用哪个容器
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 15, 20],
        contentType: "application/x-www-form-urlencoded",//用post请求，这个是必须条件，必须加上，get可以不用，亲测
        dataType: "json",
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        sortable: true, //是否启用排序
        sortOrder: "asc", //排序方式
        sortName: "", //排序字段
        queryParamsType: "limit",
        sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
        showColumns: true, //是否显示所有的列
        showRefresh: true, //是否显示刷新按钮
        minimumCountColumns: 2, //最少允许的列数
        clickToSelect: true, //是否启用点击选中行
        strictSearch: true,
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表
        showExport: true, //是否显示导出
        exportDataType: "basic", //basic', 'all', 'selected'.
        escape: true,//html转意
        // onLoadSuccess: tableLoadSuccess
    };

    /*bootstrap-table表格*/
    formCore.initTable = function (options, success) {
        var tableOptions = $.extend({}, tableOpts, options);
        $(tableOptions.id).bootstrapTable({
            url: tableOptions.url, //请求后台的URL（*）
            contentType: tableOptions.contentType, //用post请求，这个是必须条件，必须加上，get可以不用，亲测
            dataType: tableOptions.dataType,
            method: tableOptions.method, //请求方式（*）
            //            toolbar: '#toolbar',        //工具按钮用哪个容器
            undefinedText: tableOptions.undefinedText, /*为undefiend时显示的字*/
            striped: tableOptions.striped, //是否显示行间隔色
            cache: tableOptions.cache, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: tableOptions.pagination, //是否显示分页（*）
            sortable: tableOptions.sortable, //是否启用排序
            sortOrder: tableOptions.sortOrder, //排序方式
            sortName: tableOptions.sortName, //排序方式
            toolbar: tableOptions.toolbar,
            //            search: true,             //是否使用客户端搜索
            queryParams: tableOptions.queryParams,//传递参数（*）
            responseHandler: tableOptions.responseHandler,
            queryParamsType: tableOptions.queryParamsType,
            sidePagination: tableOptions.sidePagination, //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: tableOptions.pageNumber, //初始化加载第一页，默认第一页
            pageSize: tableOptions.pageSize, //每页的记录行数（*）
            pageList: tableOptions.pageList, //可供选择的每页的行数（*）
            showColumns: tableOptions.showColumns, //是否显示所有的列
            showRefresh: tableOptions.showRefresh, //是否显示刷新按钮
            minimumCountColumns: tableOptions.minimumCountColumns, //最少允许的列数
            clickToSelect: tableOptions.clickToSelect, //是否启用点击选中行
            strictSearch: tableOptions.strictSearch,
            //            height: 460,            //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            showToggle: tableOptions.showToggle, //是否显示详细视图和列表视图的切换按钮
            uniqueId: tableOptions.uniqueId, //每一行的唯一标识，一般为主键列
            cardView: tableOptions.cardView, //是否显示详细视图
            detailView: tableOptions.detailView, //是否显示父子表
            showExport: tableOptions.showExport, //是否显示导出
            exportDataType: tableOptions.exportDataType, //basic', 'all', 'selected'.
            escape: tableOptions.escape,//html转意
            //            align: "center",
            columns: tableOptions.columns,//表格列
            onLoadSuccess: tableOptions.onLoadSuccess
        });
    };
    /*ajax请求*/
    formCore.load = function (id, url, dataToPost, d, type, async) {
        $.ajax({
            url: url,
            cache: false,
            async: async == undefined ? true : async,
            data: dataToPost,
            type: type == undefined ? "POST" : type,
            success: function (data) {
                if (typeof d == "function") {
                    d(data);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (XMLHttpRequest.status == 403) {
                    layer.msg("您没有权限访问，请联系管理员！")
                } else if (XMLHttpRequest.status == 500) {
                    layer.msg("服务器内部错误！")
                } else {
                    layer.msg("服务器未知错误！")
                }
            }
        });
    };
    return formCore;
})
(FormCore, window);

