package com.microcompany.tent.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.microcompany.tent.dao.DictionaryMapper;
import com.microcompany.tent.model.Dictionary;
import com.microcompany.tent.service.IDictoryService;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 * @create 2019/7/30
 * @since 1.0.0
 */
@Service
public class DictionaryServiceImpl extends ServiceImpl<DictionaryMapper, Dictionary> implements IDictoryService {
}
