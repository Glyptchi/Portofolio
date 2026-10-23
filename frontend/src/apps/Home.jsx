import React from 'react'
import { useEffect, useRef } from 'react'
import './Home.css'

const Home = () => {
    const glowRef = useRef(null)

    useEffect(() => {
        const glow = glowRef.current

        function moveGlow(event) {
            glow.style.setProperty('--x', `${event.clientX}px`)
            glow.style.setProperty('--y', `${event.clientY}px`)
        }

        window.addEventListener('pointermove', moveGlow)

        return () => {
            window.removeEventListener('pointermove', moveGlow)
        }
    }, [])

  return (
  <div className="isolate">
    <div
      ref={glowRef}
      className="cursor-glow pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />

    <main className="relative z-10">
      <h1 className="text-6xl font-semibold tracking-tight py-40 px-80">
        Almas Yafi'
      </h1>
    </main>
  </div>
)
}

export default Home