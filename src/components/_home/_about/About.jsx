const About = ({ image, title, description }) => {
    return (
        <div className=' flex flex-col items-center gap-4 p-4'>
            <img className=" rounded-3xl" src={image} alt={image} />
            <h1 className=" font-bold text-2xl">{title}</h1>
            <p className=' text-justify'>{description}</p>
            <a className="button" href='/signup'>Start a free trial</a>
        </div>
    )
}

export default About