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
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            bubble: {
              distance: 200,
              size: 8,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'],
          },
          links: {
            enable: false, // Disable links for star effect
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: {
              min: 0.1,
              max: 0.5,
            },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 150, // More particles for dense starfield
          },
          opacity: {
            value: {
              min: 0.3,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: 0.5,
              max: 2.5,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
        },
        // Add falling comets as a second emitter
        emitters: [
          {
            autoPlay: true,
            fill: true,
            life: {
              wait: false,
            },
            rate: {
              quantity: 1,
              delay: 3, // New comet every 3 seconds
            },
            shape: 'square',
            startCount: 0,
            size: {
              mode: 'percent',
              height: 0,
              width: 0,
            },
            position: {
              x: {
                random: true,
                value: 0,
              },
              y: {
                random: false,
                value: 0,
              },
            },
            particles: {
              color: {
                value: ['#ffdd44', '#ffaa44', '#ff8844', '#ffffff'],
              },
              links: {
                enable: false,
              },
              move: {
                angle: {
                  offset: 45,
                  value: 135,
                },
                direction: 'bottom-right',
                enable: true,
                speed: {
                  min: 5,
                  max: 15,
                },
                outModes: {
                  default: 'destroy',
                },
                trail: {
                  enable: true,
                  length: 20,
                  fillColor: {
                    value: '#000000',
                  },
                },
              },
              number: {
                value: 1,
              },
              opacity: {
                value: {
                  min: 0.5,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0,
                  destroy: 'min',
                },
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: {
                  min: 2,
                  max: 4,
                },
              },
              life: {
                duration: {
                  sync: false,
                  value: {
                    min: 3,
                    max: 7,
                  },
                },
                count: 1,
              },
            },
          },
        ],
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground
