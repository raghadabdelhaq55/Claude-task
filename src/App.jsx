import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <footer className="bg-white py-4 text-center text-sm text-gray-500">
        Italy Special Trips
      </footer>
    </div>
  )
}
