import { Toggle } from '../Toggle'
import './acervo.css'

export default function Acervo({ image, name, description, tags }) {
    return (
        <section className='acervo-body'>
            <div className='acervo-container'>
                <div className='acervo-image'>
                    <img src={image} alt='Imagem da Palha - API' />
                </div>
                <div className='acervo-main'>
                    <h3>{name}</h3>
                    <div className='acervo-AboutThis-Content'>
                        <div className='acervo-button'>
                            <Toggle />
                            <p>Saiba mais</p>
                        </div>
                        <div>
                            <p>{description}</p>
                            <p>{tags}</p>
                            {/*Aqui pode ser futuramente um botão que vai para outra tela para a pessoa fazer uma encomenda, um form talvez */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}