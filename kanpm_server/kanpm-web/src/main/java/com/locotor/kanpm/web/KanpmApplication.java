package com.locotor.kanpm.web;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@MapperScan(basePackages = "com.locotor.kanpm.mapper")
public class KanpmApplication {

	public static void main(String[] args) {
		SpringApplication.run(KanpmApplication.class, args);
	}

}
