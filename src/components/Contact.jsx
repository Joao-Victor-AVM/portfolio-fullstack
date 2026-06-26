import { useState } from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container fade-in'>
            <headear className='contact-hearder'>
                <h1>Contact</h1>
            </headear>

            <div className='contact-content'>
                <div className='contact-info'>
                    <h3>Informações</h3>
                    <p><strong>Email:</strong>almeidamelo2012@gmail.com </p>
                    <p><strong>Tefeone</strong> (81) 997505957 </p>
                    <p><strong>Localização</strong> Recife-PE </p>

                    <div className='contact-social'>
                        <a href='#'>Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;