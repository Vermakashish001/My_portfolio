'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  // Conditional FPS based on screen size
  const getFPSLimit = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 768) return 30        // Mobile: 30 FPS
      if (width < 1024) return 45       // Tablet: 45 FPS
      if (width < 1440) return 60       // Desktop: 60 FPS
      return 120                        // Large Desktop: 120 FPS
    }
    return 60 // Default fallback
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: getFPSLimit(),
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            grab: {
              distance: 200,
              links: {
                opacity: 0.6,
                color: '#ffffff',
              },
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            enable: true,
            distance: 150,
            color: '#666666',
            opacity: 0.25,
            width: 1.5,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.7,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground
