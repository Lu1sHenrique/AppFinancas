package com.github.apificancas.status;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
public class StatusRecurso {
    @GetMapping
    public ResponseEntity<String> status(){
        return ResponseEntity.ok("Aplicacao Funcionando");
    }
}
