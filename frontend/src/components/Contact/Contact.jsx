import styles from './About.module.css'

const Contact = () => {
  return (
    <div className={`container ${styles.contactmain}`}>
      <div className={`container ${styles.contact}`}>
        <div className={`${styles.contactInfo}`}>
          <div>
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +91 777777777</p>
          </div>
          <hr />
          <div>
            <h3>Write To US</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className={`${styles.contactForm}`}>
          <form>
            <div className={`${styles.details}`}>
              <input type="text" placeholder="Your Name" />
              <input type="email" name="" id="" placeholder="Your Email" />
              <input type="tel" name="" id="" placeholder="Your Phone" />
            </div>
            <textarea name="" id="" placeholder="Your Message"></textarea>
            <div className={`${styles.btn}`}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
