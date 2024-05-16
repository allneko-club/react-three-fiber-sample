import Viewer from '@/components/threejs/Viewer'
import {Header} from '@/components/layout/Header'
import {Footer} from '@/components/layout/Footer'

export default async function Page() {
  const data = {
    model: {url: '/resource/models/dice.glb', position: [0, 0, 0]},
    camera_pos: [1, 2, 4],  // yが上下
    controls_target: [0, 0, 0],
    bgColor: '#ffffff',
    groundColor: '#e5f3ff',
    groundShadowColor: '#ad208a',
    hemiLight: {
      position: [500, 20, 500],
      skyColor: '#000012',
      groundColor: '#eeeeee',
      intensity: 4.0,
    },
    dirLight: {
      position: [500, 20, 500],
      color: '#000000',
      intensity: 0.5,
    },
    fog: {near: 9, far: 10},
  };
  return (
    <div className="body-sub d-flex flex-column h-100 vsc-initialized">
      <Header/>
      <main>
        <div className="container-lg pt-3 px-0 mx-auto">
          <Viewer data={data} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
