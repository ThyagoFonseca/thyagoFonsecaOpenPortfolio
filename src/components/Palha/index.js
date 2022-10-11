import './Palha.css'


export default function Palha({ name, image, price }) {
    return (
        <div className='palha'>
            <div className='image-container'>
                <img src={image} alt='Imagem da palha vinda da API' />
            </div>
            <div className='content-container'>
                <h3 className='name'>
                    {name}
                </h3>
                <h3 className='price'>
                    R$ {price}
                </h3>
            </div>
        </div>
    )
}