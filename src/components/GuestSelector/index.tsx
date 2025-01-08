import { useState } from "react"
import "./index.scss"

export default function Page() {
  // const [visible, setVisible] = useState<boolean>(false);
  const [guest, setGuest] = useState<number>(1)
  const [visible, setVisible] = useState<boolean>(false)
  const listItems = Array.from({ length: 10 }, (_, index) => (
    <span key={index} onClick={() => setGuest(index+1)}>{index + 1}</span>
));
  return (
    <div className="Guest guest">
      <span className="input-title">Guest</span>
      <span className="required">*</span>
      <div className="input-container">
        <div className="input-area">
          <div className="icon">
            <svg width="20" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.00003 2C6.79089 2 5.00003 3.79086 5.00003 6C5.00003 8.20914 6.79089 10 9.00003 10C11.2092 10 13 8.20914 13 6C13 3.79086 11.2092 2 9.00003 2ZM12.641 10.7694C14.075 9.67298 15 7.94452 15 6C15 2.68629 12.3137 0 9.00003 0C5.68632 0 3.00003 2.68629 3.00003 6C3.00003 7.94452 3.92504 9.67298 5.35904 10.7694C4.35357 11.2142 3.42854 11.8436 2.63607 12.636C2.02414 13.248 1.50938 13.939 1.1018 14.6851C0.349687 16.0619 0.656413 17.4657 1.50343 18.4584C2.31883 19.414 3.62505 20 5.00003 20H13C14.375 20 15.6812 19.414 16.4966 18.4584C17.3437 17.4657 17.6504 16.0619 16.8983 14.6851C16.4907 13.939 15.9759 13.248 15.364 12.636C14.5715 11.8436 13.6465 11.2142 12.641 10.7694ZM9.00003 12C7.14352 12 5.36304 12.7375 4.05028 14.0503C3.57428 14.5263 3.17397 15.0637 2.85699 15.6439C2.55002 16.2058 2.64905 16.7198 3.02484 17.1602C3.43224 17.6376 4.16587 18 5.00003 18H13C13.8342 18 14.5678 17.6376 14.9752 17.1602C15.351 16.7198 15.45 16.2058 15.1431 15.6439C14.8261 15.0637 14.4258 14.5263 13.9498 14.0503C12.637 12.7375 10.8565 12 9.00003 12Z" fill="#AAAAAA"/>
            </svg>
          </div>
          <div className="value">{guest}</div>
          <div className="dropdown" onClick={() => setVisible(!visible)}>
            <svg width="60" height="60" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 43C23.0964 43 17.5 37.4036 17.5 30.5C17.5 23.5964 23.0964 18 30 18C36.9036 18 42.5 23.5964 42.5 30.5C42.5 37.4036 36.9036 43 30 43Z" fill="#48742C"/>
              <path d="M35 28L30 33L25 28" stroke="white"/>
            </svg>
          </div>
        </div>
        {visible ? <div className="list"><ul className="list-list">
          {listItems}
        </ul></div> : null}
      </div>
    </div>
  )
}