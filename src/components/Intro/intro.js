import React from 'react';
import './intro.css';
import bg from './introimage.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Dev</span> <br />Software Techy</span>
                <p className="introPara"> passionate about Designing, Building <br />Deploying & Analyzing digital solutions.</p>
                <a href="#contact"><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;