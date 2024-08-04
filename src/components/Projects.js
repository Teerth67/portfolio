import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import imga from "../assets/img/image.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import imgal from "../assets/img/t.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blood Management System",
      description: "Mern Stack",
      imgUrl: projImg1,
    },
    {
      title: "Chat App",
      description: "Real time",
      imgUrl: projImg2,
    },
    
    {
      title: "Task-Manager App",
      description: "Backend Development",
      imgUrl: imga,
    },
    {
      title: "EasyPG",
      description: "A rental space fro students and professionals",
      imgUrl: imgal,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Take a look at my projects!!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">About me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hobbies</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am a skilled competitive programmer with expertise in both backend and frontend development. Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Vellore Institute Of Technology, I maintain an impressive CGPA of 9.06. My technical skills include proficiency in languages such as C++, Python, JavaScript, HTML, React, MongoDB, and more. I have completed various courses covering topics like Data Structures and Algorithm, Object-Oriented Programming, and Computer Architecture and Organisation. I have hands-on experience in developing projects like a Real-Time Chat Application and a Blood Bank Management System using modern technologies like React.js, Node.js, and Express.js. With a track record of academic excellence and practical project experience, I am well-prepared for challenging opportunities in the software development domain.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>In addition to my academic and professional pursuits, I am passionate about various hobbies that enrich my life. I enjoy immersing myself in the world of literature, where I find solace and inspiration in the pages of novels and poetry. Exploring different cultures and cuisines through travel and culinary adventures is another passion of mine. I also find joy in staying active through activities like hiking, cycling, and playing sports with friends. Furthermore, I am an avid photographer, capturing moments that tell stories and evoke emotions. These hobbies not only provide me with relaxation and fulfillment but also foster creativity and a balanced lifestyle.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
