import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds, Environment } from '@react-three/drei'
import { SceneLight, Mesh } from '@/entities/'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { selectCameraView } from '@/entities/Camera/model/viewportSlice'
import { Camera } from '@/entities/Camera/ui/Camera'
import { Container } from '@mantine/core'

export const Viewport = () => {
  const isOrthographic = useSelector(selectCameraView)

  return (
    <Container h='75vh'>
      <Canvas style={{ background: 'gray' }}>
        {/* Добавляет свет и отражения типа "город" */}
        <Camera />
        <Suspense fallback={null}>
          <Environment files="/gard.hdr" />
        </Suspense>

        <OrbitControls minDistance={1} maxDistance={10} />
        <SceneLight />

        <Bounds fit observe margin={2}>
          <Mesh />
        </Bounds>

        <axesHelper args={[10]} />
      </Canvas>
    </Container>
  )
}
