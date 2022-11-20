import { toast } from 'react-hot-toast'
import { Button } from '../../../styled-components'
import { FiDownload } from "react-icons/fi";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PaleteColors } from '../../../palete-colors/palete-colors';
import { Link } from 'react-router-dom';

const SharingMethods = ({ qrcode, url }) => {
    return (
        <>
            <div>
                <p>Puedes compartir el <strong>codigo QR</strong> o compartir <strong>el link</strong> para que las personas saquen su turno.</p>
                <Link to={url}>Link</Link>
            </div>
            <div className='qrCode_container'>
                <h2>QR.</h2>
                <div className='qrCode'>
                    <img src={qrcode} alt='' />
                </div>
                <Button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Descargar <FiDownload /></Button>
            </div>

            <div className='link_container'>
                <div>
                    <h2>Copiar Link.</h2>
                </div>
                <p>{url}</p>
                <CopyToClipboard text={`http://localhost:5173${url}`}>
                    <Button onClick={() => toast('Se copio el link',
                        {
                            icon: '👍',
                            style: {
                                borderRadius: '2rem',
                                background: `${PaleteColors.PRIMARY_BLUE}`,
                                boxShadow: `0 0 10px ${PaleteColors.PRIMARY_BLUE}`,
                                color: '#fff',
                            },
                        })}>Copiar Link</Button>
                </CopyToClipboard>
            </div>
        </>
    )
}

export default SharingMethods