import cp from '../../assets/images/app-on-mobile.jpg'
import lappy from '../../assets/images/app-on-laptop.jpg'
import About from './_about/About'
import Quote from './_quote/Quote'
import Companion from './_companion/Companion'
import Closer from './_closer/Closer'
import EndText from './_endtext/EndText'


const Home = () => {
    const about = [
        {
            image: cp,
            title: 'The meal planner that gives you super powers.',
            description: 'Eats Elite is the online meal planner with tools and resources to make meal planning easier and faster. Spend less of your precious time planning your menu, and spend more time on what really matters.'
        },
        {
            image: lappy,
            title: 'Your meals and recipes, your way.',
            description: 'Eats Elite helps you store your meals and recipes from anywhere, whether they came from the Internet or grandma’s cook book. It also gives you the flexibility to meal plan your way, whether you prefer your computer, tablet, or smart phone. Our online meal planner goes with you while you shop for groceries, cook in the kitchen, or plan meals from the couch.'
        },
        {
            title: 'Who we are',
            description: 'Meal Planner App is a small, family-run business. We understand the struggles of trying to keep a household running smoothly, and we know how crucial meal planning is to that process. Since meal planning can impact everything from your budget to your health needs, we do our best to alleviate the stress and hassle meal planning can bring. Our goal is to make meal planning easier and less time-consuming, so that you can spend more time on what matters to you..'
        },
    ]

    const quotes = [
        {
            quote: 'Meal planning used to take me 3 hours every week. Now it takes less than 30 minutes!',
            author: 'Amber, Eats Elite App User',
        },
        {
            quote: 'My wife and I are finally doing a push to eat healthier, and I think Meal Planner App is what’ll actually make it happen. Thanks again for making such a great and easy product!',
            author: 'Justin, Eats Elite App User'
        }
    ]

    return (
        <div className=' flex flex-col gap-16 transition'>
            <About image={about[0].image} title={about[0].title} description={about[0].description} />
            <Quote quote={quotes[0].quote} author={quotes[0].author} />
            <About image={about[1].image} title={about[1].title} description={about[1].description} />
            <Companion />
            <Quote quote={quotes[1].quote} author={quotes[1].author} />
            <EndText />
            <Closer />
        </div>
    )
}

export default Home