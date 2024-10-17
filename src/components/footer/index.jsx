import React from 'react';
import styles from './styles.module.css';
import SectionTitle from '../sectionTitle';
import instagram from './../../assets/icons/instagram.svg';
import whatsapp from './../../assets/icons/whatsapp.svg';

function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <SectionTitle title="Contact" />
      <div className={styles.footer_inner}>
        <div className={styles.footer_content}>
          <div className={styles.footer_info}>
            <div className={styles.footer_info_title}>Phone</div>
            <a href="tel:+49 30 915-88492" className={styles.footer_info_text}>
              +49 30 915-88492
            </a>
          </div>
          <div className={styles.footer_info}>
            <div className={styles.footer_info_title}>Socials</div>
            <div className={styles.footer_info_inner}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
          <div className={styles.footer_info}>
            <div className={styles.footer_info_title}>Address</div>
            <div className={styles.footer_info_text}>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </div>
          </div>
          <div className={styles.footer_info}>
            <div className={styles.footer_info_title}>Working Hours</div>
            <div className={styles.footer_info_text}>24 hours a day</div>
          </div>
        </div>

        <iframe
          className={styles.footer_map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.233157260392!2d13.401947676947218!3d52.51111943688673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sen!2sfi!4v1728378534418!5m2!1sen!2sfi"
          allowFullScreen=""
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
