package com.microcompany.tent.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.microcompany.tent.model.DbPage;
import com.microcompany.tent.service.IDbPageService;
import com.microcompany.tent.util.ResultUtil;
import com.microcompany.tent.vo.PageResultVo;
import com.microcompany.tent.vo.ResultVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Administrator
 * @create 2019/8/4
 * @since 1.0.0
 */
@Controller
@RequestMapping("/dbpage")
public class DbPageController {
    @Autowired
    private IDbPageService dbPageService;

    /*权限列表数据*/
    @GetMapping("/list")
    @ResponseBody
    public List<DbPage> getAll() {
        List<DbPage> dbPageList = new ArrayList<DbPage>();
        dbPageList = dbPageService.list();
        return dbPageList;
    }

    @RequestMapping()
    private String dbpage() {
        return "/user/dbpage";
    }

    @GetMapping("/page")
    @ResponseBody
    public PageResultVo selectPage(Integer limit, Integer offset) {
        IPage<DbPage> dbpageList = dbPageService.page(new Page<DbPage>(offset / limit + 1, limit));
        return new PageResultVo(dbpageList.getRecords(), dbpageList.getTotal());
    }

    @RequestMapping("/getById")
    private String getOne(Model model, Integer id) {
        DbPage dbPage = null;
        if (!"0".equals(id)) {
            dbPage = dbPageService.getById(id);
        }
        model.addAttribute("dbPage", dbPage);
        return "/user/editDbPage";
    }

    @RequestMapping("/save")
    @ResponseBody
    private ResultVo save(DbPage dbPage) {
        boolean cnt = dbPageService.saveOrUpdate(dbPage);
        if (cnt) {
            return ResultUtil.success("保存用户成功！");
        } else {
            return ResultUtil.error("保存用户失败");
        }
    }
}
