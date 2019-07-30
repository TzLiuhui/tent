package com.microcompany.tent.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.microcompany.tent.dao.PermMapper;
import com.microcompany.tent.model.Perm;
import com.microcompany.tent.service.IPermService;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 * @create 2019/7/30
 * @since 1.0.0
 */
@Service
public class PermServiceImpl extends ServiceImpl<PermMapper, Perm> implements IPermService {
}
