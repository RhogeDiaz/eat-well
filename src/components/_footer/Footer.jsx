import { GiMeal } from "react-icons/gi";
const Footer = () => {
    return (
        <div className='p-4 flex justify-between'>
            <div className=" self-start flex flex-col">
                <h1 className="font-bold text-2xl">
                    Eats Elite
                </h1>
                <div className="flex items-center gap-2">
                    <GiMeal />2024
                </div>
            </div>
            <div className='flex flex-wrap gap-20 justify-end'>
                <div className="flex flex-col gap-4 mb-8">
                    <strong>Community</strong>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">TikTok</a>
                </div>
                <div className="flex flex-col gap-4 mb-8">
                    <strong>Company</strong>
                    <a href="">Contact Us</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer