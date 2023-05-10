import {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg'
import './Contact.css'
import TrackVisibility from 'react-on-screen';

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setformDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      console.log(result);
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
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName
                                } placeholder='First Name' onChange={(e)=>onFormUpdate({ category: 'firstName', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.lastName
                                } placeholder='Last Name' onChange={(e)=>onFormUpdate({ category: 'lastName', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='email' value={formDetails.email
                                } placeholder='Email address' onChange={(e)=>onFormUpdate({ category: 'email', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='tel' value={formDetails.phone
                                } placeholder='Phone No.' onChange={(e)=>onFormUpdate({ category: 'phone', value: e.target.value })}
                                ></input>
                            </Col>
                            <Col>
                            <textarea rows={+6} value={formDetails.message} placeholder='Message' onChange={(e)=>onFormUpdate({ category: 'message', value: e.target.value })}></textarea>
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