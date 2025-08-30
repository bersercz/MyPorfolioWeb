import './contact.css';
import linkedin from '../../assets/linkedin.png';
import twitterIcon from '../../assets/twitter.png';
import github from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.from_name.value.trim();
        const email = form.current.from_email.value.trim();
        const message = form.current.message.value.trim();

        if(!name || !email || !message) {
            toast.error('Please fill in all fields.', {className: 'toasterror-message'});
            return;
        }

        emailjs.sendForm('service_stw1z8b', 'template_5o71t3x', form.current, '4lbq1o4SAQM0xWqKJ')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                console.log('Email Sent !');
                toast.success('Email sent successfully!', {className: 'toastsuccess-message' });
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send email.', {className: 'toasterror-message'});
            });
    };
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Experience Showcase</h1>
                <span className="clientDesc">
                    As a fresher, my journey so far has been shaped by academic and personal projects that challenged 
                    me to sharpen my skills and pay attention to detail. I enjoy creating meaningful experiences and i'm
                    ready to collaborate with teams and organizations to showcase my skills.
                </span>
                <div className="clientImgs">
                {/* <img src=" " alt="Client" className="clientImg" />
                    <img src=" " alt="Client" className="clientImg" />
                    <img src=" " alt="Client" className="clientImg" />
                    <img src=" " alt="Client" className="clientImg" />        */}           
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value='Send' className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href='https://linkedin.com/in/bersercz/' target='_blank' rel='noopener noreferrer'>
                            <img src={linkedin} alt="Facebook" className="link" /></a>
                        <a href='https://x.com/bersercz' target='_blank' rel='noopener noreferrer'>
                            <img src={twitterIcon} alt="Twitter" className="link" /></a>
                        <a href='https://github.com/bersercz' target='_blank' rel='noopener noreferrer'>
                            <img src={github} alt="YouTube" className="link" /></a>
                        <a href='https://instagram.com/bersercz' target='_blank' rel='noopener noreferrer'>
                            <img src={instagramIcon} alt="Instagram" className="link" /></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;