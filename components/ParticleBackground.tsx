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
              mode: 'bubble',
            },
            onHover: {
              enable: true,
              mode: 'slow',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 60,
              duration: 2,
              opacity: 0.4,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
          },
        },
        particles: {
          color: {
            value: ['#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a'],
          },
          links: {
            enable: false,
          },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 40,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.4,
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.05,
            },
          },
          shape: {
            type: ['polygon', 'circle', 'triangle'],
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            value: {
              min: 20,
              max: 60,
            },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 10,
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 2,
            },
          },
          stroke: {
            width: 1,
            color: '#333333',
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground
