import './Card.css'

interface Props {
  image: string
  imgAlt: string
  children?: React.ReactNode
}

const Card = ({ image, imgAlt, children }: Props) => {

  return (
    <div className="container">
      <div className="image">
        <img src={image} alt={imgAlt} />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export { Card }