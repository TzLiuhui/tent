package com.microcompany.tent.model;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author Administrator
 * @create 2019/8/4
 * @since 1.0.0
 */
@Data
@TableName("frame_dictionary")
public class Dictionary {
    private String id;
    private String caption;
    private String category;
    private Integer value;
    private String description;
}
