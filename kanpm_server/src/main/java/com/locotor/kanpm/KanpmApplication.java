package com.locotor.kanpm;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@MapperScan("com.locotor.kanpm.mappers")
public class KanpmApplication {

	public static void main(String[] args) {
		SpringApplication.run(KanpmApplication.class, args);
	}

}
