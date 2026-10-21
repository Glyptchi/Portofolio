import { Link, Route, Routes } from 'react-router'
import Home from './apps/Home.jsx'
import Wave from './apps/Wave.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wave" element={<Wave />} />
        <Route
          path="*"
          element={<p>Halaman tidak ditemukan.</p>}
        />
      </Routes>
    </>
  )
}