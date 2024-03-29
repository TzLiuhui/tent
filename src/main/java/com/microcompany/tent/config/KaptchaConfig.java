package com.microcompany.tent.config;

import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.Properties;

/**
 * @version V1.0
 * @date 2018年7月11日
 * @author superzheng
 */
@Component
public class KaptchaConfig {  
    @Bean
    public DefaultKaptcha getDefaultKaptcha(){  
        DefaultKaptcha defaultKaptcha = new DefaultKaptcha();
        Properties properties = new Properties();  
        properties.setProperty("kaptcha.border", "no");
        properties.setProperty("kaptcha.border.color", "105,179,90");
        properties.setProperty("kaptcha.textproducer.font.color", "black");
        properties.setProperty("kaptcha.img.width", "200");
        properties.setProperty("kaptcha.img.height", "45");
        properties.setProperty("kaptcha.textproducer.font.size", "36");
        properties.setProperty("kaptcha.textproducer.char.length", "4");
        properties.setProperty("kaptcha.textproducer.font.names", "宋体,楷体,微软雅黑");  
        Config config = new Config(properties);  
        defaultKaptcha.setConfig(config);  
        return defaultKaptcha;
    }  
}  