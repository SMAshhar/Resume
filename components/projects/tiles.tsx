import projectData, { ProjectData } from "./project-data";
import Image from "next/image";

interface tileProps {
    id: number;
    heading: string;
    imageSrc: string;
    description: string;
    duration: string
}

const Tile = ({ id, heading, imageSrc, description, duration }: tileProps) => {
    return (
        <div className="flex flex-col max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-2 my-4 sm:mx-4 sm:my-8">
            <Image className="h-48 w-full object-cover" src={imageSrc} alt={heading} width={99} height={48}/>
            <div className="px-2 sm:px-4 py-2 h-full">
                <h2 className="font-bold text-lg sm:text-2xl mb-2">{heading}</h2>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="flex justify-center sm:justify-end sm:items-end w-full">
                    <p className="text-gray-500 text-base my-2 mx-4">{duration}</p>
                </div>
        </div>
    )
}

const Tiles = () => {
    const tiles: ProjectData[] = projectData;
    return (
        <div className="flex flex-col  mx-4 px-4 sm:justify-center sm:items-center">
            <div className="flex flex-col justify-center items-center md:items-start sm:w-2/3 ">
                <h1 className="text-4xl justify-center sm:justify-start md:text-7xl text-gray-700 mt-10 pb-6">Projects highlights</h1>
                <div className="flex flex-wrap justify-start bg-white/[0.3] p-6">
                    {tiles.map((tile) => (
                        <Tile
                            key={tile.id}
                            id={tile.id}
                            heading={tile.heading}
                            imageSrc={tile.imageSrc}
                            description={tile.description}
                            duration={tile.duration}
                        />
                    ))}
                </div></div>
        </div>
    )
}

export default Tiles