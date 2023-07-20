import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { Color, UniformsUtils, MathUtils } from 'three'
import vertex from '../../../public/shaders/vertex.js'
import fragment from '../../../public/shaders/fragment.js'

const MovingPlane = ({ hover }) => {
  const mesh = useRef()
  const uniforms = useMemo(() => {
    return UniformsUtils.merge([
      {
        time: {
          value: 0.0,
        },
      },
      {
        uColor: {
          value: [
            new Color('#5E4130'),
            new Color('#FDCBAD'),
            new Color('#78C0A8'),
            new Color('#F07918'),
            new Color('#F09A30'),
          ],
        },
      },
    ])
  }, [])

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value = uniforms.time.value
    uniforms.time.value += delta / 55

    const targetPosition = hover.current ? 0.5 : 0 // Set the target position based on hover state
    const currentPosition = mesh.current.position.z
    const newPosition = MathUtils.lerp(currentPosition, targetPosition, 0.1)

    mesh.current.position.z = newPosition

    // Update camera position based on hover
    state.camera.position.z = MathUtils.lerp(state.camera.position.z, 2.0 - hover.current * 0.5, 0.1)
  })

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <planeGeometry args={[6, 6, 300, 300]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
        wireframe={false}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      />
    </mesh>
  )
}

const Stripe = () => {
  const hover = useRef(0)

  return (
    <Canvas
      className='!absolute !h-[300px] !w-[500px]'
      camera={{ position: [0, 0, 0] }}
      onPointerMove={(e) => {
        hover.current = ((e.clientY / window.innerHeight) * 3 - 1) * 0.5
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0.5, 0, 0.866]} />
      <MovingPlane hover={hover} />
    </Canvas>
  )
}

export default Stripe
