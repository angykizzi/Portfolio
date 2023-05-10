import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/imageReact.png";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href='https://www.linkedin.com/in/angely-escafuller-749260132/' target="_blank"><AiFillLinkedin/></a>
                  <a href='https://github.com/angykizzi' target="_blank"><AiFillGithub/></a>
                  <a href='https://wa.link/n822pm' target="_blank"><AiOutlineWhatsApp/></a>
            </div>
            <p>Contact me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
