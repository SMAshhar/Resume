import { aboutMe } from "./aboutMe";
import SideBar from "../../../components/SideBar/SideBar";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaCopyright } from "react-icons/fa"
import Image from "next/image";



export default function AboutMe() {
    const name: string = aboutMe.name
    const description: string = aboutMe.description

    return (
        <div className="flex flex-col sm:flex-row bg-[url('/bg/grey-horizon-3.jpg')] bg-center">
            <div className="absolute bottom-0 right-0 ">
        <div className="w-62 h-62 ">
          <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
        </div>
      </div>
            <title>About Me</title>
            <SideBar />
            <div className="flex flex-col  w-screen justify-center items-center">
                <div className="flex flex-col w-2/3">
                    <div className="text-4xl justify-center sm:justify-start md:text-7xl text-gray-300 mt-10 pb-6">{name}</div>
                    <div className=" bg-white/[0.1] p-6">
                        <div className="text-md sm:text-3xl mt-2 text-gray-200">{description}</div>
                        <div className="flex"></div>
                    </div></div>
                <div className="flex items-center justify-center mt-8 mb-8">
                    <div className="flex items-center justify-center">
                        <a href="https:/twitter.com/smashhar_" className="mx-4">
                            <FaTwitter size={40} />
                        </a>
                        <a href="https:/linkedin.com/in/syed-ashhar" className="mx-4">
                            <FaLinkedin size={40} />
                        </a>
                        <a href="https:/github.com/SMAshhar" className="mx-4">
                            <FaGithub size={40} />
                        </a>
                        <a href="+923443156626" className="mx-4">
                            <FaWhatsapp size={40} />
                        </a>
                    </div>

                </div></div></div>
    )
}