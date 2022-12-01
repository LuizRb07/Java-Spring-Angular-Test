package com.teste.wk.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_candidato")
public class Candidato {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 60, nullable = false)
	private String nome;
	
	@Column(length = 14, unique = true, nullable = false)
	private String cpf;
	
	@Column(length = 12, unique = true, nullable = false)
	private String rg;
	
	@JsonProperty("data_nasc")
	@JsonFormat(pattern="dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	@Column(nullable = false)
	private Date nascimento;
	
	@Column(length = 9, nullable = false)
	private String sexo;
	
	@Column(length = 60, nullable = false)
	private String mae;
	
	@Column(length = 60, nullable = false)
	private String pai;
	
	@Column(length = 100, unique = true, nullable = false)
	private String email;
	
	@Column(length = 9, nullable = false)
	private String cep;
	
	@Column(length = 60, nullable = false)
	private String endereco;
	
	@Column(length = 5, nullable = false)
	private String numero;
	
	@Column(length = 50, nullable = false)
	private String bairro;
	
	@Column(length = 50, nullable = false)
	private String cidade;
	
	@Column(length = 2, nullable = false)
	private String estado;
	
	@JsonProperty("telefone_fixo")
	@Column(length = 14)
	private String telefone;
	
	@Column(length = 15, unique = true, nullable = false)
	private String celular;
	
	@Column(columnDefinition = "DECIMAL(3,2)", precision = 3, scale = 2, nullable = false) 
	private Float altura;
	
	@Column(columnDefinition = "SMALLINT", nullable = false)
	private Short peso;
	
	@JsonProperty("tipo_sanguineo")
	@Column(length = 3, nullable = false)
	private String  sangue;
}