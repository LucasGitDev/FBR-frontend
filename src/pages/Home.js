import { useEffect, useState } from "react";
import Api from "../service/api";
import Item from "../components/Peca/Item";
import { TextField, Button } from "@mui/material/";

function Home() {
  const [pecas, setPecas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Api.getPecas().then((response) => {
      setPecas(response);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

  return (
    <div className="">
      <header className="" />
      <div>
        <div
          className="barra-busca"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Buscar"
            variant="outlined"
            onChange={handleSearch}
            style={{
              width: "100%",
              margin: "10px",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={async (e) => {
              if (search === "") {
                let pcs = await Api.getPecas();
                setPecas(pcs);
              } else {
                let pecas = await Api.searchPecas(search);
                setPecas(pecas);
              }
            }}
          >
            Go!
          </Button>
        </div>

        {pecas.map((peca) => {
          return <Item key={peca.id} peca={peca} />;
        })}
      </div>
    </div>
  );
}

export default Home;
