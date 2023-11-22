import { UserKey, createUser, resetUser } from "../../redux/states/user"
import { PrivateRoutes, PublicRoutes, Roles } from "../../models"
import { clearLocalStore } from "../../utilities"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getMorty } from "../../services"
import { useEffect } from "react"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    clearLocalStore(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  },[])

  const getLogin = async () => {
    try {
      const result = await getMorty()
      
      // este seria el proceso normal, pero para el test cargamos los datos a mano
      // dispatch(createUser(result))
      dispatch(createUser({...result, rol: Roles.ADMIN}))
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
    } catch (error) {
      console.log('Error en getLogin (creacteUser): ',error)
    }
  }
  return (
    <>
      <h2>Usted no se encuentra logeado, por favor inicie sesión</h2>
      <button onClick={getLogin}>Login</button>
    </>
  )
}

export default Login