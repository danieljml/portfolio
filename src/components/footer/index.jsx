import React from 'react';
import './styles.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <div className="row">
            <div className="logo">I hope you liked my website</div>
            <p className="text-footer">If you want to communicate with me or are interested in my services for a project, get in touch.</p>
            <div className="info">
              <div className="list border-list text-start">
                <label>
                  <i className="bx bxs-phone"></i>Phone:
                </label>
                <p>+584121938935</p>
              </div>
              <div className="list text-start">
                <label>
                  <i className="bx bxl-google"></i> Email:
                </label>
                <p>
                  <a href="mailto:danielgarrido425@gmail.com?Subject=Interesado%20en%20su%20servicio">danielgarrido425@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <section className="copyright">
        <Container>
          <p>Daniel Martinez 2021 &copy; All rights reserved</p>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
