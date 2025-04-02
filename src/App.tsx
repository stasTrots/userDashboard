import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard'
import LoginForm from './components/LoginForm/LoginForm'
import UserPage from './components/UserPage/UserPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-info" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
