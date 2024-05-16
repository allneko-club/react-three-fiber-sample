import Button from 'react-bootstrap/Button'
import {isMobile} from 'react-device-detect';
import {FaExpand, FaStreetView} from 'react-icons/fa';

/*
 フルスクリーン機能はブラウザ版のみ提供する
 */
export default function ViewerController({bgColor, groundColor, onClickGround, fullscreen, setBgColor, setGroundColor}) {
  return (
    <div className="text-center my-2">
      <label className="text-white">
        <input
          id="bg_color_ctrl"
          type="color"
          className="color-picker"
          defaultValue={bgColor}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={"背景色"}
          onChange={e => setBgColor(e.target.value)}
        />
      </label>
      <label className="text-white">
        <input
          id="groundColor_ctrl"
          className="color-picker"
          type="color"
          defaultValue={groundColor}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={"地面色"}
          onChange={e => setGroundColor(e.target.value)}
        />
      </label>
      <Button
        id="ground_btn"
        variant="secondary"
        size="sm"
        data-bs-toggle="button"
        data-bs-placement="top"
        title={"地面"}
        onClick={onClickGround}
      >
        <FaStreetView style={{marginBottom: '2px'}} />
      </Button>{' '}
      {!isMobile &&
        <>
          <Button
          id="fullscreen_btn"
          variant="secondary"
          size="sm"
          data-bs-toggle="button"
          data-bs-placement="top"
          title={"フルスクリーン"}
          onClick={fullscreen}
          >
            <FaExpand style={{marginBottom: '2px'}} />
          </Button>{' '}
        </>
      }
    </div>
  )
}