import notFound from '../assets/404.svg'
import { NotFoundLayout } from '../styled-components'

const NotFound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NotFoundLayout>
                <div className='not_found_content'>
                    <img src={notFound} alt='' />
                    <h1>Not found</h1>
                </div>
            </NotFoundLayout>
        </div>
    )
}

export default NotFound