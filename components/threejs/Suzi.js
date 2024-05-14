import * as THREE from 'three'
import {useLayoutEffect} from 'react'
import {applyProps} from '@react-three/fiber'
import {useGLTF} from '@react-three/drei'
import {FlakesTexture} from 'three-stdlib'

export function Suzi(props) {
  const { scene, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf')
  useLayoutEffect(() => {
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    applyProps(materials.default, {
      color: 'orange',
      roughness: 0,
      normalMap: new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping),
      'normalMap-repeat': [40, 40],
      normalScale: [0.05, 0.05]
    })
  })
  return <primitive object={scene} {...props} />
}