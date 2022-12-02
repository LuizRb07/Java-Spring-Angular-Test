package com.teste.wk.repository;

import com.teste.wk.model.Candidato;
import com.teste.wk.model.CandidatoInterface;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {
    @Query(value = "SELECT * FROM vwCandidato_group_estado", nativeQuery = true)
    List<CandidatoInterface> findAllGroupByEstado();

    @Query(value = "SELECT * FROM vwCandidato_group_faixa_etaria", nativeQuery = true)
    List<CandidatoInterface> findAllGroupByFaixaEtaria();

    @Query(value = "SELECT * FROM vwCandidato_group_genero", nativeQuery = true)
    List<CandidatoInterface> findAllGroupByGenero();

    @Query(value = "SELECT * FROM vwCandidato_group_tipo_sanguineo", nativeQuery = true)
    List<CandidatoInterface> findAllGroupBySanguineo();

    @Query(value = "SELECT * FROM vwCandidato_group_receptor", nativeQuery = true)
    List<CandidatoInterface> findAllGroupByReceptor();
}
