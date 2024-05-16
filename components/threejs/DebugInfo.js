import {useEffect} from 'react'
import {useThree} from '@react-three/fiber'

export function DebugInfo(){
  const state = useThree();
  useEffect(() => {
    console.log(state.gl.info);
  }, [state]);
  return null
}
