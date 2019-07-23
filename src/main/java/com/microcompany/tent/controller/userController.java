package com.microcompany.tent.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author superzheng
 * @version V1.0
 * @date 2018年7月13日
 */
@Controller
public class userController {

    /*首页*/
    @RequestMapping(value = {"/sy"})
    public String user() {
        return "/index/sy";
    }
    @RequestMapping(value = {"/user"})
    public String userper() {
        return "/user/user";
    }

}
