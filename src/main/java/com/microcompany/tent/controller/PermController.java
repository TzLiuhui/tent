package com.microcompany.tent.controller;


import com.microcompany.tent.model.Perm;
import com.microcompany.tent.service.IPermService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @version V1.0
 * @date 2018年7月11日
 * @author superzheng
 */
@Slf4j
@Controller
@RequestMapping("/permission")
public class PermController {
    @Autowired
    private IPermService permService;

    /*权限列表数据*/
    @GetMapping("/list")
    @ResponseBody
    public List<Perm> loadPermissions(String flag){
        List<Perm> permList = new ArrayList<Perm>();
            permList = permService.list();
        return permList;
    }
}
