import { useEffect, useState } from 'react'
// import './App.css'

const pageWidth = 428
const pageHeight = 926 // actually this does not matter

function WidthCheck({ children } : { children: React.ReactNode }) {
  const [isCorrectSize, setIsCorrectSize] = useState(false);

  const checkSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    setIsCorrectSize(width == pageWidth && height == pageHeight)
    if (isCorrectSize == false) {
      alert("from author: please be aware that the UX/UI assignment before uses 428*926 viewport, although it will not affect the app as the 428*926 region has border black, and the rest is left blank intentionally")
    }
  }

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize)
  }, [])
  return (
    <>
      { isCorrectSize ? 
      <div id="base-container">{children}</div>
      : 
      <div id="base-container"><div id="page">{children}</div></div>}
    </>
  )
}

export default WidthCheck
