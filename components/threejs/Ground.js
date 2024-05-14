// chromeでは GL_INVALID_OPERATION: Active draw buffers...という警告が出るが、
// 公式のサンプルも同様の警告が出るため問題なしとする

/*
 meshを使った地面
 AccumulativeShadowsのチラつきを抑えるためにposition=[0, -0.01, 0]にしている
 */
function GroundByMesh({scale, color}) {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2}  position={[0,-0.01,0]}>
      <planeGeometry attach="geometry" args={[scale, scale]}/>
      <meshStandardMaterial color={color} attach="material"/>
    </mesh>
  )
}

export function MyGround({groundColor, shadowColor}) {
  return (
    <>
      <GroundByMesh scale={40} color={groundColor} />
    </>
  )
}

/*
  MyAccumulativeShadowsを使うとブラウザで警告が出るため使用中止
  代わりにdirectionalLightで影を落とすようにする
 */
export function MyDirectionalLight({position, color, intensity}) {
  return (
    <directionalLight
      castShadow
      color={color}
      position={position}
      intensity={intensity}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      shadow-camera-near={0.1}
      shadow-camera-bias={-0.001}
    />
  )
}
