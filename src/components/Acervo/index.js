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
                    <div className='acervo-AboutThis-Button'>
                        <div className='acervo-button' onClick={() => {}}>
                            <p>Icone</p>
                        </div>
                        <div>
                            <p>{description}</p>
                            <p>{tags}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}