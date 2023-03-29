import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaCopyright } from "react-icons/fa"

export default function SideBar() {
    return (
        <div className="flex flex-col w-full h-auto sm:w-1/5 sm:h-screen justify-center bg-lime-500/[0.3] text-white z-40">
            <div className="w-full flex items-center justify-center">
                <div className="h-40 w-40 bg-white rounded-full flex items-center justify-center my-4 mt-16 overflow-hidden">
                    <Image
                        src="/DSC_0777.JPG"
                        alt="Profile Picture"
                        width={150}
                        height={150}
                        className='rounded-full'
                    />
                </div>
            </div>
            <h1 className="text-white flex text-3xl font-bold mt-4 justify-center">Ashhar</h1>
            <p className="text-white text-lg flex justify-center text-center mt-6">Web-dev.</p>
            <p className="text-white text-lg flex justify-center text-center mb-6">From scratch to deployment</p>
            <div className="flex flex-col text-lg w-full justify-start sm:items-start mt-8 mb-8">
                <Link href="/" className="w-full hover:text-gray-900  hover:bg-gradient-to-b from-gray-500 to-lime-500">
                    <div className="py-2 mx-16  text-xl px-2">Home</div>
                </Link>
                <Link href='/Projects'  className="w-full hover:text-gray-900 hover:bg-gradient-to-b from-gray-500 to-lime-500">
                    <div className="py-2 mx-16 text-xl px-2">Projects</div>
                </Link>
                <Link href="/Experience"  className="w-full hover:text-gray-900 hover:bg-gradient-to-b from-gray-500 to-lime-500">
                    <div className="py-2 mx-16 text-xl px-2">Companies</div>
                </Link>
                <Link href="/Works"  className="w-full hover:text-gray-900 hover:bg-gradient-to-b from-gray-500 to-lime-500">
                    <div className="py-2 mx-16 text-xl px-2">Websites</div>
                </Link>
                <Link href="/AboutMe"  className="w-full hover:text-gray-900 hover:bg-gradient-to-b from-gray-500 to-lime-500">
                    <div className="py-2 mx-16 text-xl px-2">About Me</div>
                </Link>
            </div>
            <div className="flex items-center justify-center sm:visible mt-auto mb-8">
                <div className="flex items-center justify-center">
                    <a href="https:/twitter.com/smashhar_" className="mx-4">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https:/linkedin.com/in/syed-ashhar" className="mx-4">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https:/github.com/SMAshhar" className="mx-4">
                        <FaGithub size={24} />
                    </a>
                    <a href="+923443156626" className="mx-4">
                        <FaWhatsapp size={24} />
                    </a>
                </div>

            </div>
            <div className="flex justify-center items-center text-white">
                <FaCopyright />
                <div className="m-4"> 2023 SMA</div>
            </div>
        </div>
    )
}