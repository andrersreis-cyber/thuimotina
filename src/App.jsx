import { useState } from 'react'
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

export default function App() {
  useScrollReveal()
  const [ageVerified, setAgeVerified] = useState(() => {
    return sessionStorage.getItem('thimotina_age_verified') === 'true'
  })

  const handleAgeConfirm = () => {
    sessionStorage.setItem('thimotina_age_verified', 'true')
    setAgeVerified(true)
  }

  return (
    <>
      {!ageVerified && <AgeGate onConfirm={handleAgeConfirm} />}
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
