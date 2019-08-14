package com.microcompany.tent.model;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Administrator
 * @create 2019/8/4
 * @since 1.0.0
 */
@Data
@TableName("sys_dictionary")
public class Dictionary {
    @TableId
    private String id;
    private String caption;
    private String category;
    private Integer value;
    private String description;
}
