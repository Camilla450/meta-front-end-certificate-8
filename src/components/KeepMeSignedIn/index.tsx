import Checkbox from "../Checkbox";
import "./index.scss"

export default function Page() {
  return (
    <div className="Keep-section keep-section">
      <Checkbox/>
      <span>Keep me signed in on this device</span>
    </div>
  )
}