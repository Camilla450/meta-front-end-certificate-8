import littleLemonLogo from "@/assets/littleLemonLogo.png"
import shoppingBasketIcon from "@/assets/shoppingBasketIcon.png"
import threeLinesMenuIcon from "@/assets/threeLinesMenuIcon.png"
import "./index.scss"

export default function Page() {
  return (
    <div className="Header container">
      <div className="menu-icon">
        <img src={threeLinesMenuIcon} alt="menu"/>
      </div>
      <div className="logo">
        <img src={littleLemonLogo} alt="logo" />
      </div>
      <div className="shopping-icon">
        <img src={shoppingBasketIcon} alt="icon" />
      </div>
    </div>
  )
}