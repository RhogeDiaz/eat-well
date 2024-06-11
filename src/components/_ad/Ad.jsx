
const Ad = () => {
    return (
        <div className="flex flex-col bg-[var(--secondary)] text-white p-4 items-center gap-3">
            <h1 className="p-4 font-bold text-lg">Try Meal Planner App FREE for 30 days!</h1>
            <a href="/signup" className="opacity-0 m-0 p-0 absolute">Start a free trial</a>
            <a href="/signup" className="px-4 py-1 bg-[var(--primary)] text-black rounded-lg">Start a free trial</a>
        </div>
    )
}

export default Ad