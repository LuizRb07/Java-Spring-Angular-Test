package com.teste.wk.controller;

import com.teste.wk.model.Candidato;
import com.teste.wk.model.CandidatoInterface;
import com.teste.wk.repository.CandidatoRepository;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/candidato")
@AllArgsConstructor
public class CandidatoController {

    private final CandidatoRepository candidatoRepository;

    @GetMapping
    public @ResponseBody List<Candidato> list() {
        return candidatoRepository.findAll(
            Sort.by(Sort.Direction.ASC, "nome")
        );
    }

    @GetMapping("/GroupByEstado")
    public @ResponseBody List<CandidatoInterface> listGroupByEstado() {
        return candidatoRepository.findAllGroupByEstado();
    }

    @GetMapping("/GroupByFaixaEtaria")
    public @ResponseBody List<CandidatoInterface> listGroupByFaixaetaria() {
        return candidatoRepository.findAllGroupByFaixaEtaria();
    }

    @GetMapping("/GroupByGenero")
    public @ResponseBody List<CandidatoInterface> listGroupByGenero() {
        return candidatoRepository.findAllGroupByGenero();
    }

    @GetMapping("/GroupBySanguineo")
    public @ResponseBody List<CandidatoInterface> listGroupBySangue() {
        return candidatoRepository.findAllGroupBySanguineo();
    }

    @GetMapping("/GroupByReceptor")
    public @ResponseBody List<CandidatoInterface> listGroupByReceptor() {
        return candidatoRepository.findAllGroupByReceptor();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candidato> findById(@PathVariable Long id) {
        return candidatoRepository.findById(id)
            .map(recordFound -> ResponseEntity.ok().body(recordFound))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Candidato create(@RequestBody Candidato candidato) {
        return candidatoRepository.save(candidato);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Candidato> update(
        @PathVariable Long id,
        @RequestBody Candidato candidato
    ) {
        return candidatoRepository.findById(id)
            .map(recordFound -> {
                recordFound.setNome(candidato.getNome());
                recordFound.setCpf(candidato.getCpf());
                recordFound.setRg(candidato.getRg());
                recordFound.setData_nasc(candidato.getData_nasc());
                recordFound.setSexo(candidato.getSexo());
                recordFound.setMae(candidato.getMae());
                recordFound.setPai(candidato.getPai());
                recordFound.setEmail(candidato.getEmail());
                recordFound.setCep(candidato.getCep());
                recordFound.setEndereco(candidato.getEndereco());
                recordFound.setNumero(candidato.getNumero());
                recordFound.setBairro(candidato.getBairro());
                recordFound.setCidade(candidato.getCidade());
                recordFound.setEstado(candidato.getEstado());
                recordFound.setTelefone_fixo(candidato.getTelefone_fixo());
                recordFound.setCelular(candidato.getCelular());
                recordFound.setAltura(candidato.getAltura());
                recordFound.setPeso(candidato.getPeso());
                recordFound.setTipo_sanguineo(candidato.getTipo_sanguineo());
                Candidato updated = candidatoRepository.save(recordFound);
                return ResponseEntity.ok().body(updated);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return candidatoRepository.findById(id)
            .map(recordFound -> {
                candidatoRepository.deleteById(id);
                return ResponseEntity.noContent().<Void>build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
