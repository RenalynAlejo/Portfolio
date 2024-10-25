import React, { useState } from "react";
import customStyle from '../css/customStyle.module.css';
import emailjs from 'emailjs-com';
import Footer from "../components/Footer";

const ContactForm = (props) => {
    const [formData, setFormData] = useState({
        fullName: '', // Combined name field
        gmail: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the message content using the template
        const templateParams = {
            to_name: "Renalyn De Villar", // Replace with the recipient's name or pass as a prop
            from_fullName: formData.fullName, // Use combined name
            from_gmail: formData.gmail,
            subject: formData.subject,
            message: formData.message
        };

        const emailTemplate = `
            Hello ${templateParams.to_name}
            I am ${templateParams.from_fullName} (${templateParams.from_gmail})
            I want to discuss about ${templateParams.subject}
                ${templateParams.message}
            
            Best wishes,EmailJS team
        `;

        emailjs.send('service_lhczbeo', 'template_u0g08iq', { ...templateParams, message: emailTemplate }, 'N8u3KQ8ViY2V9Na1Q')
            .then((response) => {
                alert('Message sent successfully!', response.status, response.text);
            }, (err) => {
                alert('Failed to send the message, please try again later.', err);
            });

        // Reset form data
        setFormData({
            fullName: '', // Reset full name
            gmail: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className={customStyle.backGround1}>
            <div className={customStyle.contactContainer}>
                <h1 className={customStyle.protext12}>{props.titleForm}</h1>
                <form onSubmit={handleSubmit} className={customStyle.contactForm}>
                    <div className={customStyle.formRow}>
                        <div className={customStyle.inputData}>
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                className={customStyle.formGroupinput}
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder=" "
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <div className={customStyle.underline}></div>
                        </div>
                    </div>
                    <div className={customStyle.formRow}>
                        <div className={customStyle.inputData}>
                            <label htmlFor="gmail">Email Address</label>
                            <input 
                                className={customStyle.formGroupinput}
                                type="email"
                                id="gmail"
                                name="gmail"
                                placeholder=" "
                                value={formData.gmail}
                                onChange={handleChange}
                                required
                            />
                            <div className={customStyle.underline}></div>
                        </div>
                        <div className={customStyle.inputData}>
                            <label htmlFor="subject">Subject</label>
                            <input 
                                className={customStyle.formGroupinput}
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder=" "
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <div className={customStyle.underline}></div>
                        </div>
                    </div>
                    <div className={customStyle.formRow}>
                        <div className={`${customStyle.inputData} ${customStyle.textarea}`}>
                            <label htmlFor="message">Write your message</label>
                            <textarea 
                                className={customStyle.formGroupinput}
                                id="message"
                                name="message"
                                placeholder=" "
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className={customStyle.underline}></div>
                        </div>
                    </div>
                    <div className={customStyle.submitBtn}>
                        <div className={customStyle.inputData}>
                            <div className={customStyle.inner}></div>
                            <input type="submit" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactForm;
