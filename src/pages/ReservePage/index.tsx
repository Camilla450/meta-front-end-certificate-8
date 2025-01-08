import Header from "@/components/Header"
import "./index.scss"
// import calendarPic from "@/assets/calendar.svg"
import CalendarSelector from "@/components/CalendarSelector"
import TimeSelector from "@/components/TimeSelector"
import GuestSelector from "@/components/GuestSelector"
import Checkbox from "@/components/Checkbox"
import Button from "@/components/Button"
// import { Link } from "react-router-dom"

export default function Page() {
  return (
    <div className="ReservePage container">
      <Header></Header>
      <div className="main">
        <span className="title">Find your table</span>
        <div className="input">
          <CalendarSelector/>
          <TimeSelector/>
          <GuestSelector/>
        </div>
        <div className="checkboxes">
          <span className="table-optional">TABLE (OPTIONAL)</span>
          <span className="checkbox-title">Inside</span>
          <Checkbox/>
          <span className="checkbox-title">Outside</span>
          <Checkbox/>
          <span className="checkbox-title">Event Zone</span>
          <Checkbox/>
        </div>
        <div className="button-section">
          <Button 
            msg="Place Order" 
            img="src/assets/cycling.png"
            path="/signup"
          />
        </div>
        <div className="img-section">
          <img src="src/assets/reserveImage.png" alt="image"/>
        </div>
      </div>
    </div>
  )
}