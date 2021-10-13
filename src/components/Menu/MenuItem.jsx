import React from "react"
import { Fade } from "react-awesome-reveal"
import { useHistory } from "react-router"
import { fade50px } from "../../utils/animation"

export const MenuItem = ({ category: { title, image, id }, index }) => {
  const history = useHistory()

  return (
    <Fade
      keyframes={fade50px}
      duration={500}
      delay={200 + index * 100}
      triggerOnce
    >
      <li
        onClick={() => history.push(`/menu/${id}`)}
        className="w-1/2 mb-4 md:w-3/12 lg:mb-0 lg:w-1/8 group cursor-pointer"
      >
        <div className="flex flex-col items-center h-120">
          <div className="flex-1 flex items-center">
            <img src={image} alt="" />
          </div>
          <div className="">
            <p className="text-sm group-hover:text-primaryColor transition-all font-semibold uppercase">
              {title}
            </p>
          </div>
        </div>
      </li>
    </Fade>
  )
}
