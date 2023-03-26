import Tiles from "../../../components/projects/tiles"
import SideBar from "../../../components/SideBar/SideBar"
import Image from "next/image"

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row w-screen bg-[url('/bg/grey-horizon-4.jpg')] bg-cover justify-start">
            {/* <div className="absolute bottom-0 right-0 hidden md:block">
                <div className="w-62 h-62 ">
                    <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
                </div>
            </div> */}
            <title>Projects</title>

            <SideBar />
            <div className="flex flex-wrap justify-center items-start">
                <Tiles />
            </div>
        </div>
    )
}