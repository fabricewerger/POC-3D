import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { Color, UniformsUtils, MathUtils } from 'three' // Import the Texture

import vertex from '../../../public/shaders/vertex.js'
import fragment from '../../../public/shaders/fragment.js'
import { OrbitControls } from '@react-three/drei'

const MovingPlane = ({ hover }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  const uniforms = useMemo(() => {
    // Create an object for uniforms using UniformsUtils
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
    uniforms.time.value += delta / 35 // Increment time based on delta for smooth animation

    const targetPosition = hover.current ? 0.5 : 0 // Set the target position based on hover state
    const currentPosition = mesh.current.position.z
    const newPosition = MathUtils.lerp(currentPosition, targetPosition, 0.1)

    mesh.current.position.z = newPosition

    // // Update position based on hover
    // mesh.current.position.z = hover * 1.5 // Adjust the multiplier for desired effect
  }, [])

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      //   onPointerOver={() => (hover.current = true)}
      //   onPointerOut={() => (hover.current = false)}
    >
      <planeGeometry args={[3, 3, 300, 300]} />
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
  const [hover, setHover] = useState(0)

  return (
    <Canvas
      camera={{ position: [0, 0, 2.0] }}
      onPointerMove={(e) => {
        setHover(((e.clientY / window.innerHeight) * 3 - 1) * 0.5) // Adjust the multiplier for desired effect
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0.5, 0, 0.866]} />
      <MovingPlane hover={hover} />
      <OrbitControls />
    </Canvas>
  )
}

export default Stripe
