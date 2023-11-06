import { Link } from '../components/Link'
import { i18n } from '../utils/language'

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>Lombardi Router 📡</h1>
      <section>
        <h2>{i18n.title}</h2>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/129490797?v=4'
            alt='Foto de perfil de Lombardi Matias'
          />
          <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
      </section>
    </>
  )
}
