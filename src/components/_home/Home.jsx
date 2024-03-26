import './Home.css'
import cp from '../../assets/images/app-on-mobile.jpg'
import lappy from '../../assets/images/app-on-laptop.jpg'
import About from './_about/About'
import Quote from './_quote/Quote'


const Home = () => {
    const about = [
        {
            image: cp,
            title: 'The meal planner that gives you super powers.',
            description: 'Eat Well is the online meal planner with tools and resources to make meal planning easier and faster. Spend less of your precious time planning your menu, and spend more time on what really matters.'
        },
        {
            image: lappy,
            title: 'Your meals and recipes, your way.',
            description: 'Eat Well helps you store your meals and recipes from anywhere, whether they came from the Internet or grandma’s cook book. It also gives you the flexibility to meal plan your way, whether you prefer your computer, tablet, or smart phone. Our online meal planner goes with you while you shop for groceries, cook in the kitchen, or plan meals from the couch.'
        },
    ]

    const quotes = [
        {
            quote: 'Meal planning used to take me 3 hours every week. Now it takes less than 30 minutes!',
            author: 'Amber, Meal Planner App customer',
        },
    ]

    return (
        <>
            <About image={about[0].image} title={about[0].title} description={about[0].description} />
            <Quote quote={quotes[0].quote} author={quotes[0].author} />
        </>
    )
}

export default Home