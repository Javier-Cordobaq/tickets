import { ImFilesEmpty } from "react-icons/im";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../../guards/Routes/routes";
import { NoDocuments } from "../../../styled-components";
import { ClientBoxesLayout } from "../styled-components";

const AllClientBoxes = ({ boxes }) => {

    return (
        <ClientBoxesLayout>
            <h1>Cajas.</h1>
            {
                boxes !== null ?
                    boxes.map(c => (
                        <Link className="card" key={c.id} to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.STAFF_BOX}/${c.roomId}/${c.categorie}`}>
                            <div>
                                <p>{c.email}</p>
                                <p>{c.roomName}</p>
                                <p>{c.categorie}</p>
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