import React, {useState, useRef} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg'
import './Contact.css'
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

interface ContactProps {
    category: string;
    value: string;
  }
  interface StatusProps {
    message?: string;
    success?: boolean;
  }
  interface ApiResponse {
    code: number;
  }

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const isFormValid = () => {
      return Object.values(formDetails).every((val) => val.trim() !== "");
    };
    const [formDetails, setformDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState<StatusProps>({});

    const onFormUpdate = ({category, value}:ContactProps) => {
        setformDetails({
          ...formDetails,
          [category]: value
        })
    }

    const sendEmail = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    
      if (form.current) {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          form.current,
          'YOUR_PUBLIC_KEY'
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus({ message: 'Email sent successfully', success: true });
          },
          (error) => {
            console.log(error.text);
            setStatus({ message: 'Failed to send email', success: false });
          }
        );
    }
  };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                    <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>

                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' name="user_name" value={formDetails.firstName
                                } placeholder='First Name' onChange={(e)=>onFormUpdate({ category: 'firstName', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' name="user_lastname" value={formDetails.lastName
                                } placeholder='Last Name' onChange={(e)=>onFormUpdate({ category: 'lastName', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='email' name="user_email"  value={formDetails.email
                                } placeholder='Email address' onChange={(e)=>onFormUpdate({ category: 'email', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='tel' name='user_phone' value={formDetails.phone
                                } placeholder='Phone No.' onChange={(e)=>onFormUpdate({ category: 'phone', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col>
                            <textarea rows={+6} value={formDetails.message} placeholder='Message' name="message" onChange={(e)=>onFormUpdate({ category: 'message', value: e.target.value })}></textarea>
                            <button type="submit" disabled={!isFormValid()}><span>{buttonText}</span></button>
                            </Col>
                            {status.message && 
                            <Col>
                            <p className={status.success === false ? "danger": "success"}>{status.message} </p>
                            </Col>

                            }
                        </Row>
                    </form>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}