import { useState } from "react"
import type { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import "./index.scss"

function roundToNearestHalfHour(time: Dayjs): Dayjs {
  const minutes = time.minute();

  if (minutes < 15) {
      return time.startOf('hour'); // Round down to the nearest hour
  } else if (minutes < 45) {
      return time.startOf('hour').add(30, 'minute'); // Round to the next half hour
  } else {
      return time.add(1, 'hour').startOf('hour'); // Round up to the next hour
  }
}

export default function Page() {
  const [time, setTime] = useState<Dayjs>(roundToNearestHalfHour(dayjs()))
  return (
    <div className="Time time">
      <span className="input-title">Time</span>
      <span className="required">*</span>
      <div className="input-container">
        <div className="input-area">
          <div className="right" onClick={() => {setTime(time.subtract(30, 'minute'))}}>
            <svg width="60" height="60" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 43C23.0964 43 17.5 37.4036 17.5 30.5C17.5 23.5964 23.0964 18 30 18C36.9036 18 42.5 23.5964 42.5 30.5C42.5 37.4036 36.9036 43 30 43Z" fill="#48742C"/>
              <path d="M35 28L30 33L25 28" stroke="white"/>
            </svg>
          </div>
          <div className="value">{time.format('HH:mm')}</div>
          <div className="left" onClick={() => {setTime(time.add(30, 'minute'))}}>
            <svg width="60" height="60" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 43C23.0964 43 17.5 37.4036 17.5 30.5C17.5 23.5964 23.0964 18 30 18C36.9036 18 42.5 23.5964 42.5 30.5C42.5 37.4036 36.9036 43 30 43Z" fill="#48742C"/>
              <path d="M35 28L30 33L25 28" stroke="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}