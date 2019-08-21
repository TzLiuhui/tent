package com.microcompany.tent.model;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * ()
 *
 * @author Administrator
 * @create 2019/8/12
 * @since 1.0.0
 */
@TableName("dbpage")
@Data
public class DbPage {
    @TableId
    private Integer id;
    private String dbName;
    private String tabName;
    private Long lastUpdate;
    private Integer cnt;
    private double rmb;
    private Integer sumSize;
    //@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
}
