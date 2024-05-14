import {useEffect} from 'react'
import {Html, useProgress} from '@react-three/drei'

export function Loader() {
  const { progress, errors } = useProgress()

  useEffect(()=>{
    errors.length && console.log(errors);
  }, [errors])

  return (
    <Html wrapperClass="fullscreen" className="canvas-loader" center>
      {progress.toFixed(1)} % loaded
    </Html>
  )
}