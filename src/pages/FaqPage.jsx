import React, { useState } from "react"
import PageHeader from "../components/pageHeader/PageHeader"
import { listFaq } from "../utils/faqList"
import { FaMinus, FaPlus } from "react-icons/fa"

const FaqPage = () => {
  const [questionActive, setQuestionActive] = useState({
    id: null,
    status: false,
  })

  const handleClick = (id) => {
    if (id === questionActive.id) {
      setQuestionActive({
        id: id,
        status: !questionActive.status,
      })
    } else {
      setQuestionActive({
        id: id,
        status: true,
      })
    }
  }

  return (
    <section>
      <PageHeader title="Faq" />
      <div className="pt-20 pb-10 layout">
        <div className="w-full md:w-10/12 xl:w-8/12 mx-auto">
          {listFaq.map((item, index) => (
            <div key={index} className="overflow-hidden mb-3">
              <div
                onClick={() => handleClick(item.id)}
                className={`py-5 px-6 cursor-pointer rounded-md font-bold text-base transition-all duration-300 flex items-center justify-between 
                ${
                  questionActive.id === item.id && questionActive.status
                    ? "bg-primaryColor"
                    : "bg-primaryColorOpacity"
                }`}
              >
                <p className="leading-8">{item.question}</p>

                <div className="ml-4">
                  {questionActive.id === item.id && questionActive.status ? (
                    <FaMinus className="text-base pointer-events-none" />
                  ) : (
                    <FaPlus className="text-base pointer-events-none" />
                  )}
                </div>
              </div>
              <div
                className={`bg-white text-gray-500 transition-all duration-700 text-sm font-medium 
                ${
                  questionActive.id === item.id && questionActive.status
                    ? "max-h-400 visible opacity-100"
                    : "max-h-0 invisible opacity-0"
                }`}
              >
                <p className="font-normal text-sm leading-7 transition-all p-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqPage
