import { CiCircleCheck } from "react-icons/ci";

const Inclusion = ({ price }) => {
    const included = [
        'Save recipes from anywhere on the web',
        'Search your recipes',
        'Sort your recipes',
        'Rate your recipes',
        'Organize recipes your way with tags',
        'Printable meal plan'
    ]
    return (
        <div className="p-4">
            <div className="flex justify-center">
                <h1 className="text-2xl text-center w-6/12">What’s included with your subscription</h1>
            </div>
            <div className="border-2 w-full mb-8"></div>
            <div className="flex justify-end">
                <div className="border max-w-[10rem] aspect-square flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-center text-xl">Monthly Subscription</p>
                    <p>${price}/mo</p>
                </div>
            </div>
            <p className="bg-[var(--secondary)] p-2 font-bold">Features</p>
            <div>
                {included.map(e => (
                    <>
                        <ul className="flex justify-between items-center my-3 mx-4">
                            <li>{e}</li>
                            <div className=" scale-125"><CiCircleCheck /></div>
                        </ul>
                        <div className=" border border-[#ffffff8f] w-full"></div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Inclusion