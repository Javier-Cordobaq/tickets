import { CarouselLayout } from '../styled-components';
import share_link from '../../../assets/share_link.svg'
const CarouselOptions = () => {
    return (
        <CarouselLayout>
            <div>
                <div className='section'>
                    <div className='img_container'>
                        <img src={share_link} alt='' />
                    </div>
                    <div>
                        <h2>Obten un enlace para<br /> compartir</h2>
                        <p className="legend">Toca <strong>Nueva sala</strong> para generar un enlace que puedes compartir con las personas que quieres que saquen un turno.</p>
                    </div>
                </div>
            </div>
        </CarouselLayout>
    )
}

export default CarouselOptions;