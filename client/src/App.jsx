import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth"

import { AuthContext } from "./context/auth-context"
import { useContext } from "react";
import RouteGuard from "./components/routes-guard";
import InstructorsDashboard from "./pages/instructors";
import StudentHomePage from "./pages/student/home";
import NotFoundPage from "./pages/not-found";
import StudentCommonLayout from "./components/student-view/common-layout";

function App() {
 const { auth } = useContext(AuthContext);
 console.log('auth',auth);

  return (
    <>
     <Routes>
   
      <Route path='/auth'  
      element={
        <RouteGuard 
        element={<AuthPage />}
        authenticated={auth?.authenticate}
        user={auth?.user}
        />
      }
      />
      <Route path='/instructor'  element={
        <RouteGuard 
        element={<InstructorsDashboard />}
        authenticated={auth?.authenticate}
        user={auth?.user}
        />
      }
      />
      <Route path='/'  element={
        <RouteGuard 
        element={<StudentCommonLayout />}
        authenticated={auth?.authenticate}
        user={auth?.user}
        />
      }
      
      >

     
        <Route path='' exact element={<StudentHomePage />} />
        <Route path='home' element={<StudentHomePage />} />
        <Route path= '' element={<NotFoundPage /> }/>
        </Route>

    
     </Routes>
    </>
  )
}

export default App
