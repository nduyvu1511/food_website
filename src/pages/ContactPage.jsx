import GoogleMapReact from "google-map-react"
import React from "react"
import PageHeader from "../components/pageHeader/PageHeader"
import { FiSmartphone } from "react-icons/fi"
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi"

const ContactPage = () => {
  const defaultProps = {
    center: {
      lat: 10.7926807,
      lng: 106.6046035,
    },
    zoom: 11,
  }
  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      )
    }
  }

  return (
    <section>
      <PageHeader title="Contact Us" />
      <div className="pt-16 layout">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Call us or visit place</h1>
          <p className="text-sm md:text-15 text-gray-500 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="">
              <FiSmartphone className="text-5xl text-primaryColor" />
            </div>
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4">Phone: </h3>
              <p className="text-gray-500 text-15">+ 44 123 456 78 90</p>
              <p className="text-gray-500 text-15">+ 844 123 444 77 88</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="">
              <HiOutlineLocationMarker className="text-5xl text-primaryColor" />
            </div>
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4">Address: </h3>
              <p className="text-gray-500 text-15">
                Box 565, Pinney's Beach, Charlestown,
              </p>
              <p className="text-gray-500 text-15">
                Nevis, West Indies, Caribbean
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="">
              <HiOutlineMail className="text-5xl text-primaryColor" />
            </div>
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4">Email: </h3>
              <p className="text-gray-500 text-15">contact@example.com</p>
              <p className="text-gray-500 text-15">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:mt-20 md:border rounded-md">
          <div className="h-768">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAzkQW5M0TiKQLRX2qAjlYLenKvZaIew1A",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={11}
              distanceToMouse={distanceToMouse}
            ></GoogleMapReact>
          </div>
          <div className="py-10 sm:px-16 md:px-36 lg:px-16">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">Send us a message</h1>
              <p className="text-sm md:text-15 text-gray-500 mt-4">
                lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
            <div className="mt-12">
              <div className="">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full text-sm text-gray-500 border p-3 rounded-md outline-none"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full text-sm text-gray-500 border p-3 rounded-md outline-none"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full text-sm text-gray-500 border p-3 rounded-md outline-none"
                />
              </div>
              <div className="mt-3">
                <textarea
                  name=""
                  placeholder="Comment"
                  className="w-full text-sm text-gray-500 border p-3 rounded-md outline-none"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="mt-4">
                <button className="btn-primary mx-auto lg:ml-0 uppercase">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
