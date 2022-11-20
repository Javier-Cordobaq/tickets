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
import AddCashier from './components/AddCashier';
import { SharingMethods } from './components';

const RoomDetail = () => {

  // States
  const [users, setUsers] = useState(null)
  const [room, setRoom] = useState(null)
  const [qrcode, setQRCode] = useState('')
  const [window, setWindow] = useState(false)

  const { id } = useParams();
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
      setRoom(roomDetail.data[0])
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
        <div className='details_shareMethods'>

          <div className='section'>
            <h1>Room Details.</h1>
            <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.SHIFTS_ORDERED}/${room?.roomId}`}>
              <p style={{ color: '#000010' }}><strong>Vista turnos</strong></p>
            </Link>
            <p>Room name: {room?.name}</p>
            <p>Cantidad tickets: {users?.length}</p>
          </div>

          <div className='share_cashiers_section section'>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Compartir.</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Button onClick={() => setWindow(!window)}>Compartir.</Button>
                  <Button onClick={() => setWindow(!window)}>Cajeros.</Button>
                </div>
              </div>
            </div>
            {
              window === false ?
                <SharingMethods qrcode={qrcode} url={url} />
                :
                <AddCashier room={room} />
            }
          </div>
        </div>

        <div className='table_container'>
          <h1>Tabla turnos.</h1>
          <TableUsers users={users} />
        </div>

      </RoomDetailLayout>
    </div>
  )
}

export default RoomDetail