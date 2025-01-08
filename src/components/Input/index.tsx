import { Input } from "antd"
import { useState } from "react"
import "./index.scss"

export default function Page({title}: {title: string}) {
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>("")
  return (
    <div className="Input date">
      <span className="input-title">{title}</span>
      <span className="required">*</span>
      <div className={(visible && text == "") ? "not-satisfied input-container" : " satisfied input-container"}>
        <div className="input-area">
          <Input placeholder="" value={text} onClick={() => setVisible(true)} onChange={(v) => setText(v.currentTarget.value)}/>
          <div className="dropdown" onClick={() => setVisible(!visible)}>
            <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.36206 19.7108C2.46877 21.1393 3.55373 22.3256 4.96563 22.5679C6.27434 22.7925 7.62266 23 9 23C10.3773 23 11.7257 22.7925 13.0344 22.5679C14.4463 22.3256 15.5312 21.1393 15.6379 19.7108C15.8114 17.3882 16 14.9754 16 12.5C16 10.0246 15.8114 7.61178 15.6379 5.2892C15.5312 3.86065 14.4463 2.67436 13.0344 2.43209C11.7257 2.20752 10.3773 2 9 2C7.62266 2 6.27434 2.20752 4.96563 2.43209C3.55373 2.67436 2.46877 3.86065 2.36206 5.2892C2.18856 7.61178 2 10.0246 2 12.5C2 14.9754 2.18856 17.3882 2.36206 19.7108Z" fill="#FCFCFE" stroke="#48742C" strokeOpacity="0.6" strokeWidth="3"/>
              <path d="M9 9.63L9 6.99432" stroke="#48742C" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {(visible && text == "") ? <span className="additional-text">You have to input something</span> : null}
      </div>
    </div>
  )
}