package com.microcompany.tent.model;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;
import java.util.Date;

/**
 * @author superzheng
 * @version V1.0
 * @date 2018年7月11日
 */
@Slf4j
@Data
@TableName("permission")
public class Perm implements Serializable {
    private Integer id;

    private String permissionId;

    private String name;

    private String description;

    private String url;

    private String perms;

    private Integer parentId;

    private Integer type;

    private Integer orderNum;

    private String icon;
    private Integer status;

    private Date createTime;

    private Date updateTime;


}