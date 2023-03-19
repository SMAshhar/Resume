import SideBar from "../../../components/SideBar/SideBar";
import Image from "next/image";


export default function Experience() {
    return (
        <div className="flex flex-col sm:flex-row bg-[url('/bg/grey-horizon-3.jpg')] bg-center ">
            <div className="absolute bottom-0 right-0 ">
                <div className="w-62 h-62 ">
                    <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
                </div>
            </div>
            <title>Experience</title>
            <SideBar />
            <div className="flex flex-col  w-screen justify-center items-center">
                <div className="flex flex-col w-2/3">
                    <h1 className="text-4xl sm:text-7xl text-gray-300 pb-6 mt-6">Aisha Steel Mills</h1>
                    <div className=" bg-white/[0.1] p-6">
                        <p className="text-md sm:text-3xl mt-2 text-gray-200">I was hired as the lead project engineer at a multi billion rupee program named GI Complex. It was a two year program, carrying a ~26,250 square meter PEB shed, a Continuous galvanizing plant, pickling line, batch anealing furnaces cold rolling mill and several utilities. My responsibilities included everything from planning to execution to delivery of the whole program. </p>
                        <p className="text-2xl text-gray-100 mt-4">2018 - Now</p>
                    </div>
                </div>
                <div className="flex flex-col w-2/3 pb-16">
                    <h1 className="text-4xl sm:text-7xl text-gray-300 pb-6 mt-6">Midas Safety Inc.</h1>
                    <div className=" bg-white/[0.3] p-6">
                        <p className="text-md sm:text-3xl mt-2 text-gray-200">I was hired to lead a reverse engineering facility for global Midas Safety Inc. Keeping my previous responsibilities, I was moved to R&D Global. After 2 years, I was moved to the Project Management Office as a Project Engineer.</p>
                        <p className="text-2xl text-gray-100 mt-4">2012 - 2018</p>
                    </div>
                </div>
            </div>

        </div>
    )
}