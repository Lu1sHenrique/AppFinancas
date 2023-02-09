package com.github.apificancas;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(info=@Info(title="Financas API"))
@SpringBootApplication
public class ApiFicancasApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiFicancasApplication.class, args);
    }
}
