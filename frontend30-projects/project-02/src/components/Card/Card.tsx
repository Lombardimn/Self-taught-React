import { Profile } from "../Profile/Profile"
import "./card.css"

interface Props {
  children: React.ReactNode
  image: string
  imgAlt: string
  activity?: string
  published?: string
}

const Card = ( { children, image, imgAlt, activity, published }: Props) => {
  return (
    <div className="container">
      <div className="image">
        <img src={image} alt={imgAlt} />
      </div>
      <div className="content">
        <div className="header-card">
          <div className="activity">{activity}</div>
          <div className="published">{published}</div>
        </div>
        {children}
      </div>
      <Profile />
    </div>
  )
}

export { Card }