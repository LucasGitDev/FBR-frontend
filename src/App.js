import './App.css';
import Api from './service/api';
import React, { useEffect, useState } from 'react';
import Item from './components/Peca/Item';

function App() {

  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    Api.get('/pecas').then(response => {
      setPecas(response.data);

    });
  }, []);

  return (
    <div className="App">
      <header className=""/>
      <div>
        {
          pecas.map(peca => {
            return <Item key={peca.id} peca={peca}/>
          })
        }
      </div>

    </div>
  );
}

export default App;
