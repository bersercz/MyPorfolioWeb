import React, {useState} from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import Portfolio7 from '../../assets/portfolio-5.png';
import Portfolio8 from '../../assets/portfolio-6.png';


const Works = () => {
  const projects = [{ src: Portfolio1, name: "Census 2011-Analysis", github:"https://github.com/bersercz/"},
                    { src: Portfolio2, name: "Netflix Dats-Analysis", github:"https://github.com/bersercz/"},
                    { src: Portfolio3, name: "Housing Data-Analysis", github:"https://github.com/bersercz/"},
                    { src: Portfolio4, name: "My Portfolio-react", github:"https://github.com/bersercz/MyPorfolioWeb"},
                    { src: Portfolio5, name: "Weather Data-Analysis", github:"https://github.com/bersercz/"},
                    { src: Portfolio6, name: "Udemy Data-Analysis", github:"https://github.com/bersercz/"},
                    {src:  Portfolio7, name: "", github:"https://github.com/bersercz/"},
                    {src:  Portfolio8, name: "", github:"https://github.com/bersercz/"},
                  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(visibleCount + 3); 
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure that my work is
        pixel perfect. I am excited to bring my skills and experience to help businesses achieve
        their goals and create a strong online presence.
      </span>

      <div className="worksImgs">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
              <div className="overlay">
               <h3 className="projectName">{project.name}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="visitBtn">
             Visit
            </a>
           </div>
          </div>
          ))}
      </div>

      {projects.length > 6 && (
        <button onClick={handleToggle} className="workBtn">
          {visibleCount < projects.length ? "See More" : "See Less"}
        </button>
      )}
    </section>
  );
};

export default Works;