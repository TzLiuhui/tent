package com.microcompany.tent.util;


import com.microcompany.tent.vo.PageResultVo;
import com.microcompany.tent.vo.ResultVo;

import java.util.List;

/**
 * @version V1.0
 * @date 2018年7月11日
 * @author superzheng
 */
public class ResultUtil{

	public static ResultVo success(){
		return vo(CoreConst.SUCCESS_CODE,null,null);
	}

	public static ResultVo success(String msg){
		return vo(CoreConst.SUCCESS_CODE, msg,null);
	}

	public static ResultVo success(String msg, Object data){
		return vo(CoreConst.SUCCESS_CODE, msg, data);
	}

	public static ResultVo error(){
		return vo(CoreConst.FAIL_CODE,null,null);
	}

	public static ResultVo error(String msg){
		return vo(CoreConst.FAIL_CODE, msg,null);
	}

	public static ResultVo error(String msg, Object data){
		return vo(CoreConst.FAIL_CODE, msg,data);
	}

	public static PageResultVo table(List<?> list, Long total){
		return new PageResultVo(list, total);
	}

	public static ResultVo vo(Integer status, String message, Object data) {
		return new ResultVo<>(status, message, data);
	}



}
