import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Historia from './components/Historia'
import Produtos from './components/Produtos'
import Processo from './components/Processo'
import Memorial from './components/Memorial'
import Numeros from './components/Numeros'
import Footer from './components/Footer'
import AgeGate from './components/AgeGate'
import Loja from './pages/Loja'

function HomePage() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Produtos />
        <Processo />
        <Memorial />
        <Numeros />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [ageVerified, setAgeVerified] = useState(() => {
    return sessionStorage.getItem('thimotina_age_verified') === 'true'
  })

  const handleAgeConfirm = () => {
    sessionStorage.setItem('thimotina_age_verified', 'true')
    setAgeVerified(true)
  }

  return (
    <BrowserRouter>
      {!ageVerified && <AgeGate onConfirm={handleAgeConfirm} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loja" element={<Loja />} />
      </Routes>
    </BrowserRouter>
  )
}
