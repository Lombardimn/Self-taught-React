import './nutrition.css'

interface Props {
  data: {[ key: string ]: string}
}

const Nutrition = ({ data }: Props) => {
  return (
    <section className='container'>
      <h2>Nutrición</h2>
      <table>
        <tbody>
          {
            data && Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                <td>{value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export { Nutrition }