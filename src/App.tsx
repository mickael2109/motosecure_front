import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import HomeRoute from "./routes/HomeRoute"
import Login from "./pages/Auth/Login"

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login/>}/> 
        <Route path="/auth/*" element={<Auth/>}/> 
        <Route path="/home/*" element={<HomeRoute/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
