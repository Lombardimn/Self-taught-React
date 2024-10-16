import './hero.css'

interface Props {
  title: string
  description: string
  imgUrl: string
}

const Hero = ({ title, description, imgUrl }: Props) => {
  return (
    <header className='hero'>
      <img src={imgUrl} alt={title} />
      <section className='content'>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </header>
  )
}

export { Hero }