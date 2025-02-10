import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

// pages
import Login from './components/pages/Auth/Login.jsx'
import Register from './components/pages/Auth/Register.jsx'
import Home from './components/pages/Home.jsx'
import Profile from './components/pages/User/Profile.jsx'
import Container from './components/layout/Container'
import Message from './components/layout/Message.jsx'

import { UserProvider } from './context/UserContext.jsx'
import MyPets from './components/pages/Pet/MyPets.jsx'
import AddPet from './components/pages/Pet/AddPet.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import EditPet from './components/pages/Pet/EditPet.jsx'
import PetDetails from './components/pages/Pet/PetDetails.jsx'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/pet/mypets" element={<MyPets />} />
            <Route path="/pet/add" element={<AddPet />} />
            <Route path="/pet/edit/:id" element={<EditPet />} />
            <Route path="/pet/:id" element={<PetDetails />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
