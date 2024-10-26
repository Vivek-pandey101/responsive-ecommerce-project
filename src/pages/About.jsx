import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to our shopping platform! We believe shopping should be
        enjoyable, simple, and accessible. Our platform offers a curated
        selection of high-quality products designed to meet all your
        needs—whether you’re looking for the latest tech gadgets, everyday
        essentials, or unique finds.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make shopping a seamless experience. We aim to provide
        you with an easy-to-use platform, secure transactions, and exceptional
        customer service. We work directly with trusted suppliers to bring you a
        diverse range of products at the best prices.
      </p>

      <h2>Why Shop with Us?</h2>
      <ul>
        <li>
          <strong>Wide Selection:</strong> From electronics to home goods, we
          have it all in one place.
        </li>
        <li>
          <strong>Quality Assurance:</strong> We carefully select and test
          products to ensure high quality.
        </li>
        <li>
          <strong>Secure Shopping:</strong> Your security and privacy are our
          top priority, with secure payment options and data protection.
        </li>
        <li>
          <strong>Customer Support:</strong> Our support team is here to assist
          you every step of the way.
        </li>
      </ul>

      <h2>Join Our Community</h2>
      <p>
        We are more than just a store; we are a community of shoppers who share
        a love for great products and excellent service. Follow us on social
        media, join our newsletter, and stay updated on our latest deals and new
        arrivals. Thank you for choosing us—we’re thrilled to have you here!
      </p>
    </div>
  );
}

export default About;
