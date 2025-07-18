import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth/Auth"

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Auth/>}/> 
        {/* <Route path="/home/*" element={<HomeRoute/>}/>   */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
