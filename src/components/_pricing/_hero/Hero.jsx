
const Hero = ({ header, text }) => {
    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <h1 className="font-bold text-2xl">{header}</h1>
            <p className="text-center w-11/12">{text}</p>
        </div>
    )
}

export default Hero