import { useEffect, useState } from 'react'
// import './App.css'

const pageWidth = 428
// const pageHeight = 926 // actually this does not matter

function WidthCheck({ children } : { children: React.ReactNode }) {
  const [isCorrectSize, setIsCorrectSize] = useState(false);

  const checkSize = () => {
    const width = window.innerWidth
    // const height = window.innerHeight
    setIsCorrectSize(width == pageWidth)
  }

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize)
  }, [])
  return (
    <>
      { isCorrectSize ? children: <span>incorrect diaply size, please change to 428*926(IPhone 14 Plus/IPhone 13 Pro Max)</span>}
    </>
  )
}

export default WidthCheck
