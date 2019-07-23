package com.microcompany.tent.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author superzheng
 * @version V1.0
 * @date 2018年7月13日
 */
@Controller
public class RenderController {

    /*首页*/
    @RequestMapping(value = {"/login"})
    public String login() {
        return "system/login";
    }

    @GetMapping("/index")
    public String index() {
        return "index/index";
    }
}
