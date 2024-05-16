"use client"
/*
  fullscreen: https://www.npmjs.com/package/react-full-screen
 */
import {useState} from 'react'
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import MyCanvas from '@/components/threejs/MyCanvas'
import ViewerController from '@/components/threejs/ViewerController'


export default function Viewer({data}){
  const [useGround, setUseGround] = useState(true)
  const [bgColor, setBgColor] = useState(data.bgColor)
  const [groundColor, setGroundColor] = useState(data.groundColor)
  const onClick = () => setUseGround(!useGround)
  const handle = useFullScreenHandle();

  return (
    <>
      <FullScreen handle={handle}>
        <MyCanvas
          useGround={useGround}
          bgColor={bgColor}
          groundColor={groundColor}
          data={data}
        />
      </FullScreen>
      <ViewerController
          bgColor={bgColor}
          groundColor={groundColor}
          onClickGround={onClick}
          fullscreen={handle.enter}
          setBgColor={setBgColor}
          setGroundColor={setGroundColor}
      />
    </>
  )
}