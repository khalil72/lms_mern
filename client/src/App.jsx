import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth"
import HomePage from "./pages/home"

function App() {
 

  return (
    <>
     <Routes>
     <Route path='/'  exact element={<HomePage />}/>
      <Route path='/auth'  element={<AuthPage />}/>
     </Routes>
    </>
  )
}

export default App
