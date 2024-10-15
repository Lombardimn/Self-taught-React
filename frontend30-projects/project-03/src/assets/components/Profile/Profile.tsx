import './profile.css'
import avatar from '../../../../public/images/avatar-jessica.jpeg'

const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="profile" />
      <div className="profile-info">
        <h2>Jessica Randall</h2>
        <h3>London, United Kingdom</h3>
        <p>"Front-end developer and avid reader."</p>
      </div>
    </div>
  )
}

export { Profile }