import React, { useState } from "react"
import {
  FiArrowLeft,
  FiArrowRight,
  FiX,
  FiZoomIn,
  FiZoomOut,
} from "react-icons/fi"

const ZoomImage = ({ setImageZoom, currentImage, images }) => {
  const [zoomIn, setZoomIn] = useState(false)
  const [currentIndexImg, setCurrentIndexImg] = useState(() => {
    return images.findIndex((item) => item === currentImage)
  })
  return (
    <div
      onClick={() => setImageZoom && setImageZoom(false)}
      className="bg-black fixed top-0 left-0 right-0 bottom-0 z-1000"
    >
      <div className="">
        <p className="absolute text-gray-50 text-sm top-4 left-4 flex items-center">
          {currentIndexImg + 1} <span className="text-10 mx-1">/</span>{" "}
          {images.length}
        </p>
        <div className="absolute top-4 z-50 right-6 flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setZoomIn(false)
            }}
          >
            <FiZoomOut className="text-gray-50 text-xl" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setZoomIn(true)
            }}
            className="mx-6"
          >
            <FiZoomIn className="text-gray-50 text-xl" />
          </button>
          <button
            onClick={() => setImageZoom && setImageZoom(false)}
            className=""
          >
            <FiX className="text-gray-50 text-2xl" />
          </button>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            setZoomIn(false)
            setCurrentIndexImg(currentIndexImg === 1 ? 0 : currentIndexImg + 1)
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
        >
          <FiArrowRight className="text-gray-50 text-2xl pointer-events-none" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            setZoomIn(false)
            setCurrentIndexImg(currentIndexImg === 0 ? 1 : currentIndexImg - 1)
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2  z-50"
        >
          <FiArrowLeft className="text-gray-50 text-2xl pointer-events-none" />
        </button>
      </div>
      <div className="absolute top-1/2 w-full md:w-2/3 lg:w-1/2 flex items-center justify-center transform -translate-y-1/2 -translate-x-1/2 left-1/2">
        <img
          onClick={(e) => {
            e.stopPropagation()
            setZoomIn(!zoomIn)
          }}
          style={{ cursor: `${zoomIn ? "zoom-out" : "zoom-in"}` }}
          className={`w-full h-auto transition-all duration-500 ${
            zoomIn ? "transform scale-150" : "transform scale-100"
          }`}
          src={images[currentIndexImg]}
          alt=""
        />
      </div>
    </div>
  )
}

export default ZoomImage
