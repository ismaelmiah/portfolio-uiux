// pages/index.js
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Row1 from './Row1'
import Row2 from './Row2'

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-950 overflow-hidden">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl mt-4">
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
