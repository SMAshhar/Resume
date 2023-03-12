import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaCopyright } from "react-icons/fa"

export default function SideBar() {
    return (
        <div className="flex flex-col w-full h-auto sm:w-1/5 sm:h-screen justify-center bg-orange-500/[0.2] text-white">
            <div className="w-full flex items-center justify-center">
                <div className="h-40 w-40 bg-white rounded-full flex items-center justify-center my-4 mt-16 overflow-hidden">
                    <Image
                        src="/DSC_0777.jpg"
                        alt="Profile Picture"
                        width={150}
                        height={150}
                        className='rounded-full'
                    />
                </div>
            </div>
            <h1 className="text-white flex text-2xl font-bold mt-4 justify-center">Ashhar</h1>
            <p className="text-white flex justify-center text-center mt-6">Web-dev.</p>
            <p className="text-white flex justify-center text-center mb-6">From scratch to deployment</p>
            <div className="flex gap-2 flex-col text-lg w-4/5 sm:w-1/2 justify-center sm:items-start mx-16 mt-8 mb-8">
                <Link href="/">
                    <div className="my-2 hover:text-xl px-2">Home</div>
                </Link>
                <Link href='/Projects'>
                    <div className="my-2 hover:text-xl px-2">Projects</div>
                </Link>
                <Link href="/Experience">
                    <div className="my-2 hover:text-xl px-2">Experience</div>
                </Link>
                <Link href="/Works">
                    <div className="my-2 hover:text-xl px-2">Works</div>
                </Link>
                <Link href="/AboutMe">
                    <div className="my-2 hover:text-xl px-2">About Me</div>
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