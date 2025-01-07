import "./index.scss"
import Pill from "./Pill"

export default function Page() {
  return (
    <div className="OrderForDelivery order-for-delivery">
        <span className="OrderForDelivery order-for-delivery-text">ORDER FOR DELIVERY!</span>
        <div className="OrderForDelivery pills">
          <Pill msg="Lunch"></Pill>
          <Pill msg="Mains"></Pill>
          <Pill msg="Desserts"></Pill>
          <Pill msg="A La Carte"></Pill>
          <Pill msg="Special"></Pill>
        </div>
      </div>
  )
}