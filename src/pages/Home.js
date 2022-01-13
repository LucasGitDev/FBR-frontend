import { useEffect, useState } from "react";
import Api from "../service/api";
import Item from "../components/Peca/Item";

function Home() {
  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    Api.get("/pecas").then((response) => {
      setPecas(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="" />
      <div>
        {pecas.map((peca) => {
          return <Item key={peca.id} peca={peca} />;
        })}
      </div>
    </div>
  );
}

export default Home;