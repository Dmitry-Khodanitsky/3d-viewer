import {
  PerspectiveCamera,
  OrthographicCamera,
  CameraControls,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCameraView } from '@/entities/Camera/model/cameraSlice'
import * as THREE from 'three'

export const Camera = () => {
  const controlsRef = useRef(null)
  const { camera } = useThree()
  const isOrtho = useSelector(selectCameraView)
  return <PerspectiveCamera makeDefault fov={100} position={[2, 2, 2]} />
}
