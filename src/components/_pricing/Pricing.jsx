import Closer from '../_home/_closer/Closer'
import Card from './_card/Card'
import Hero from './_hero/Hero'
import Inclusion from './_inclusion/Inclusion'

const Pricing = () => {
    const price = 4.99
    const hero = [
        {
            header: 'Pricing',
            text: 'Try it out risk-free! We’re confident that meal planning will save you money. If implementing a proper meal plan doesn’t save you as much as our subscription costs, we’ll refund you for that month’s subscription — no questions asked.',
        },
        {
            header: 'But wait, there’s more!',
            text: 'Our goal is to pack as much value into your subscription as possible. The list above is an abbreviated list of the features included with your monthly subscription. For a more comprehensive list, check out our Features Page.',
        }
    ]
    return (
        <div className='flex flex-col gap-12'>
            <Hero header={hero[0].header} text={hero[0].text} />
            <Card price={price} />
            <Inclusion price={price} />
            <Hero header={hero[1].header} text={hero[1].text} />
            <Closer />
        </div>
    )
}

export default Pricing