import './App.css'
import { useEffect, useState } from 'react'
import Palha from './components/Palha'
import LogoHeader from './assets/LogoLetters.svg'
import Acervo from './components/Acervo'

function App() {

  const [palhas, setPalhas] = useState([])

  useEffect(() => {
    fetch('https://delispalhasitalianas.herokuapp.com/api/palhas/')
      .then(res => res.json())
      .then(data => { setPalhas(data) })
  }, [])

  //Scroll listener
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Scrollcalc = () => {
    const positionHighlights = document.getElementById('01_highlights').getBoundingClientRect()['y']

    const positionCardapio = document.getElementById('02_cardapio').getBoundingClientRect()['y']
    console.log(positionHighlights, positionCardapio)

    if (positionHighlights < 370) {
      document.getElementById('01_highlights').animate(
        [
          {
            opacity: 1,
            easing: 'ease-in-out',
          }
        ],
        {
          duration: 3000,
          iterations: 1,
          fill: 'forwards',
        }
      )
    }

    if (positionCardapio < 0) {
      document.getElementById('01_AboutUs').animate(
        [
          {
            opacity: 1,
            easing: 'ease-in-out',
          }
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: 'forwards',
        }
      )
    }
  }

  //Attach listeners into the div
  useEffect(() => {
    document.addEventListener('scroll', Scrollcalc)
  }, [Scrollcalc])


  return (
    <div className="App">
      <div className='banner-container'>
        <div className='navbar-container'>
          <nav className='navbar'>
            <div className='filter-container'>
              <p>Filtro 1</p>
              <div className='underline'></div>
            </div>

            <div className='filter-container'>
              <p>Filtro 2</p>
              <div className='underline'></div>
            </div>

            <div className='filter-container'>
              <p>Filtro 3</p>
              <div className='underline'></div>
            </div>

            <div className='filter-container'>
              <p>Filtro 4</p>
              <div className='underline'></div>
            </div>
          </nav>
        </div>

        <div className='logo-container'>
          <img src={LogoHeader} alt='Se vc ver isso algo está errado' />
        </div>
      </div>


      <div id='01_highlights' className='highlights-container'>
        <h2>Destaques do momento</h2>
        {/*Collecting data from API */}
        <section id='02_cardapio' className='cardapio'>
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

      <div id='01_AboutUs' className='AboutUs'>
        <h2>Nossas delícias</h2>
        <div className='AboutUs-container'>
          {palhas.map(acervo => (
            <Acervo
              key={acervo.id}
              name={acervo.name}
              description={acervo.description}
              image={acervo.image}
              tags={acervo.tags}
            />
          ))}
        </div>
      </div>

    </div >
  );
}

export default App;
