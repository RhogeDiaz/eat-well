import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-page'>
            <div className="title">
                <h1>Eats Elite</h1>
            </div>
            <div className='link-group-container'>
                <div className="link-group">
                    <strong>Community</strong>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">TikTok</a>
                </div>
                <div className="link-group">
                    <strong>Company</strong>
                    <a href="">Contact Us</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer