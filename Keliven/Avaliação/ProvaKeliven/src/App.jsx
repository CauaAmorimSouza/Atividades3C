import './App.css'
import React from 'react';
import Footer from './component/Footer'; 
import Header from './component/Header'
import Gallery from './component/Gallery';



function App(){
  return (
    <div className="app">
      <header>
        <h1>HAPPY HOUR!!!</h1>
      </header>
      <main>
        <p>Teremos um evento com salgadinho de graça por favor compareça!</p>
      </main>
      <Gallery />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
