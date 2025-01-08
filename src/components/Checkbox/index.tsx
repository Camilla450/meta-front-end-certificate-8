import { useState } from "react"
import "./index.scss"

export default function Page() {
  const [checked, setChecked] = useState<boolean>(true)
  return (
    checked ? 
    <div className="Checkbox checkbox" onClick={() => setChecked(false)}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 0.5C5.6 0.5 0 6.1 0 13C0 19.9 5.6 25.5 12.5 25.5C19.4 25.5 25 19.9 25 13C25 6.1 19.4 0.5 12.5 0.5ZM10 19.25L3.75 13L5.5125 11.2375L10 15.7125L19.4875 6.225L21.25 8L10 19.25Z" fill="#48742C"/>
      </svg>
    </div>
    :
    <div className="Checkbox checkbox" onClick={() => setChecked(true)}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2375 6.975L10 15.2125L5.5125 10.7375L3.75 12.5L10 18.75L20 8.75L18.2375 6.975ZM12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM12.5 22.5C6.975 22.5 2.5 18.025 2.5 12.5C2.5 6.975 6.975 2.5 12.5 2.5C18.025 2.5 22.5 6.975 22.5 12.5C22.5 18.025 18.025 22.5 12.5 22.5Z" fill="#48742C"/>
      </svg>
    </div>
  )
}