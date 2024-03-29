
const Quote = ({ quote, author }) => {
    return (
        <div className=' flex justify-center p-4'>
            <div className=' bg-[var(--secondary)] rounded-3xl p-4 flex flex-col items-center gap-5 '>
                <p>"{quote}"</p>
                <div className=" border-2 w-full"></div>
                <p>- {author}</p>
                <a className="button" href="/signup">Start planning smarter</a>
            </div>
        </div>
    )
}

export default Quote