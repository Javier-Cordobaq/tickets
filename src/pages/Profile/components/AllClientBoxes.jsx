import { useEffect } from "react";
import { useState } from "react";
import { ImFilesEmpty } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../../guards/Routes/routes";
import { getClientBoxesService } from "../services";
import { ClientBoxesLayout, NoDocuments } from "../styled-components";

const AllClientBoxes = () => {

    const [boxes, setBoxes] = useState(null)
    const user = useSelector(state => state.user)

    const getClientBoxes = async () => {
        const data = await getClientBoxesService(user?.email)
        try {
            if (data.data.length !== 0) {
                setBoxes(data.data)
            }
        }
        catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getClientBoxes();
        console.log('Se repite?')
    }, [user])

    return (
        <ClientBoxesLayout>
            <h1>Cajas.</h1>
            {
                boxes !== null ?
                    boxes.map(c => (
                        <Link className="card" key={c.id} to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.STAFF_BOX}/${c.roomId}`}>
                            <div>
                                <p>{c.email}</p>
                            </div>
                        </Link>
                    ))
                    :
                    <NoDocuments>
                        <ImFilesEmpty className="files_icon" />
                        <div>
                            <p>Aun no te han agregado</p>
                            <p>a ninguna caja</p>
                        </div>
                    </NoDocuments>
            }
        </ClientBoxesLayout >
    )
}

export default AllClientBoxes