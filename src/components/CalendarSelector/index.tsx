import { Calendar } from "antd"
import { useState } from "react"
import type { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import "./index.scss"

export default function Page() {
  const [visible, setVisible] = useState<boolean>(false);
  const [date, setDate] = useState<Dayjs>(dayjs())
  return (
    <div className="Date date">
      <span className="input-title">Date</span>
      <span className="required">*</span>
      <div className="input-container">
        <div className="input-area">
          <div className="icon">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0.5C6.05228 0.5 6.5 0.947715 6.5 1.5V2.5H13.5V1.5C13.5 0.947715 13.9477 0.5 14.5 0.5C15.0523 0.5 15.5 0.947715 15.5 1.5V2.52469C18.0267 2.77555 20 4.90733 20 7.5V16.5C20 19.2614 17.7614 21.5 15 21.5H5C2.23858 21.5 0 19.2614 0 16.5V7.5C0 4.90733 1.97334 2.77555 4.5 2.52469V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5ZM2.17071 6.5H17.8293C17.4175 5.33481 16.3062 4.5 15 4.5H5C3.69378 4.5 2.58254 5.33481 2.17071 6.5ZM18 8.5H2V16.5C2 18.1569 3.34315 19.5 5 19.5H15C16.6569 19.5 18 18.1569 18 16.5V8.5ZM4 11.5C4 10.9477 4.44772 10.5 5 10.5H15C15.5523 10.5 16 10.9477 16 11.5C16 12.0523 15.5523 12.5 15 12.5H5C4.44772 12.5 4 12.0523 4 11.5Z" fill="#AAAAAA"/>
            </svg>
          </div>
          <div className="value">{date.format('DD/MM/YYYY')}</div>
          <div className="dropdown" onClick={() => setVisible(!visible)}>
            <svg width="60" height="60" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 43C23.0964 43 17.5 37.4036 17.5 30.5C17.5 23.5964 23.0964 18 30 18C36.9036 18 42.5 23.5964 42.5 30.5C42.5 37.4036 36.9036 43 30 43Z" fill="#48742C"/>
              <path d="M35 28L30 33L25 28" stroke="white"/>
            </svg>
          </div>
        </div>
        {visible ? <Calendar fullscreen={false} value={date} onSelect={(date) => {setDate(date); setVisible(false)}}/> : null}
      </div>
    </div>
  )
}