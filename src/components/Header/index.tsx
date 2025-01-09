import littleLemonLogo from "@/assets/littleLemonLogo.png"
import shoppingBasketIcon from "@/assets/shoppingBasketIcon.png"
import threeLinesMenuIcon from "@/assets/threeLinesMenuIcon.png"
import "./index.scss"
import { Link } from "react-router-dom"

export default function Page() {
  return (
    <div className="Header container">
      <Link className="menu-icon" to="/">
        <img src={threeLinesMenuIcon} alt="menu"/>
      </Link>
      <div className="logo">
        <img src={littleLemonLogo} alt="logo" />
      </div>
      <div className="shopping-icon">
        <img src={shoppingBasketIcon} alt="icon" />
      </div>
    </div>
  )
}