import DateTime from '../DateTime/DateTime'
import './panel.scss'

const Panel = () => {
  return (
    <div className="panel">
      <i className="ri-centos-fill icon"></i>
      <div className="center date">
          <DateTime />
      </div>
      <div className="right tray">
        <i className="ri-bluetooth-fill icon"></i>
        <i className="ri-wifi-fill icon"></i>
        <i className="ri-battery-charge-fill icon"></i>
      </div>
    </div>
  )
}

export default Panel