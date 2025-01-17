import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

// pages
import Login from './components/pages/Auth/Login.jsx'
import Register from './components/pages/Auth/Register.jsx'
import Home from './components/pages/Home.jsx'
import Container from './components/layout/Container'

import { UserProvider } from './context/UserContext.jsx'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
