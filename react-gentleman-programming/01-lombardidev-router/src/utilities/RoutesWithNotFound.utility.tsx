import { Route, Routes } from "react-router-dom"

interface Props {
  // Es el equivalente a React.ReactNode
  children: JSX.Element[] | JSX.Element
}
export function RoutesWithNotFounds ({ children}: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}