import './card.css'

interface Props {
  title: string
  children: React.ReactNode
}


const Card = ( { title, children }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export { Card }