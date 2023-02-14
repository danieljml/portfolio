import React from 'react';
import shortid from 'shortid';
import { Container } from 'react-bootstrap';
import './styles.css';

const Work = () => {
  const workList = [
    {
      dates: '01/2022 - 12/2022',
      company: 'Tutenlabs',
      position: 'Fullstack Developer',
      description: 'I worked with azure DevOps Services, coding in Javascript, HTML, CSS, React also I worked somethings with Java, Spring Boot, PostgreSQL',
    },
    {
      dates: '01/2019 - 06/2021',
      company: 'Black and white solutions',
      position: 'Fullstack Developer',
      description:
        'I worked with Azure DevOps Services, implementing apps from scratch using HTML5, CSS3, JavaScript, React, Python, PostgrestSQL, Flask, FastAPI and Django',
    },
    {
      dates: '08/2019 - 12/2020',
      company: 'Variedades monica.ca',
      position: 'UX Designer and Fullstack Developer',
      description: 'I worked with Wordpress, Figma for designs and implementing apps from scratch using HTML5, CSS3, JavaScript, PHP and MySQL',
    },
  ];
  const works = workList.map(item => (
    <div className="work__item" key={shortid.generate()}>
      <p className="work__date">
        {item.dates} <br /> <span className="work__company">{item.company}</span>
      </p>
      <p className="work__position">{item.position}</p>
      <p className="work__description">{item.description}</p>
    </div>
  ));

  return (
    <section className="work" id="experience">
      <div className="container"></div>
      <h1 className="title text-center mt-4">WORK EXPERIENCE</h1>
      <p className="text-center">+3 YEARS OF EXPERIENCE</p>

      <Container className="work__experience">{works}</Container>
    </section>
  );
};

export default Work;
