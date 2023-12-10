import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.jpg";
import projImg2 from "../assets/img/gbho.png";
import projImg3 from "../assets/img/kantipur.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Website",
      description: "Design & Developed For Final Year Project Using Laravel",
      imgUrl: projImg1,
    },
    {
      title: "GBHO",
      description: "Design & Developed For a US based Company With Payment System and Membership Registration Using Laravel",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Developed For a Nepali Foreign Employment Company which has unique feature i.e. Image Recognization Using Laravel Vue and Tessaract",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Images</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Ecommerce Web application</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">GBHO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Kantipur Overseas</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
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
                  <p>
                    <b>Ecommerce Website:</b>
                    In my final year project, I developed a complete ecommerce website using Laravel for the backend. The platform caters to two
                    main user roles: sellers, who upload products and manage categories and users, and customers, who browse, add items to their
                    cart, and can create wishlists. The website follows the typical ecommerce workflow: users can register/login, add items to their
                    cart, and proceed to checkout. Payment options include cash on delivery or using PayPal or Khalti. It was a solo project aimed at
                    showcasing a Business-to-Customer (B2C) ecommerce model. <br />

                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
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
                <Tab.Pane eventKey="fourth">
                  <p>
                    <b>Kantipur Overseas Website:</b>
                    Kantipur Overseas is the one of the oldest agency serving about 25 years in the foreign employment sector. Working on Kantipur
                    Overseas, web application using Laravel and Vue.js is an exciting opportunity. I've integrated a unique text recognition feature
                    specifically designed to identify crucial documents like police reports, which sets our project apart in the foreign employment
                    field. Our application offers various features, including displaying job demands, detailed descriptions, user authentication,
                    director appointment scheduling, and a specialized resume builder that uses government-issued police report images.
                    My enthusiasm for technology and ability to adapt are evident, showcased by my leadership experience at FestNepal. I'm a quick
                    learner and a team player, qualities that significantly contribute to project success. If there are new opportunities available, my
                    skill set and eagerness to grow could be valuable assets to any team. I'm committed to embracing and conquering the exciting
                    challenges in the tech world!
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