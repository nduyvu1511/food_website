import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { FaAngleUp } from "react-icons/fa"

const ButtonScrollToTop = () => {
  const [prevScoll, setPrevScroll] = useState({
    visible: false,
  })
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 500) {
      setPrevScroll({ visible: true })
    } else {
      setPrevScroll({ visible: false })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll()
    })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <button
      onClick={() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }}
      className={`fixed rounded-full bottom-20 hover:bg-primaryColorHover z-100 lg:bottom-4 duration-300 shadow-xl w-10 h-10 bg-primaryColor
       flex items-center justify-center transition-all transform ${
         prevScoll.visible
           ? "right-2 lg:right-6 opacity-100"
           : "-right-3 opacity-0"
       }`}
    >
      <FaAngleUp className="text-white text-xl" />
    </button>
  )
}

export default ButtonScrollToTop
