function Footer() {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo-name">GivX</span>
            </div>
            <div className="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link-name">Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Services</li>
              <li>
                <a href="#">Clothes</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Gaming Consoles</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Preferences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Brands</li>
              <li>
                <a href="#">Apple</a>
              </li>
              <li>
                <a href="#">Sony</a>
              </li>
              <li>
                <a href="#">Asus</a>
              </li>
              <li>
                <a href="#">Samsung</a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link-name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom-text">
            <span className="copyright">
              Copyright &#169; 2023 <a href="#">NiceGuyZ.</a> All rights
              reserved
            </span>
            <span className="policy-terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & Conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
