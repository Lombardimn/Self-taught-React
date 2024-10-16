import { Profile } from "../Profile/Profile"
import { CallToAction } from "../CallToAction/CallToAtion"
import './card.css'

const Card = () => {
  return (
    <div className="container">
      <Profile />
      <div className="content">
        <CallToAction href="#" rel="noopener noreferrer" >
          GitHub
        </CallToAction>
        <CallToAction href="#" rel="noopener noreferrer" >
          Frontend Mentor
        </CallToAction>
        <CallToAction href="#" rel="noopener noreferrer" >
          Linkedin
        </CallToAction>
        <CallToAction href="#" rel="noopener noreferrer" >
          Twitter
        </CallToAction>
        <CallToAction href="#" rel="noopener noreferrer" >
          Instagram
        </CallToAction>
      </div>
    </div>
  )
}

export { Card }