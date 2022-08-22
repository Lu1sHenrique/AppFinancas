package com.github.apificancas.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.github.apificancas")
public class ApiFicancasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiFicancasApplication.class, args);
	}

}
