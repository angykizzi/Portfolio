import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../../assets/img/html.png'
import meter2 from '../../assets/img/css.png'
import meter3 from '../../assets/img/js.png'
import meter4 from '../../assets/img/bootsrap.png'
import meter5 from '../../assets/img/figma.png'
import meter6 from '../../assets/img/typescript.png'
import meter7 from '../../assets/img/node.png'
import meter8 from '../../assets/img/imageReact.png'
import meter9 from '../../assets/img/sql.png'
import colorSharp from '../../assets/img/color-sharp.png'
import './Skills.css'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                        As a Junior Full Stack Developer, I bring to the table a diverse range of technical proficiencies that enable me to seamlessly navigate the entire project lifecycle. In addition to my technical skills, I possess a suite of essential soft skills that make me a valuable asset to any team. These skills include adaptability, attention to detail, empathy, flexibility, leadership, organization, patience, social skills, and problem-solving.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image"/>
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="image"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="image"/>
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="image"/>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="image"/>
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="image"/>
                                <h5>React-Redux</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="image"/>
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}