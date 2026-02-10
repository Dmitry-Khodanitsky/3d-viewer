import { Suspense } from 'react'
import { ModelRenderer } from './ModelRenderer'
import { useSelector } from 'react-redux'
import { selectModelUrl } from '@/entities/Mesh/model/meshSlice'

export const Mesh = () => {
  const modelUrl = useSelector(selectModelUrl)

  if (!modelUrl) return null

  return (
    <Suspense fallback={null}>
      <ModelRenderer url={modelUrl} />
    </Suspense>
  )
}
