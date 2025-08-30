import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Focus Areas</span>
            <span className="skillDesc">I'm skilled in UI/Ux Design, Data analysis, DevOps practices & App Developer. I bring a versatile toolkit to design intuitive experiences, develop scalable apps, and ensure smooth deployments.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>UI/UX Designer skilled in Figma, transforming idea into intuitive & <br /> user-friendly digital experiences.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analyst</h2>
                        <p>Data Analyst skilled in Python and SQL, transforming raw data into <br /> actionable insights.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>DevOps Engineer</h2>
                        <p>Passionate DevOps engineer creating automated scalable, and efficient <br /> workflow across cloud and containerized environments.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Developer</h2>
                        <p>Full-stack app developer skilled in Flutter, building scalable apps with <br /> intuitive design, JavaScript-powered backends, and cloud integration features.</p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;