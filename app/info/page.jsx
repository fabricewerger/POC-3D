'use client'
import { MathUtils } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment } from '@react-three/drei'
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'
import About from '@/components/About/About'

const particles = Array.from({ length: 150 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10),
}))

export default function Page() {
  return (
    <>
      <div className='absolute z-[500] w-full'>
        <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row lg:w-4/5'>
          <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
            <p className='w-full uppercase'>Youwe + React Three Fiber</p>
            <h1 className='my-4 text-5xl font-bold leading-tight'>Info</h1>
            <p className='mb-8 text-2xl leading-normal'>
              Multiple examples of usecases for ThreeJS and R3F. Usecases meant for e-commerce, focused on interaction
              and user experience.
            </p>
          </div>
        </div>
      </div>
      <About about={'3D bubbles which use Math for trajectory. Simple but interesting backdrop.'} />

      <Canvas shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 50, position: [0, 0, 20] }}>
        <color attach='background' args={['#f0f0f0']} />
        <fog attach='fog' args={['red', 20, -5]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Bubbles />
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={6} intensity={2} color='red' />
          <TiltShift2 blur={0.1} />
        </EffectComposer>
        <Environment preset='city' />
      </Canvas>
    </>
  )
}

function Bubbles() {
  const ref = useRef()
  useFrame(
    (state, delta) =>
      void (ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta,
      )),
  )
  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 2.5, 0]}>
      <sphereGeometry args={[0.45, 64, 64]} />
      <meshStandardMaterial roughness={1} color='#f0f0f0' />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 4,
    )
  })
  return <Instance ref={ref} />
}
