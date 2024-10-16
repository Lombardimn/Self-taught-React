import './card.css'

interface Props {
  title: string
  children: React.ReactNode
}


const Card = ( { title, children }: Props) => {
  return (
    <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <div className='card-content'>
        {children}
      </div>
    </div>
  )
}

export { Card }