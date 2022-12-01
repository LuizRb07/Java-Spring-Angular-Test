package com.teste.wk;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teste.wk.service.CandidatoService;
import com.teste.wk.model.Candidato;

@SpringBootApplication
public class LuizribeiroSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(LuizribeiroSpringApplication.class, args);
	}
	@Bean
	CommandLineRunner runner(CandidatoService candidatoService){
	    return args -> {
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Candidato>> typeReference = new TypeReference<List<Candidato>>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/json/candidatos.json");
			try {
				List<Candidato> candidatos = mapper.readValue(inputStream,typeReference);
				candidatoService.save(candidatos);
				System.out.println("JSON de candidatos armazenados com sucesso.");
			} catch (IOException e){
				System.out.println("Erro ao armazenar candidatos: " + e.getMessage());
			}
	    };
	}
}
