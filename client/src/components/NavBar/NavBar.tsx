import {Navbar, Container, Nav} from 'react-bootstrap'
import { useState, useEffect, SetStateAction } from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import logo from '../../assets/img/imageReact.png'
import './NavBar.css'


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=> {
    const onScroll = ()=> {
      if (window.scrollY > 50) {
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value: SetStateAction<string>) => {
    setActiveLink(value);
  }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href='#home'>
              <img src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skilss')}>Skills</Nav.Link>
                <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                  <a href='https://www.linkedin.com/in/angely-escafuller-749260132/' target="_blank"><AiFillLinkedin/></a>
                  <a href='https://github.com/angykizzi' target="_blank"><AiFillGithub/></a>
                  <a href='https://wa.link/n822pm' target="_blank"><AiOutlineWhatsApp/></a>
                </div>
                <Nav.Link href='#connect'><button className='vvd' onClick={() => console.log('connect')} ><span>Let's Connect</span></button></Nav.Link>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}