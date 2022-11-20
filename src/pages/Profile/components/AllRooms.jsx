import React from 'react'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../../guards/Routes/routes'
import { ClientBoxesLayout } from '../styled-components'
import { FaPlus } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { NoDocuments } from "../../../styled-components";

const AllRooms = ({ rooms }) => {



    return (
        <ClientBoxesLayout>
            <div className='rooms_header_container'>
                <h1>Salas.</h1>
                <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.FORM_ROOM}`}>
                    <div className='button_container'>
                        <button>Crear sala</button>
                        <FaPlus className='plus_icon' />
                    </div>
                </Link>
            </div>
            {
                rooms !== null && rooms.length !== 0 ?
                    rooms.map(c => (
                        <Link className="card" key={c.roomId} to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.ROOM_DETAIL}/${c.roomId}`}>
                            <div>
                                <p>{c.name}</p>
                            </div>
                        </Link>
                    ))
                    :
                    <NoDocuments>
                        <SiGoogleclassroom className="files_icon" />
                        <div>
                            <p>Aun no te tienes</p>
                            <p>ninguna sala</p>
                        </div>
                    </NoDocuments>
            }
        </ClientBoxesLayout>
    )
}

export default AllRooms