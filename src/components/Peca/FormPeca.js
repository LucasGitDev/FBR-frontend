import { TextField } from "@mui/material/";
import React, { useEffect, useState } from "react";
import { Button, Alert } from "@mui/material/";
import "../../assets/CSS/FormPeca.css";
import Api from "../../service/api";

const pecaModel = {
  nome: "",
  descricao: "",
  codigo: "",
  quantidade: "",
  descricaoCompleta: "",
  valorEntrada: "",
  valorSaida: "",
  quantidadeMinima: "",
  desconto: "",
  localizacao: "",
  tipo: "",
  data_ultima_remessa: "",
};

export const FormPeca = (props) => {
  const [id, setId] = useState(Number(props.id));
  const [isCreate, setIsCreate] = useState(id === -1);
  const [peca, setPeca] = useState(
    id !== -1
      ? Api.getPeca(id).then((response) => {
          setPeca(response);
        })
      : pecaModel
  );

  const incompleto = false

  useEffect(() => {
    peca.data_ultima_remessa = '2020-01-01'
  }, [peca]);

  function handleChange(evt) {
    const value = evt.target.value;
    setPeca({
      ...peca,
      [evt.target.name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if(peca !== pecaModel) {

      peca.quantidade = Number(peca.quantidade)
      peca.quantidadeMinima = Number(peca.quantidadeMinima)
      peca.valorEntrada = Number(peca.valorEntrada)
      peca.valorSaida = Number(peca.valorSaida)
      peca.desconto = Number(peca.desconto)


      if (isCreate) {
        Api.createPeca(peca).then((response) => {
          console.log(response);
        });
      } else {
        Api.updatePeca(peca).then((response) => {
          console.log(response);
        });
      }
    } else {
      incompleto = true
    }
  }

  return (
    <form>
      <div>
        <div className="contain">
          <TextField
            label={"Nome"}
            name="nome"
            value={peca.nome}
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Código"}
            name="codigo"
            value={peca.codigo}
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Descrição simples"}
            value={peca.descricao}
            name="descricao"
            onChange={handleChange}
            required={isCreate}
          />
        </div>
        <div className="contain">
          <TextField
            label={"Posição nas prateleiras"}
            value={peca.localizacao}
            name="localizacao"
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Tipo de peça"}
            value={peca.tipo}
            name="tipo"
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Quantidade em Estoque"}
            type={isCreate ? "number" : "text"}
            value={peca.quantidade}
            name="quantidade"
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Quantidade miníma"}
            type={isCreate ? "number" : "text"}
            value={peca.quantidadeMinima}
            name="quantidadeMinima"
            onChange={handleChange}
            required={isCreate}
          />
        </div>
        <div className="contain">
          <TextField
            label={"Valor de Custo"}
            type={isCreate ? "number" : "text"}
            name="valorEntrada"
            value={peca.valorEntrada}
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Valor de Venda"}
            type={isCreate ? "number" : "text"}
            value={peca.valorSaida}
            name="valorSaida"
            onChange={handleChange}
            required={isCreate}
          />
          <TextField
            label={"Desconto à vista"}
            type={isCreate ? "number" : "text"}
            value={peca.desconto}
            name="desconto"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <TextField
          label={"Descrição"}
          value={peca.descricaoCompleta}
          name="descricaoCompleta"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button type="submit" onClick={handleSubmit}>Cadastrar</Button>
        <Button variant={"outlined"}>Reset</Button>
        {/* <Alert severity="error" hidden={incompleto}>Preencha todos os campos</Alert> */}
      </div>
    </form>
  );
};
