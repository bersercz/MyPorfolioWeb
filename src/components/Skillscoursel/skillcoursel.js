import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skillscoursel.css";
import sixtyone from "../../assets/sixityone.jpg";
import sixtyfive from "../../assets/sixityfive.jpg";
import sixtyseven from "../../assets/sixityseven.jpg";
import seventy from "../../assets/seventy.jpg";
import seventythree from "../../assets/seventythree.jpg";
import seventysix from "../../assets/seventysix.jpg";
import eightythree from "../../assets/eightythree.jpg";
import eightyfive from "../../assets/eightyfive.jpg";
import eightyseven from "../../assets/eightyseven.jpg";
import ninty from "../../assets/ninty.jpg";
import nintyfive from "../../assets/nintyfive.jpg";

export const SkillsCarousel = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop:           { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet:            { breakpoint: { max: 1024, min: 464 },  items: 2 },
    mobile:            { breakpoint: { max: 464,  min: 0 },    items: 1 },
  };

  const skills = [
    {name: "Figma", bg:ninty, src:ninty, text:"Design Tools"},
    {name: "SQL", bg:eightyseven, src:eightyseven, text:"Query Lang"},
    {name: "Power BI", bg:eightyseven, src:eightyseven ,text:"BI & Analytics"},
    {name: "Tableau", bg:ninty, src:ninty ,text:"BI & Analytics"},
    {name: "Excel", bg:nintyfive, src:nintyfive ,text:"Data"},
    {name: "Pandas", bg:eightyseven, src:eightyseven ,text:"Libraries"},
    {name: "NumPy", bg:seventythree, src:seventythree ,text:"Libraries"},
    {name: "Matplotlib", bg:nintyfive, src:nintyfive ,text:"Libraries"},
    {name: "Seaborn", bg:eightyfive, src:eightyfive ,text:"Libraries"},
    {name: "Flutter", bg:eightythree, src:eightythree ,text:"Libraries"},
    {name: "Python", bg:eightythree, src:eightythree ,text:" Language"},
    {name: "Javascript", bg:eightyseven, src:eightyseven ,text:" Language"},
    {name: "CSS", bg:seventythree, src:seventythree ,text:" Language"},
    {name: "Dart", bg:sixtyseven, src:sixtyseven ,text:" Language"},
    {name: "Go", bg:sixtyfive, src:sixtyfive ,text:" Language"},
    {name: "C#", bg:sixtyone, src:sixtyone ,text:" Language"},
    {name: "HTML", bg:seventy, src:seventy ,text:" Language"},
    {name: "MySQL", bg:sixtyfive, src:sixtyfive ,text:"Databases"},
    {name: "PostgreSQL", bg:sixtyseven, src:sixtyseven ,text:"Databases"},
    {name: "MongoDB", bg:seventy, src:seventy ,text:"Databases"},
    {name: "AWS", bg:seventysix, src:seventysix ,text:"IAM, EC2"},
    {name: "AWS", bg:seventysix, src:seventysix ,text:"S3, Lambda"},
    {name: "Azure", bg:seventy, src:seventy ,text:"VMs, Ai Foundry"},
    {name: "GCP", bg:sixtyseven, src:sixtyseven ,text:"APIs"},
    {name: "Docker", bg:sixtyone, src:sixtyone ,text:"DevOps & Infra"},
    {name: "Kubernetes", bg:sixtyone, src:sixtyone ,text:"DevOps & Infra"},
    {name: "Ansible", bg:sixtyfive, src:sixtyfive ,text:"DevOps & Infra"},
    {name: "Terraform", bg:sixtyone, src:sixtyone ,text:"DevOps & Infra"},
    {name: "Linux ", bg:sixtyone, src:sixtyone ,text:"DevOps & Infra"},
    {name: "Shell Scripting", bg:sixtyone, src:sixtyone ,text:"DevOps & Infra"},
    {name: "Jenkins", bg:sixtyfive, src:sixtyfive ,text:"CI/CD"},
    {name: "GitHub Actions", bg:seventy, src:seventy ,text:"CI/CD"},
    {name: "GitLab CI", bg:sixtyseven, src:sixtyseven ,text:"CI/CD"},
    {name: "Git", bg:seventy, src:seventy ,text:"Collab/Tools"},
    {name: "Jira", bg:seventythree, src:seventythree ,text:"Collab/Tools"},
  ];

  return (
    <section className="skillcoursel" id="skillcoursel">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="skillcoursel-bx">
              <h2>Skills</h2>
              <p>Here are some of my skills:</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoplay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                showDots={false}
                arrows={true}
                pauseOnHover={false}
                swipeable={false}
                draggable={false}
                containerClass="skillcoursel-slider"
                itemClass="skill-item-wrapper"
                renderButtonGroupOutside={false}
                shouldResetAutoplay={true}
                
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skillCard"
                    style={{
                      backgroundImage: `url(${skill.bg})`,
                      
                    }}
                  >
                    <div className="overlay"></div>
                    <h5>{skill.name}</h5>
                    <div className="skilltext">
                    <span className="text">{skill.text}</span></div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};