import {Suspense, useState} from 'react'
import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Leva, useControls} from 'leva'

import {Env, GLTFModel, Loader, MyDirectionalLight, MyGround, Suzi} from '@/components/threejs'

export default function MyCanvas({useGround, bgColor, groundColor, data}) {
  const [exposure, setExposure] = useState(0.6)
  const {shadowColor} = useControls(
    'etc',
    {
      shadowColor: data.groundShadowColor,
      exposure: {
        value: exposure, min: 0, max: 2, step: 0.1,
        onChange: (value) => setExposure(value),
      },
    }
  )
  const [, setOrbitControls]  = useControls('OrbitControls',
    () => ({
    position: [0.0, 0.0, 0.0],
    target: data.controls_target,
  }))
  const hemiLightProps  = useControls('hemiLights',
    {
      skyColor: data.hemiLight.skyColor,
      groundColor: data.hemiLight.groundColor,
      intensity: {value: data.hemiLight.intensity, min: 0, max: 5, step: 0.1},
    })
  const onChangeOrbitControls = (e) => {
    setOrbitControls({
      position: e.target.object.position.toArray(),
      target:  e.target.target.toArray(),
    })
  }

  return (
    <div id="canvas-container">
      <Canvas
        shadows
        gl={{toneMapping: THREE.LinearToneMapping, toneMappingExposure:exposure}}
        camera={{ position: data.camera_pos, near: 0.1, far: 100 }}
      >
        <OrbitControls
          onChange={onChangeOrbitControls} target={data.controls_target}
          dampingFactor={0.5} panSpeed={0.5} rotateSpeed={0.5} zoomSpeed={0.5}
        />
        <Suspense fallback={<Loader />}>
          <color attach="background" args={[bgColor]} />
          <fog attach="fog" color={bgColor} near={data.fog.near} far={data.fog.far} />
          <hemisphereLight position={data.hemiLight.position} {...hemiLightProps} />
          <MyDirectionalLight {...data.dirLight}/>
          {useGround && <MyGround groundColor={groundColor} shadowColor={shadowColor} />}
          <Env />
          <GLTFModel position={data.model.position} url={data.model.url} />
        </Suspense>

        <Suzi otation={[-0.63, 0, 0]} position={[1.5, 0, -0.5]} scale={0.5} />

      </Canvas>
      <Leva/>
    </div>
  )
}