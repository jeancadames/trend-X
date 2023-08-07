import MailLineIcon from 'remixicon-react/MailLineIcon'

export const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="container">
            <div className="wrapper">
                <div className="box">
                    <div className="content">
                        <h3>Join Our Newsletter</h3>
                        <p>Get E-mail updates about our latest shop and <strong>special offers</strong></p>
                    </div>
                    <form className="search">
                        <span className="icon-large"><MailLineIcon/></span>
                        <input type="email" placeholder="Your email address" required/>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
