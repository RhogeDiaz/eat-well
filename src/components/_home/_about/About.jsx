import './About.css'

const About = ({ image, title, description }) => {
    return (
        <div className='about-container'>
            <img src={image} alt={image} />
            <h1>{title}</h1>
            <p>{description}</p>
            <a href='/signup'>Start a free trial</a>
        </div>
    )
}

export default About