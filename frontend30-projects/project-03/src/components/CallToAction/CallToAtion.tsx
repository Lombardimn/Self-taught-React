import './callToAction.css'

interface Props {
  href: string | '#';
  target?: string
  rel?: string
  children?: React.ReactNode
}

const CallToAction = ({ href, target, rel, children } : Props) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className='cto'
    >
      {children}
    </a>
  )
}

export { CallToAction }
