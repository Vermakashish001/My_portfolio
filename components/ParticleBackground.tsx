'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

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
        fpsLimit: 60, // Reduced from 120 for better mobile performance
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 150,
              links: {
                opacity: 0.2,
              },
            },
          },
        },
        particles: {
          color: {
            value: ['#333333', '#444444', '#555555', '#666666', '#777777'],
          },
          links: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: {
              min: 0.5,
              max: 2,
            },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 25, // Fewer, larger geometric shapes
          },
          opacity: {
            value: {
              min: 0.2,
              max: 0.5,
            },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: ['circle', 'triangle', 'polygon'],
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            value: {
              min: 20,
              max: 80,
            },
            animation: {
              enable: true,
              speed: 2,
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
              speed: 5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground
