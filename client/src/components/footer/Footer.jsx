import "./Footer.css"
import app_ios from "../../assets/icons/app_ios.svg"
import app_android from "../../assets/icons/app_android.png"
import footer_fb from "../../assets/icons/footer_fb.svg"
import footer_in from "../../assets/icons/footer_in.svg"
import footer_li from "../../assets/icons/footer_li.svg"
import footer_tw from "../../assets/icons/footer_tw.svg"

const Footer = () => {

  // todo: improve footer appearance

  return (
    <footer className="footer">
      
      <div className="footer-grid">
        
        <div className="flex-col gap-0-5 p-0-5">
          <a href="#">About us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Help</a>
        </div>

        <div className="p-0-5">
          <div className="h5 m-bl-1">FOLLOW US</div>

          <div className="flex-row gap-0-5 wrap">
            <a href="#" className="social-link">
              <img src={footer_fb} alt="facebook" />
            </a>
            <a href="#" className="social-link">
              <img src={footer_in} alt="instagram" />
            </a>
            <a href="#" className="social-link">
              <img src={footer_li} alt="linkedin" />
            </a>
            <a href="#" className="social-link">
              <img src={footer_tw} alt="twitter" />
            </a>
          </div>
        </div>

        <div className="flex-col gap-1 p-0-5">
          <a href="#"> <img src={app_ios} alt="app_ios" /> </a>
          <a href="#"> <img src={app_android} alt="app_android" /> </a>
        </div>
      
      </div>

      <div className="copyright">
        <span>&copy; Copyright 2024</span>
        {" "}
        <span><a>iBook-Dock</a></span>
      </div>

    </footer>
  )
}
export default Footer