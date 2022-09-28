import './App.css'
import { useEffect, useState } from 'react'
import Palha from './components/Palha'

function App() {

  const [palhas, setPalhas] = useState([])

  useEffect(() => {
    fetch('https://delispalhasitalianas.herokuapp.com/api/palhas/')
      .then(res => res.json())
      .then(data => { setPalhas(data) })
  }, [])



  return (
    <div className="App">
      <div className='banner-container'>
        <img src='/images/header/header.jpg' alt='banner da Delis' />
      </div>
      <div className='logo-container'>
        <img src='/images/logo/logo.png' alt='logo da Delis' width={250} />
      </div>

      <section className='cardapio'>
        {palhas.map(palha =>
          (<Palha
            key={palha.id}
            name={palha.name}
            description={palha.description}
            image={palha.image}
            price={palha.price}
          />))}
      </section>
    </div>
  );
}

export default App;
