import './Quote.css'

//{ quote, author, bu }
const Quote = ({ quote, author }) => {
    return (
        <div className='quote-container'>
            <p className='quote'>"{quote}"</p>
            <div className="line"></div>
            <p className="author">-{author}</p>
            <a href="/signup">Start planning smarter</a>
        </div>
    )
}

export default Quote