import { useGLTF } from '@react-three/drei'
export const ModelRenderer = ({ url }: { url: string }) => {
  // Хук теперь вызывается без условий выше
  const { scene } = useGLTF(url)

  // Выполняем настройки материала (лучше через useEffect или один раз)
  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      const mat = obj.material
      mat.alphaMode = 'MASK'
      mat.alphaTest = 0.5
      mat.transparent = false
      mat.depthWrite = true
      mat.depthTest = true

      const isGlass =
        mat.name.toLowerCase().includes('glass') || mat.opacity < 1
      if (isGlass) {
        mat.transparent = true
        mat.opacity = mat.opacity || 0.5
        mat.alphaMode = 'BLEND' // Важно для плавного стекла
        mat.depthWrite = false // Для стекла лучше false, чтобы видеть объекты за ним
        mat.roughness = 0.1
      }
    }
  })

  return (
    <primitive
      object={scene}
      rotation-y={Math.PI}
      position={[0, 0, 0]}
      // Убираем мелкий масштаб 0.5, чтобы модель точно была видна
      scale={1}
    />
  )
}
