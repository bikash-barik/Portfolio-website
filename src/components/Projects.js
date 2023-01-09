import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCards } from "./ProjectCard";
import projImg1 from "../assets/img/pr1.jpg";
import projImg2 from "../assets/img/pr2.jpg";
import projImg3 from "../assets/img/pr4.jpg";
import projImg4 from "../assets/img/news18.png";
import projImg5 from "../assets/img/facebook.png";
import projImg6 from "../assets/img/img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Teaching",
      description: "Kastaboarding Institute I use to teach Mathematics and Science..",
      imgUrl: projImg1,
      linkurl: "https://www.collegeskateboarding.com/"
    },
    {
      title: "Food Delivery",
      description: "Zomato I use to deliver food to people during the COVID pandemic.",
      imgUrl: projImg2,
      linkurl: "https://thelogicalindian.com/humaninterest/odisha-bishnupriya-zomato-girl-28843"
    },
    {
      title: "Student",
      description: "using your imagination and creativity to express ideas and thoughts in a way which is personal to you.",
      imgUrl: projImg3,
      linkurl: "https://www.collegeskateboarding.com/"
    },
    // {
    //   title: "Cryptocurrency",
    //   description: "Cryptocurrency markets are in a similar situation. ",
    //   imgUrl: projImg3,
    // },
    // {
    //   title: "Crypto Trading",
    //   description: "Trading cryptocurrencies has become one of the most profitable activities in fintech.",
    //   imgUrl: projImg4,
    // },
    // {
    //   title: "PLC Ultima 💎",
    //   description: "The developers of PLC Ultima have expanded the functionality of the Litecoin blockchain by introducing the CryptoNight hashing algorithm, which Bytecoin, Electroneum, CryptoNoteCoin and Monero use",
    //   imgUrl: projImg5,
    // },
    // {
    //   title: "Business Activities Entrepreneurs",
    //   description: "There is always something to do, and most of the time it's something really urgent. That's the plight of the entrepreneur--constantly moving pieces, organizing activities, leading initiatives, and putting out fires, and making stuff happen.",
    //   imgUrl: projImg6,
    // },
  ];


  
  const project = [
    {
      title: "Teaching",
      description: "Kastaboarding Institute I use to teach Mathematics and Science..",
      imgUrl: projImg4,
      linkurl: "https://www.news18.com/news/buzz/odisha-college-girl-joins-zomato-as-delivery-partner-to-support-family-after-father-lost-job-in-pandemic-3834479.html"
    },
    {
      title: "Food Delivery",
      description: "Zomato I use to deliver food to people during the COVID pandemic.",
      imgUrl: projImg5,
      linkurl: "https://www.facebook.com/EnglishNEWJ/videos/509660743570233/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=2Rb1fB&ref=sharing"
    },
   
    
    // {
    //   title: "Benefits of Attending Workshops for Professionals & Business Owners",
    //   description: "A workshop may introduce a new idea, inspire participants to further explore it on their own, or may illustrate and promote actual process practice.",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Cryptocurrency",
    //   description: "Cryptocurrency markets are in a similar situation. ",
    //   imgUrl: projImg3,
    // },
   
    // {
    //   title: "Business Activities Entrepreneurs",
    //   description: "There is always something to do, and most of the time it's something really urgent. That's the plight of the entrepreneur--constantly moving pieces, organizing activities, leading initiatives, and putting out fires, and making stuff happen.",
    //   imgUrl: projImg6,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Works</h2>
                <p>To help you get started on your business journey, here are some free resources to guide you.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
