package com.microcompany.tent.controller;

import com.microcompany.tent.model.Dictionary;
import com.microcompany.tent.service.IDictoryService;
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
@RequestMapping("/dictionary")
public class DictionaryController {
    @Autowired
    private IDictoryService dictoryService;

    /*权限列表数据*/
    @GetMapping("/list")
    @ResponseBody
    public List<Dictionary> getAll() {
        List<Dictionary> dictList = new ArrayList<Dictionary>();
        dictList = dictoryService.list();
        return dictList;
    }

    @RequestMapping()
    private String dictionary() {
        return "/user/dictionary";
    }

    @RequestMapping("/detail")
    private String dictionaryDetail() {
        return "/user/dictionaryDetail";
    }

    @RequestMapping("/getOne")
    private String getOne(Model model, String id) {
        Dictionary dict = dictoryService.getById(id);
        model.addAttribute("dictionary", dict);
        return "/user/dictionaryDetail";
    }
}
