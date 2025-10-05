import './assets/css/style.css'
import Login from './components/auth_components/Login';
import Register from './components/auth_components/Register';
import Footer from './components/base_components/Footer';
import Header from './components/base_components/Header';
import Main from './components/Main'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from './providers/AuthProvider';

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
