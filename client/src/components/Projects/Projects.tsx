import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../../assets/img/project-img1.png"
import projImg2 from "../../assets/img/project-img2.png"
import colorSharp2 from "../../assets/img/color-sharp2.png"
import { ProjectCard } from "../ProjectCards/ProjectCards";
import TrackVisibility from "react-on-screen"
import "./Projects.css"

export const Project = () => {
    const projects = [
        {
            title: "Appdoptame",
            description: "Design & Development. Click me",
            imgUrl: projImg1,
            link: "https://github.com/angykizzi/App-Doptame/tree/develop",
          },
          {
            title: "PI food",
            description: "Design & Development. Click me",
            imgUrl: projImg2,
            link: "https://github.com/angykizzi/PI-Food-main",
          },
    ];

    
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }: { isVisible: boolean }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The projects have been developed using various technologies, including React-Redux, TypeScript, JavaScript, Node.js, MySQL, MongoDB and Express.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Appdoptame</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">PI food</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard 
                        title="Appdoptame"
                        description= {
                          <div className="project-card-text-container">
                        <p>AppDoptame is an innovative application that simplifies pet adoption and supports animal protection associations. It reduces shelter time for rescued pets and lowers maintenance costs. The platform enhances visibility and dissemination of adoptable animals, improving their quality of life. Users can create accounts, filter by location and animal type. Associations can manage pets, communicate with potential adopters, and receive sponsorships and donations. AppDoptame revolutionizes the adoption process and helps animal protection associations nationwide. Find the application at the provided <a href="https://github.com/angykizzi/App-Doptame/tree/develop">link</a>
                        </p></div>}
                        imgUrl= {projImg1}
                        link= "https://github.com/angykizzi/App-Doptame/tree/develop"
                         />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      <ProjectCard 
                        title="PI food"
                        description= {
                        <div className="project-card-text-container"><p>The Food Individual Project is a web application that offers a vast collection of recipes and meals. It utilizes modern technologies like JavaScript, Node.js, Express, HTML, CSS, React, React-Redux, and SQL to create an immersive user experience. The platform allows users to add and modify meals easily, with filters and search options for a seamless experience. Each recipe has a dedicated page with detailed information. The application incorporates APIs and databases for efficient and secure request processing. The team has developed a comprehensive and exceptional application. Find it at <a href="https://github.com/angykizzi/PI-Food-main">link</a></p></div>}
                        imgUrl= {projImg2}
                        link= "https://github.com/angykizzi/App-Doptame/tree/develop"
                         />
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
