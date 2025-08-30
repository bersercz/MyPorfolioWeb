import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import logo from './portfolio.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastY = useRef(0);
    const interactedAt = useRef(0);

    useEffect (() => {
        lastY.current = window.scrollY || 0;

        const onScroll = () => {
            const now = Date.now();
            const currentY = Math.max(0, window.scrollY || 0);
            const delta = currentY - lastY.current;

            if (showMenu || now - interactedAt.current < 800) {
                lastY.current = currentY;
                setVisible(true);
                return;
            }

            if (Math.abs(delta) < 5) {
                lastY.current = currentY;
                return;
            }
            if (currentY < 80) {
                setVisible(true);
            } else {
                setVisible(delta <= 0);
            }
            lastY.current = currentY;
        };

        window.addEventListener('scroll', onScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [showMenu]);

    const handleNavInteract = () => {
        interactedAt.current = Date.now();
        setVisible(true);
    }

    return (
        <nav className={`navbar ${visible ? "navbar-show" : "navbar-hide"} `}>
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='skillcoursel' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Skills</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
            
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='skillcoursel' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;