import React from 'react';
import './intro.css';
import bg from './introimage.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Dev</span> <br />Software Engineer</span>
                <p className="introPara">I am a skilled software engineer with a strong foundation &<br />expertise across diverse domain of technology.</p>
                <a href="#contact"><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;