import './App.css'
import Cabecalho from './components/Cabecalho.jsx'
import Galeria from './components/Galeria.jsx'
import Lista from './components/Lista.jsx'
import Rodape from './components/Rodape.jsx'

function App(){
  return(
    <div> 
      <Cabecalho />
      <Galeria />
      <Lista />
      <Rodape />
    </div>
  )
}

export default App