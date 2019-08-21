package com.microcompany.tent.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.microcompany.tent.dao.DbPageMapper;
import com.microcompany.tent.model.DbPage;
import com.microcompany.tent.service.IDbPageService;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 * @create 2019/7/30
 * @since 1.0.0
 */
@Service
public class DbPageServiceImpl extends ServiceImpl<DbPageMapper, DbPage> implements IDbPageService {
}
