/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function AlamatKami() {
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('iframe', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });
    }, []);

    return (
        <div className="container-xxl px-0 wow fadeIn" data-wow-delay="0.1s" style={{ marginBottom: '-6px' }}>
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <h1 className="display-5 mb-3">Alamat Kami</h1>
                <p>Berisikan alamat rumah kami</p>
            </div>
          
            <iframe className="w-100" style={{ height: '450px', border: '0' }}
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.140257839093!2d106.87631487499168!3d-6.375888393614385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjInMzMuMiJTIDEwNsKwNTInNDQuMCJF!5e0!3m2!1sid!2sid!4v1700008741181!5m2!1sid!2sid"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-hidden="false"
                tabIndex="0">
            </iframe>
        </div>
    );
}

export default AlamatKami;
