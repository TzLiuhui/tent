package com.microcompany.tent.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @version V1.0
 * @date 2018年7月13日
 * @author superzheng
 */
@Controller
public class RenderController {

    /*首页*/
    @RequestMapping(value={"/login"})
    public String login(){
        return "system/login";
    }

}
