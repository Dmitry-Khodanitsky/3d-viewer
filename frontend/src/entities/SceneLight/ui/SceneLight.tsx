export const SceneLight = () => {
  return (
    <>
      {/* Common light */}
      <ambientLight intensity={4}/>
      {/*  Key Light */}
      <directionalLight
        intensity={2.5}
        color="0xffffff"
        position={[10, 15, 10]}
      />
      {/* Fill Light */}
      <directionalLight
        intensity={5}
        color="0xffffff"
        position={[-15, 5, 10]}
      />

      {/* Back / Rim Light */}
      <directionalLight intensity={5} color="0xffffff" position={[0, 10, 20]} />
    </>
  )
}
