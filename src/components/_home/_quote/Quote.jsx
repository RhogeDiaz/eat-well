import './Quote.css'

const Quote = ({ quote, author }) => {
    return (
        <div className='quote-page'>
            <div className='quote-card'>
                <p className='quote'>"{quote}"</p>
                <div className="line"></div>
                <p className="author">- {author}</p>
                <a href="/signup">Start planning smarter</a>
            </div>
        </div>
    )
}

export default Quote