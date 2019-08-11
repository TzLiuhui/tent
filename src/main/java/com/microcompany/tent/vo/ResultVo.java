package com.microcompany.tent.vo;
/**
 * @version V1.0
 * @date 2018年7月11日
 * @author superzheng
 */
public class ResultVo<T> {
    private Integer status;
    private String msg;
    private T data;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public ResultVo(Integer status, String msg, T data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

}
