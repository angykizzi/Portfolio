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
                        description= {<p>AppDoptame is an innovative application designed to streamline the pet adoption process and support animal protection associations. Our platform is specifically designed to reduce the time that rescued pets spend in shelters, while also minimizing the maintenance costs that associations incur. By promoting greater visibility and dissemination of animals available for adoption, we aim to improve the overall quality of life for these vulnerable creatures.

                        With AppDoptame, users can easily create an account and explore our platform's features, including filtering by location and animal type. Meanwhile, associations can create their own profile and access a control panel to manage their pets and communicate with potential adopters. As administrators of the platform, we oversee all activities through a central panel that provides information on users, associations, and pets.
                          
                        One unique feature of AppDoptame is the ability for users to sponsor animal protection associations and make donations directly through our platform. Our application is poised to revolutionize the adoption process and serve as a valuable solution for animal protection associations across the country. The application is available at <a href="https://github.com/angykizzi/App-Doptame/tree/develop">link</a></p>}
                        imgUrl= {projImg1}
                        link= "https://github.com/angykizzi/App-Doptame/tree/develop"
                         />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      <ProjectCard 
                        title="PI food"
                        description= {<p>The Food Individual Project involved the development of a comprehensive web application that leverages APIs and databases to provide users with an extensive collection of recipes and meals. Our team utilized a range of cutting-edge technologies, including JavaScript, Node.js, Express, HTML, CSS, React, React-Redux, and SQL, to deliver an immersive and engaging user experience.

                        One of the primary goals of the project was to create a dynamic platform that enables users to easily add and modify their meals while also leveraging filters and search functionalities to enhance the overall user experience. Our platform also features a dedicated page for each recipe, providing users with detailed information and allowing them to explore the intricacies of each dish.
                          
                        The use of APIs and databases provides a robust and scalable infrastructure that enables our platform to process requests efficiently and securely. Our team worked tirelessly to create a comprehensive application that meets the needs of our users and delivers an exceptional experience. The application is available at <a href="https://github.com/angykizzi/PI-Food-main">link</a></p>}
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
