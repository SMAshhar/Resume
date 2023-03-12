export interface  ProjectData {
    id:number;
    heading:string;
    imageSrc:string;
    description: string;
    duration:string
}
 
 const projectData:ProjectData[] = [
    {
        id:1,
        heading: 'GI Complex; ASML',
        imageSrc: '/aisha.jpg',
        description:'Lead project engineer, demonstrated high competence in project management',
        duration: '2018-2020'
    },
    {
        id:2,
        heading: 'CCM; ASML',
        imageSrc: '/ccm.webp',
        description:'Engineering to closing, all tasks done on ~100,000+ dia-inch media lines',
        duration: '2019-2020'
    },
    {
        id:3,
        heading: 'Plastic Former: Midas Safety Inc.',
        imageSrc: '/topscrt.jpg',
        description:'Deduce new techniques for faster former development. Increased production rate by 400%',
        duration: '2016-2018'
    },
    {
        id:4,
        heading: 'Chain Plants; Midas Safety Inc.',
        imageSrc: '/gloves.jpg',
        description:'Installation, overhauling and upgradation of several chain plants',
        duration: '2012-2018'
    },
    {
        id:5,
        heading: 'Civil Projects; ASML',
        imageSrc: '/peb.webp',
        description:'RO Plant, E-house of CCM, Cooling Towers, H2 generation plant, WW Systems',
        duration: '2018-2020'
    },
    {
        id:1,
        heading: 'BFoW; Midas Safety Inc.',
        imageSrc: '/topscrt.jpg',
        description:'Lead a very ambitious project which changed the future of the global gloves industry',
        duration: '2013-2018'
    },
    
]

export default projectData