import {useGLTF} from '@react-three/drei'
import {useLayoutEffect} from 'react'

export function GLTFModel({url, ...props}) {
  const dracoURL = 'https://www.gstatic.com/draco/versioned/decoders/1.5.5/';
  const { scene } = useGLTF(url, dracoURL, true);

  useLayoutEffect(() => {
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
  })


  return <primitive object={scene} {...props} />
}
