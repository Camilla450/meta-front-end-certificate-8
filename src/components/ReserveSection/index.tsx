import reserveSectionImg from "@/assets/reserveSectionImg.png"
import "./index.scss"
import { Link } from "react-router-dom"

export default function Page() {
  return (
    <div className="reserve-section">
        <div className="title-section">
          <span className="title">Little Lemon</span>
          <span className="subtitle">Chicago</span>
        </div>
        <div className="home-section">
          <div className="description">
            <span className="description-text">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </span>
          </div>
          <img src={reserveSectionImg} alt="image" className="image"/>
        </div>
        <Link className="button" to="/reserve">
          <span>Reserve a table</span>
        </Link>
      </div>
  )
}