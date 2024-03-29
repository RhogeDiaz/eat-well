
const Companion = () => {
    const For = [
        {
            title: 'Meal Planning',
            description: 'Our online meal planner helps you save meals and recipes from anywhere on the Internet, then schedule them on the calendar.'
        },
        {
            title: 'Grocery shopping',
            description: "Your weekly meal plan generates a grocery checklist based on the ingredients found in the meals you've planned."
        },
        {
            title: 'Cooking',
            description: 'View meals and recipes in our elegant formatting. No more scrolling through ads and blog articles just to see a recipe.'
        }

    ]
    return (
        <div className="p-4 md:p-12 lg:p-16">
            <h1 className=" font-bold text-2xl">Your companion for...</h1>
            <div className=" w-full border-2"></div>
            <div className='p-4 flex flex-col gap-6 md:flex-row'>
                {For.map((For) => (
                    <div key={For.title}>
                        <h3 className="font-bold text-xl">{For.title}</h3>
                        <p>{For.description}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <a className="button mt-4" href="/signup">Start free trial</a>
            </div>
        </div>

    )
}

export default Companion