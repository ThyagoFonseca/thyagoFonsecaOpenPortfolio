import './acervo.css'
import Description from './Description'


export default function Acervo({ image, name, description, tags }) {

    return (
        <section className='acervo-body'>
            <div className='acervo-main'>
                <h3>{name}</h3>
            </div>
            <div className='acervo-container'>
                <div className='acervo-contents'>
                    <img src={image} alt='Imagem da Palha - API' />
                </div>
                <div className='acervo-contents'>
                    <Description APIDescription={description} />
                </div>
            </div>
        </section>
    )
}