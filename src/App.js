import down from './assets/icon-arrow-down.svg';
import stand from './assets/image-stand-out.jpg';
import trans from './assets/image-transform.jpg';
import emily from './assets/image-emily.jpg';
import thomas from './assets/image-thomas.jpg';
import jennie from './assets/image-jennie.jpg';
import logo from './assets/logo.svg';
import milk from './assets/image-gallery-milkbottles.jpg';
import orange from './assets/image-gallery-orange.jpg';
import cone from './assets/image-gallery-cone.jpg'
import sugar from './assets/image-gallery-sugarcubes.jpg'
import fb from './assets/icon-facebook.svg'
import inst from './assets/icon-instagram.svg'
import tw from './assets/icon-twitter.svg'
import pt from './assets/icon-pinterest.svg'

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <header className="header flexrow align-center justify-between">
          <img className="logo" src={logo} alt="logo" width="170" height="33" />
          <nav className="header__nav">
            <ul className="header__ul flexrow">
              <li className="header__li"><button className="header__btn">About</button></li>
              <li className="header__li"><button className="header__btn">Services</button></li>
              <li className="header__li"><button className="header__btn">Project</button></li>
              <li className="header__li"><button className="header__btn">Contact</button></li>
            </ul>
          </nav>
        </header>
        <h1 className="hero-section__tittle">WE ARE CREATIVE</h1>
        <img src={down} alt="icon-arrow-down" width="30" height="108" />
      </div>

      <div className="transform-section flexrow">
        <div className="content-container flexcolumn">
          <h2 className="content-container__tittle">Transform your Brand</h2>
          <p className="content-container__text">We are a full-service creative agency specializing in helping brands grow
            fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <a className="content-container__link" href="#top">LEARN MORE</a>
        </div>
        <img src={trans} alt="" />
      </div>

      <div className="standout-section flexrow">
        <img src={stand} alt="" />
        <div className="content-container flexcolumn">
          <h2 className="content-container__tittle">Stand out to the right audience</h2>
          <p className="content-container__text">Using a collaborative formula of designers, researchers, photographers,
            videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <a className="content-container__link" href="#top">LEARN MORE</a>
        </div>
      </div>

      <div className="gp-section flexrow">
        <div className="graphic-section flexcolumn align-center">
          <h3 className="gp-section__tittle">Graphic Design</h3>
          <p className="gp-section__text">Great design makes you memorable. We deliver artwork that underscores your brand
            message and captures potential clients’ attention.</p>
        </div>

        <div className="photograph-section flexcolumn align-center">
          <h3 className="gp-section__tittle">Photography</h3>
          <p className="gp-section__text">Increase your credibility by getting the most stunning, high-quality photos that
            improve your business image.</p>
        </div>
      </div>

      <div className="testmonials-section">
        <h4 className="testimonials-section__tittle">CLIENT TESTEMONIAL</h4>
        <div className="testmonials-box flexrow">
          <div className="testimonial flexcolumn">
            <img className="testimonial__picture" src={emily} alt="" />
            <p className="testimonial__text">We put our trust in Sunnyside and they delivered, making sure our needs
              were met and deadlines were always hit.</p>
            <b className="testimonial__name">Emily R.</b>
            <span className="testimonial__cargo ">Marketing Director</span>
          </div>
          <div className="testimonial flexcolumn">
            <img className="testimonial__picture" src={thomas} alt="" />
            <p className="testimonial__text">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
              success made it a satisfying and enjoyable experience.</p>
            <b className="testimonial__name">Thomas S.</b>
            <span className="testimonial__cargo">Chief Operating Officer</span>
          </div>
          <div className="testimonial flexcolumn">
            <img className="testimonial__picture" src={jennie} alt="" />
            <p className="testimonial__text">Incredible end result! Our sales increased over 400% when we worked with
              Sunnyside. Highly recommended!</p>
            <b className="testimonial__name">Jennie F.</b>
            <span className="testimonial__cargo">Business Owner</span>
          </div>
        </div>
      </div>

      <div className="galery-section flexrow">
        <img className="galery-section__pic" src={milk} alt="" />
        <img className="galery-section__pic" src={orange} alt="" />
        <img className="galery-section__pic" src={cone} alt="" />
        <img className="galery-section__pic" src={sugar} alt="" />
      </div>
      <footer className="footer flexcolumn align-center">
        <img className="footer__logo" src={logo} alt="logo" />
        <nav className="footer__nav">
          <ul className="footer__ul">
            <li className="footer__li">
              <a className="footer__link" href="#top">About</a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="#top">Services</a>
            </li>
            <li className="footer__li">
              <a className="footer__link" href="#top">Projects</a>
            </li>
          </ul>
        </nav>
        <ul className="socialmedia flexrow">
          <li className="socialmedia__li">
            <a href="#top"><img src={fb} alt="" />
            </a>
          </li>
          <li className="socialmedia__li">
            <a href="#top"><img src={inst} alt="" /></a>
          </li>
          <li className="socialmedia__li">
            <a href="#top"><img src={tw} alt="" />
            </a>
          </li>
          <li className="socialmedia__li">
            <a href="#top"><img src={pt} alt="" /></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
