const About = ({ image, title, description }) => {
    return (
        <div className=' flex flex-col items-center gap-4 p-4 md:flex-row-reverse md:px-12'>
            <img className=" rounded-3xl md:w-[30rem] lg:w-[35rem]" src={image} alt={image} />
            <div className="flex flex-col items-center gap-4 p-4 md:items-start">
                <h1 className=" font-bold text-2xl">{title}</h1>
                <p className=' text-justify'>{description}</p>
                <a className="button" href='/signup'>Start a free trial</a>
            </div>
        </div>
    )
}

export default About