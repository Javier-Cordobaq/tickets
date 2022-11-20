import profilePicture from '../../../assets/profile.svg'
import { ProfileInformationLayout } from '../styled-components'

const ProfileInformation = ({ user, rooms, boxes }) => {
    return (
        <ProfileInformationLayout className="personal_info">
            <div className='profile_picture_container'>
                <img src={profilePicture} alt='' />
            </div>
            <h2>Correo.</h2>
            <p>{user?.email}</p><br />
            <h2>Salas.</h2>
            <p>{rooms?.length}</p><br />
            <h2>Cajas.</h2>
            <p>{boxes?.length}</p>
        </ProfileInformationLayout>
    )
}

export default ProfileInformation