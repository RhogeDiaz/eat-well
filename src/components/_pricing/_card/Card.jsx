import { useState } from "react"

const Card = ({ price }) => {
    return (
        <div className="flex flex-col items-center border-2 m-4 rounded-xl">
            <h1 className=" bg-[var(--secondary)] rounded-t-xl border-2 w-full p-4 text-center font-bold text-xl">Monthly Subscription</h1>
            <div className="p-4 flex flex-col items-center gap-4">
                <p className="font-bold text-xl">${price}/mo</p>
                <p className="font-bold">30 day free trial</p>
                <p className="text-center w-5/12">Consilidate your recipes
                    Search, sort, and filter meals
                    Drag-and-drop meal calendar
                </p>
                <a href="/signup" className="button w-full text-center">Start a free trial</a>
            </div>
        </div>
    )
}

export default Card