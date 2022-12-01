package com.teste.wk.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.teste.wk.model.Candidato;
import com.teste.wk.repository.CandidatoRepository;

@Service
public class CandidatoService {
    private final CandidatoRepository candidatoRepository;

    public CandidatoService(CandidatoRepository candidatoRepository) {
        this.candidatoRepository = candidatoRepository;
    }

    public Iterable<Candidato> list() {
        return candidatoRepository.findAll();
    }

    public Candidato save(Candidato candidato) {
        return candidatoRepository.save(candidato);
    }

    public void save(List<Candidato> candidatos) {
        candidatoRepository.saveAll(candidatos);
    }    
}
