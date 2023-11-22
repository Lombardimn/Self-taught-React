import { UserKey, resetUser } from "../../redux/states/user"
import { clearLocalStore } from "../../utilities"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"
import { useDispatch } from "react-redux"

export function Logout () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    clearLocalStore(UserKey)
    dispatch(resetUser())
    navigate(PublicRoutes.LOGIN , {replace: true})
  } 

  return (
    <>
      <button onClick={logOut}>Logout</button>
    </>
  )
}