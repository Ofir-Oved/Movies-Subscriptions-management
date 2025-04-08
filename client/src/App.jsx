import MainPage from "./mainPage"
import SignIn from "./SignIn"
import {Routes, Route} from "react-router-dom"

function App() {
  //Routes - listen to changes and the url and finds the correct route

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
