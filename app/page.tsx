// pages/index.js
import Footer from './Footer'
import Navbar from './Navbar'
import Row1 from './Row1'
import Row2 from './Row2'

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-[#0A0F14] overflow-hidden">
      <div className="w-full max-w-4xl mt-4">
        <Navbar />
        <main className="py-4">
          <Row1 />
          <Row2 />
        </main>
        <Footer />
      </div>
    </div>
  )
}
