import Image from "next/image";
import SideBar from "../../../components/SideBar/SideBar";
import Link from "next/link";

export default function Work() {
    return (
        <div className="flex flex-col md:flex-row w-screen bg-[url('/bg/grey-horizon-3.jpg')] bg-center justify-start">
            <div className="absolute bottom-0 right-0 ">
                <div className="w-62 h-62 ">
                    <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
                </div>
            </div>
            <title>Works</title>
            <SideBar />
            <div className="flex flex-col px-14 sm:p-2 w-screen justify-center items-center pb-16">
                <div className="flex flex-col sm:w-2/3 items-center sm:items-start">
                    <h1 className="text-4xl sm:text-7xl text-gray-200 pb-6">Works</h1>
                    <div className=" bg-white/[0.1] p-6">
                        <div>
                            <Link href='https://panaverse-dao-syedmuhammadashhar-gmailcom.vercel.app' className="text-xl sm:text-3xl mt-2 text-gray-200">
                                <Image src='/panaverse-dao.png' alt='panaverse-dao' width={1200} height={500} className='py-6' />
                                Panaverse DAO</Link>
                        </div>
                        {/* <div className="flex flex-col sm:w-2/3 sm:items-end sm:mr-20"> */}
                        <Link href='https://media-player-syedmuhammadashhar-gmailcom.vercel.app' className="text-xl sm:text-3xl mt-2 text-gray-200">
                            <Image src='/media.PNG' alt='mediaplayer' width={1200} height={500} className='py-6' />
                            afrosonic Media Player</Link>
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