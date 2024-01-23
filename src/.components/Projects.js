import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecomerceImg1 from "../assets/img/ecommerce/ecommerce.jpg";
import ecomerveImg2 from "../assets/img/ecommerce/2.png";
import ecomerveImg3 from "../assets/img/ecommerce/3.png";
import projImg1 from "../assets/img/gbho.png";
import projImg2 from "../assets/img/gbho/2.png";
import projImg3 from "../assets/img/gbho/3.png";
import kat1 from "../assets/img/kantipur.png";
import kat2 from "../assets/img/kantipur/3.png";
import kat3 from "../assets/img/kantipur/admin.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "GBHO Landing Page",
      description: "Landing Page",
      imgUrl: projImg1,
    },
    {
      title: "Register Page",
      description: "Membership Regsitered Page",
      imgUrl: projImg2,
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard view of admin page",
      imgUrl: projImg3,
    },
  ];
  const ecommerce = [
    {
      title: "Landing Page",
      description: "Landing Page",
      imgUrl: ecomerceImg1,
    },
    {
      title: "Login Page",
      description: "Login Page",
      imgUrl: ecomerveImg2,
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard view of admin page",
      imgUrl: ecomerveImg3,
    },


  ];
  const kantipurDescription = [
    {
      title: "Kantipur Landing Page",
      description: "Landing Page",
      imgUrl: kat1,
    },
    {
      title: "Resume Builder",
      description: "Used Tessaract to take the text from image",
      imgUrl: kat2,
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard view of admin page",
      imgUrl: kat3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Ecommerce Web application</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">GBHO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Kantipur Overseas</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      ecommerce.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                  <p>
                    <b>Ecommerce Website:</b>
                    In my final year project, I developed a complete ecommerce website using Laravel for the backend. The platform caters to two
                    main user roles: sellers, who upload products and manage categories and users, and customers, who browse, add items to their
                    cart, and can create wishlists. The website follows the typical ecommerce workflow: users can register/login, add items to their
                    cart, and proceed to checkout. Payment options include cash on delivery or using PayPal or Khalti. It was a solo project aimed at
                    showcasing a Business-to-Customer (B2C) ecommerce model. <br />

                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
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
                  <p>  <b>GBHO Project:</b>
                    At FestNepal, I actively contributed to a multifaceted project aimed at creating a web platform for booking priests, managing
                    events, running an ecommerce website, and overseeing a school management system. This US-based project was initiated by a
                    Hindu organization striving to establish its ecosystem through a comprehensive web application.
                    The project's workflow allowed users to purchase membership packs via PayPal for registration. Alternatively, individuals could
                    register as priests or volunteers but they had to get approval from the admin team. I took complete ownership of the PayPal
                    integration and developed user roles and permissions for registered members. Managing authorization processes was a key
                    aspect of my role.
                    Beyond this, I played pivotal roles in creating other systems such as library management and assignment tracking. I specifically
                    developed the event and priest booking systems, enabling members to book priests based on the time availability of the priest.
                    Registration for priest booking necessitated PayPal payments, aligning with the availability of the priests. And I even handled the
                    jobs that can deliver the email if the membership renewable time period has arrived and all the website email handling was
                    managed by me.
                    This project was not just fulfilling but also presented numerous challenges that expanded my learning horizons. Despite not
                    having an internship, I gained substantial knowledge, especially in handling CPanel hosting and overseeing database
                    management for both live and test servers. This experience provided insights into deployment processes and the functioning of
                    an IT company. Though the journey ended after a year, it was an enriching period where I acquired practical skills and insights
                    into various aspects of web development and IT operations. <br /></p>

                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      kantipurDescription.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                  <p>
                    <b>Kantipur Overseas Website:</b>
                    Kantipur Overseas is the one of the oldest agency serving about 25 years in the foreign employment sector. Working on Kantipur
                    Overseas, web application using Laravel and Vue.js is an exciting opportunity. I've integrated a unique text recognition feature
                    specifically designed to identify crucial documents like police reports, which sets our project apart in the foreign employment
                    field. Our application offers various features, including displaying job demands, detailed descriptions, user authentication,
                    director appointment scheduling, and a specialized resume builder that uses government-issued police report images.
                    My enthusiasm for technology and ability to adapt are evident, showcased by my leadership experience at FestNepal. I'm a quick
                    learner and a team player, qualities that significantly contribute to project success. If there are new opportunities available, my
                    skill set and eagerness to grow could be valuable assets to any team. 
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}