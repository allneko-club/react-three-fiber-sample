import {useState, useTransition} from 'react'
import {useControls} from 'leva'
import {Environment} from '@react-three/drei'

export function Env() {
  // "inTransition"ブール値を使用して、読み込み中に対応できる. 例) 'Loading...'メッセージを表示する
  const [, startTransition] = useTransition()
  const files = {
    'basic': '/resource/hdr/basic.hdr',
    'night': '/resource/hdr/night.hdr',
    'lobby': '/resource/hdr/st_fagans_interior.hdr',
    'sunset': '/resource/hdr/venice_sunset.hdr',
    'dawn': '/resource/hdr/kiara_1_dawn.hdr',
    'apartment': '/resource/hdr/lebombo.hdr',
    'photostudio': '/resource/hdr/brown_photostudio.hdr',
    }
  const [file, setFile] = useState(files['basic'])
  const { blur, bg } = useControls(
    'env',
    {
    blur: { value: 0.65, min: 0, max: 1 },
    file: {
      value: file,
      options: files,
      onChange: (value) => startTransition(() => setFile(value))
    },
    bg: false,
  })
  return <Environment files={file} background={bg} blur={blur} />
}