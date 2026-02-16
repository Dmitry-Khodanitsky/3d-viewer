import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {
  OrbitControls,
  Bounds,
  Environment,
  useProgress,
  Wireframe,
} from '@react-three/drei'
import { SceneLight, Mesh, Camera, Toolbar } from '@/entities/'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { selectCameraView } from '@/entities/Camera/model/cameraSlice'
import { LoadingOverlay, Paper, Stack } from '@mantine/core'

export const Viewport = () => {
  const isOrthographic = useSelector(selectCameraView)
  const { active } = useProgress()

  return (
    <Paper w="100%" h="90vh">
      <Stack h="100%" pb="xs" gap="0">
        <Suspense
          fallback={
            <LoadingOverlay
              visible={active}
              zIndex={1000}
              overlayProps={{ radius: 'sm', blur: 2 }}
            />
          }
        >
          <Canvas>
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
            <EffectComposer>
              <Bloom
                luminanceThreshold={2.5} // Порог выше 1.0 отсекает обычные белые блики
                luminanceSmoothing={0.1} // Делаем границу свечения четче (меньше "мыла")
                intensity={0.5} // Уменьшаем общую силу ореола
                radius={0.4} // Компактный радиус (ореол не на пол-экрана)
                mipmapBlur
              />
            </EffectComposer>
          </Canvas>
          <Toolbar />
        </Suspense>
      </Stack>
    </Paper>
  )
}
