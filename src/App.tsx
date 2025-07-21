import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import HomeRoute from "./routes/HomeRoute"

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<Auth/>}/> 
        <Route path="/*" element={<HomeRoute/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
