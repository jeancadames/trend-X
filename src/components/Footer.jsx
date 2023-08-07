import TwitterLineIcon from 'remixicon-react/TwitterLineIcon'
import FacebookLineIcon from 'remixicon-react/FacebookLineIcon'
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'


export const Footer = () => {
  return (
    <div className="footer-info">
        <div className="container">
            <div className="wrapper">
                <div className="flexcol">
                    <div className="logo">
                        <a href=""><span className="circle"></span>TrendX</a>
                    </div>
                    <div className="socials">
                        <ul className="flexitem">
                            <li><a href=""><TwitterLineIcon/></a></li>
                            <li><a href=""><FacebookLineIcon/></a></li>
                            <li><a href=""><InstagramLineIcon/></a></li>
                            <li><a href=""><LinkedinLineIcon/></a></li>
                            <li><a href=""><YoutubeLineIcon/></a></li>
                        </ul>
                    </div>
                </div>
                <p className="mini-text">Copyright 2023® TrendX. All right reserved.</p>
            </div>
        </div>
    </div>
  )
}
