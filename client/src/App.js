// App.js

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import { AuthProvider } from './context/AuthContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Report from './Pages/Report'
import Loginpage from './Pages/Loginpage'
import Registerpage from './Pages/Registerpage'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />
          <Route
            path="/report"
            element={
              <PrivateRoute>
                <Report />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
