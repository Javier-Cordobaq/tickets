import { Link, useParams } from 'react-router-dom'
import { PrivateRoutes } from '../../guards/Routes/routes';
import QRCode from 'qrcode'
import { useEffect, useState } from 'react';
import { getUsers } from './services/get-users.service';
import { RoomDetailLayout } from './styled-components/room-detail-layout.styled';
import { Button } from '../../styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, Toaster } from 'react-hot-toast'
import { PaleteColors } from '../../palete-colors/palete-colors';
import { FiDownload } from "react-icons/fi";
import TableUsers from './components/TableUsers';
import { getRoomDetailsService } from './services';

const RoomDetail = () => {

  const [users, setUsers] = useState(null)
  const [roomId, setRoomId] = useState(null)
  const { id } = useParams();
  const [qrcode, setQRCode] = useState('')
  const url = `${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/home`

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err)
      setQRCode(url)
    })
  }

  const getRoomsUsers = async () => {
    const data = await getUsers(id)
    try {
      setUsers(data.data)
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const getRoomDetail = async () => {
    const roomDetail = await getRoomDetailsService(id)
    try {
      setRoomId(roomDetail.data)
    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    generateQRCode();
    getRoomsUsers();
    getRoomDetail();
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Toaster
        position='bottom-center'
      />
      <RoomDetailLayout>
        <div>
          <h1>Room Details.</h1>
          <p>Room name: </p>

        </div>
        <div>
          <p>Puedes compartir el <strong>codigo QR</strong> o compartir <strong>el link</strong> para que las personas saquen su turno.</p>
          <Link to={url}>Link</Link>
        </div>
        <div>
          <h2>QR.</h2>
          <img src={qrcode} alt='' />
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
        <div className='table_container'>
          <TableUsers users={users} />
        </div>
      </RoomDetailLayout>
    </div>
  )
}

export default RoomDetail