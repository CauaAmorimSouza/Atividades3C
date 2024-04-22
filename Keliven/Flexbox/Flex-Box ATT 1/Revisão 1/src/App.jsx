import React from 'react';
import Header from './components/Header'
import Gallery from './components/Gallery';
import ListItems from './components/ListItems';
import './App.css'; // Importe estilos globais se necessário

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <ListItems />
    </div>
  );
}

export default App;
