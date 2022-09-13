import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCards } from "./ProjectCard";
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import projImg4 from "../assets/img/4.jpg";
import projImg5 from "../assets/img/5.jpg";
import projImg6 from "../assets/img/6.jpg";
import projImg7 from "../assets/img/7.jpg";
import projImg8 from "../assets/img/8.jpg";
import projImg9 from "../assets/img/9.jpg";
import projImg10 from "../assets/img/10.jpg";
import projImg11 from "../assets/img/11.jpg";
import projImg12 from "../assets/img/12.jpg";
import projImg13 from "../assets/img/13.jpg";
import projImg14 from "../assets/img/14.jpg";
import projImg15 from "../assets/img/15.jpg";
import projImg16 from "../assets/img/16.jpg";
import projImg17 from "../assets/img/17.jpg";
import projImg18 from "../assets/img/18.jpg";
import projImg19 from "../assets/img/19.jpg";
import projImg20 from "../assets/img/20.jpg";
import projImg21 from "../assets/img/21.jpg";
import projIm22 from "../assets/img/22.jpg";
import projImg23 from "../assets/img/23.jpg";
import projImg24 from "../assets/img/24.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const MyGallery = () => {

  


  
  const project = [
    {
      title: "",
      description: "",
      imgUrl: projImg7,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg1,
    },
    
    {
      title: "",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg4,
    },
   
   
    {
      title: "",
      description: "",
      imgUrl: projImg6,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg8,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg9,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg10,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg11,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg12,
    },
   
    {
      title: "",
      description: "",
      imgUrl: projImg13,
    },
  ];



  const projects = [
  
    {
      title: "",
      description: "",
      imgUrl: projImg14,
    },
   
   
    {
      title: "",
      description: "",
      imgUrl: projImg16,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg17,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg15,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg18,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg19,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg20,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg21,
    },
    {
      title: "",
      description: "",
      imgUrl: projIm22,
    },
   
    {
      title: "",
      description: "",
      imgUrl: projImg23,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg24,
    },
  
  ];


  return (
    <section className="project" id="mygallery" style={{background: `linear-gradient(270deg, #0a0a0a 0%, #565967 100%)`}}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Gallery</h2>
                {/* <p>To help you get started on your business journey, here are some free resources to guide you.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Photos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Profiles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Professionals</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
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
