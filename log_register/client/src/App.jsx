import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
