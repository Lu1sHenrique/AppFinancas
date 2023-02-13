package com.github.apificancas;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(info = @Info(
        title = "Financas API",
        description = "Some long and useful description",
        version = "v1",
        license = @License(
                name = "Apache 2.0",
                url = "https://www.apache.org/licenses/LICENSE-2.0")))
@SpringBootApplication
public class ApiFicancasApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiFicancasApplication.class, args);
    }
}
