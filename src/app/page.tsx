import React from "react"
import SideBar from "../../components/SideBar/SideBar"
import Image from "next/image"


export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row bg-[url('/bg/grey-horizon-4.jpg')] bg-cover -z-10">
      <title>Ashhar</title>
      <SideBar />
      <div className="flex flex-col  w-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center md:items-start w-2/3 pb-16">
          <div className="text-4xl justify-center sm:items-start md:text-7xl text-gray-300 mt-10 pb-6">Hi there!</div>
          <div className=" bg-gray-500/[0.3] p-6">
            <div className="text-xl md:text-3xl mt-2 text-gray-100 ">
              Are you stuck? Do you need your website built and want the experience to be engaging and hassle free? You have reached the right place. I provide a one-stop shop with all the experties reqiured to build one from scratch to deployement.
            </div>
            <div className="flex flex-col sm:flex-row z-50">
              <a href="/Projects" className="button text-sm sm:w-40 z-50 sm:text-2xl rounded-md bg-orange-600 hover:bg-orange-800 text-white py-4 px-4 mt-10 border-2 border-red-700 ">PORTFOLIO</a>
              <a href="/" className="button text-sm sm:w-40 sm:text-2xl z-50 rounded-md bg-gray-200 hover:bg-gray-400 text-black py-4 px-4 mt-2 sm:mt-10 border-2 border-red-700 sm:mx-8 ">HIRE ME</a>
            </div></div></div>
      </div>

    </div>
  )
}