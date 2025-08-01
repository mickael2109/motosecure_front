import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeRoute from "./routes/HomeRoute"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import ProtectedRoute from "./components/routes/ProtectedRoute"

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/home/*"
          element={
            <ProtectedRoute>
              <HomeRoute />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
