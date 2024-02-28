import { Link } from "react-router-dom"

import Logo from "../../assets/icons/Logo.svg"
import { InIcon } from "../svgs/socials/in"
import { TwIcon } from "../svgs/socials/tw"
import { FbIcon } from "../svgs/socials/li"
import { YbIcon } from "../svgs/socials/yb"
import { Telegram } from "../svgs/Telegram"
import "./Footer.css"


const Footer = () => {

  return (
    <footer className="footer">
      
      <div className="footer-grid">
        
        {/* links */}
        <div>
          <ul className="underline-children flex-col gap-0-25 p-0-5">
            <li><Link to="#" href="#">About us</Link></li>
            <li><Link to="#" href="#">Terms</Link></li>
            <li><Link to="#" href="#">Privacy</Link></li>
            <li><Link to="#" href="#">Help</Link></li>
          </ul>
        </div>

        {/* social links and contact */}
        <div className="p-0-5 flex-col gap-2 ai-c ta-c">

          <div className="social-wrapper">
            <h5 className="h5 mb-0-5 fs-1-2 fw-700">FOLLOW US</h5>
            <div className="footer-socials">
              <ul className="flex-row gap-0-5 wrap jc-c">
                <li><Link to="#" title="Instagram" href="#"><InIcon /></Link></li>
                <li><Link to="#" title="Twitter" href="#"><TwIcon/></Link></li>
                <li><Link to="#" title="YouTube" href="#"><FbIcon /></Link></li>
                <li><Link to="#" title="Facebook" href="#"><YbIcon /></Link></li>
              </ul>
            </div>
          </div>

          <div className="contact-wrapper d-in">
            <h5 className="h5 d-in mr-1 fs-1-2 fw-700 uppercase">Contact US</h5>
            <span className="fs-1 fw-500 ">05 - 12345678</span>
          </div>

        </div>

        {/* subscribe */}
        <div className="flex-col gap-2 p-0-5">
          <div className="subscribe-wrapper">
            <div className="text">
              <h5 className="fs-1-3 fw-8">Start using iBook now.</h5>
              <h6 className="fsd-0-8 fw-700 uppercase mb-1">No credit card required</h6>
            </div>
            <div className="input-wrapper">
              <input type="email" id="subscribe" placeholder="Your Email" />
              <Telegram />
            </div>
          </div>
          <div className="brand-wrapper flex-row gap-1-5 ai-c mt-1">
            <p className="fs-0-95 mb-0-5 fw-600">Make the right decisions that move your business</p>
            <img src={Logo} alt="" />
          </div>
        </div>
      
      </div>

      <div className="copyright">
        <span className="fs-0-8">&copy; 2024</span>
        {" "}
        <span className="fs-0-8"><Link to="#">iBook-Dock.com, Inc.</Link></span>
      </div>

    </footer>
  )
}
export default Footer