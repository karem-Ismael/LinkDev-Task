import { Col, Container, Image, Row } from 'react-bootstrap'
import AppStore from '../../assets/images/apple-logo.svg'
import googlePlay from '../../assets/images/google.svg'
import logo from '../../assets/images/logo.PNG'
import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa"
import '../../Styles/_footer.scss';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <div className="leftPart">
              <Image src={logo} alt="link development" />
              <div className="desc">
                <p>
                  We make technology produce productive, adaptable and
                  sustainable business experiences.
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="links">
              <div className="company">
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Mobile</a>
              </div>
              <div className="contact">
                <h3>Contact</h3>
                <a href="#">Help/FAQ</a>
                <a href="#">Press</a>
                <a href="#">Affilates</a>
              </div>
              <div className="media">
                <h3>Media</h3>
                <a href="#">News</a>
                <a href="#">Photo</a>
                <a href="#">Video</a>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <div className="social">
              <div className="icons">
                <a href="#">
                  <FaFacebookF/>
                </a>
                <a href="#">
                  <FaInstagram/>
                </a>
                <a href="#">
                <FaTwitter/>
                </a>
              </div>
              <div className="stors">
                <h3>Discover our app</h3>
                <div className="store-contenainer">
                  <section>
                    <Image src={googlePlay} alt="google play icone" />
                    <div className="text">
                      <span>GET IT ON</span>
                      <span>GOOGLE PLAY</span>
                    </div>
                  </section>
                  <section>
                    <Image src={AppStore} alt="app store icone" />
                    <div className="text">
                      <span>Avalible on the</span>
                      <span style={{ fontSize: '13px' }}>Apple Store</span>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="rights">
              <p className="text-center">
                All rights reserved@Linkdevelopment.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
