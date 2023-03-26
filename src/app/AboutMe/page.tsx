import { aboutMe } from "./aboutMe";
import SideBar from "../../../components/SideBar/SideBar";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaCopyright } from "react-icons/fa"
import Image from "next/image";



export default function AboutMe() {
    const name: string = aboutMe.name
    const description: string = aboutMe.description

    return (
        <div className="flex flex-col sm:flex-row bg-[url('/bg/grey-horizon-4.jpg')] bg-cover">
            {/* <div className="absolute bottom-0 right-0 hidden w-full h-full md:block">
                <div className="absolute w-full h-full z-0">
                    <Image src="/bg/greenTP.png" fill objectFit='cover' alt="bg" className="absolute" />
                </div>
                <div className="w-62 h-62 bottom-0 right-0 absolute hidden md:block z-10">
                    <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
                </div>
            </div> */}
            <title>About Me</title>
            <SideBar />
            <div className="flex flex-col  w-screen justify-center items-center">
                <div className="flex flex-col w-2/3">
                    <div className="text-4xl justify-center sm:justify-start md:text-7xl text-gray-300 mt-10 pb-6">{name}</div>
                    <div className=" bg-gray-500/[0.3] p-6">
                        <div className="text-md sm:text-3xl mt-2 text-gray-100">{description}</div>
                        <div className="flex"></div>
                    </div></div>
                <div className="flex items-center justify-center mt-8 mb-8">
                    <div className="flex items-center justify-center z-50">
                        <a href="https:/twitter.com/smashhar_" className="mx-4 text-white">
                            <FaTwitter size={40} />
                        </a>
                        <a href="https:/linkedin.com/in/syed-ashhar" className="mx-4 text-white">
                            <FaLinkedin size={40} />
                        </a>
                        <a href="https:/github.com/SMAshhar" className="mx-4 text-white">
                            <FaGithub size={40} />
                        </a>
                        <a href="+923443156626" className="mx-4 text-white">
                            <FaWhatsapp size={40} />
                        </a>
                    </div>

                </div></div></div>
    )
}