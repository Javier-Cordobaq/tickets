import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../../guards'
import { Button } from '../../../styled-components'
import { getLastTurnService } from '../services'
import { CategorieLayout } from '../styled-components'

const Categorie = ({ id, room, type, setType }) => {

    const handleCategorie = (categorie) => {
        setType({
            ...type,
            shiftLetter: categorie
        })
    }

    return (
        <CategorieLayout>
            <h1>Categoria.</h1>
            <div className='buttons_container'>
                {
                    room !== null ?
                        room[0]?.meetCategorie?.map(c => (
                            <Link key={c.id} to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/details`}>
                                <Button onClick={() => handleCategorie(c.id)}>{c.name}</Button>
                            </Link>
                        )) :
                        <h1>Cargando...</h1>
                }
            </div>
        </CategorieLayout>
    )
}

export default Categorie