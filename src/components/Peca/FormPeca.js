import { TextField } from "@mui/material/";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material/";
import "../../assets/CSS/FormPeca.css";
import Api from "../../service/api";

export const FormPeca = (props) => {

    const [id, setId] = useState(Number(props.id));
    const [isCreate, setIsCreate] = useState(id === -1);
    const [peca, setPeca] = useState({})

  useEffect(() => {
    if(id !== -1) {
        Api.getPeca(id).then((response) => {
            setPeca(response);
        });
    } else {
        setPeca({
            nome: "a",
            descricao: "",
            codigo: 0,
            quantidade: 0,
            descricao_completa: '',
            valor_entrada: 0,
            valor_saida: 0,
            quantidade_minima: 0,
            desconto: 0,
            localizacao: '',
            tipo: '',
            data_ultima_remessa: '',
        });
    }
  }, [id]);



  return (
    <form>
      <div>
        <div className="contain">
          <TextField label={"Nome"} required={isCreate} />
          <TextField label={"Código"} required={isCreate} />
          <TextField label={"Descrição simples"} required={isCreate} />
        </div>
        <div className="contain">
          <TextField label={"Posição nas prateleiras"} required={isCreate} />
          <TextField label={"Tipo de peça"} required={isCreate} />
          <TextField label={"Quantidade em Estoque"} required={isCreate} />
          <TextField label={"Quantidade miníma"} required={isCreate} />
        </div>
        <div className="contain">
          <TextField label={"Valor de Custo"} required={isCreate} />
          <TextField label={"Valor de Venda"} required={isCreate} />
          <TextField label={"Desconto à vista"} />
        </div>
      </div>
      <div>
        <TextField label={"Descrição"} />
      </div>
      <div>
        <Button type="submit">Cadastrar</Button>
        <Button variant={"outlined"}>Reset</Button>
      </div>
    </form>
  );
};
