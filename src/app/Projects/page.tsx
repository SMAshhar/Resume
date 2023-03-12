import Tiles from "../../../components/projects/tiles"
import SideBar from "../../../components/SideBar/SideBar"

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row w-screen bg-[url('/bg/index.jpg')] bg-center justify-start">
            <title>Projects</title>

            <SideBar />
            <div className="flex flex-wrap justify-center items-start">
                <Tiles />
            </div>
        </div>
    )
}