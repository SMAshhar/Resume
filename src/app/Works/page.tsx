import Image from "next/image";
import SideBar from "../../../components/SideBar/SideBar";
import Link from "next/link";

export default function Work() {
    return (
        <div className="flex flex-col md:flex-row w-screen bg-[url('/bg/grey-horizon-4.jpg')] bg-cover justify-start">
            {/* <div className="absolute bottom-0 right-0 hidden md:block">
                <div className="w-62 h-62 ">
                    <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
                </div>
            </div> */}
            <title>Works</title>
            <SideBar />
            <div className="flex flex-col px-14 sm:p-2 w-screen justify-center items-center pb-16">
                <div className="flex flex-col sm:w-2/3 items-center sm:items-start">
                    <h1 className="text-4xl sm:text-7xl text-gray-200 pb-6">Work</h1>
                    <div className="z-50">
                        <div className="  bg-gray-500/[0.3] p-6 mb-6">
                            <Link href='https://panaverse-dao-syedmuhammadashhar-gmailcom.vercel.app' className="text-xl sm:text-3xl mt-2 text-gray-100">
                                <Image src='/panaverse-dao.png' alt='panaverse-dao' width={1200} height={500} className='py-6' />
                                Panaverse DAO</Link>
                        </div>
                        {/* <div className="flex flex-col sm:w-2/3 sm:items-end sm:mr-20"> */}
                        <div className="  bg-lime-500/[0.3] p-6 mb-6">
                            <Link href='https://media-player-syedmuhammadashhar-gmailcom.vercel.app' className="text-xl sm:text-3xl mt-2 text-gray-100">
                                <Image src='/media.PNG' alt='mediaplayer' width={1200} height={500} className='py-6' />
                                afrosonic Media Player</Link>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* <div>
                    <Image src='/PIAIC.PNG' alt='PIAIC' width={800} height={500} className='py-6 ' />
                    <Link href='https://panaverse-dao-syedmuhammadashhar-gmailcom.vercel.app' className="text-xl sm:text-3xl mt-2 text-gray-900">Presidential Innitiative for AI and Computing</Link>
                </div> */}
            </div>
        </div>
    )
}