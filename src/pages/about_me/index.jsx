import React from 'react';
import shortid from 'shortid';
import './styles.css';
import perfilPhoto from '../../images/Foto.jpg';
import { BsFileEarmarkPdfFill, BsWhatsapp, BsDot } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { DiReact, DiJavascript1, DiPython } from 'react-icons/di';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AboutMe = () => {
  const skillList = [
    {
      skill: 'HTML',
      ariaValueNow: '100',
      progressBar: '100%',
    },
    {
      skill: 'CSS',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Bootstrap',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Material UI',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'JavaScript',
      ariaValuenow: '90',
      progressBar: '90%',
    },
    {
      skill: 'TypeScript',
      ariaValuenow: '85',
      progressBar: '85%',
    },
    {
      skill: 'Node',
      ariaValueNow: '80',
      progressBar: '80%',
    },
    {
      skill: 'Express',
      ariaValuenow: '90',
      progressBar: '90%',
    },
    {
      skill: 'React',
      ariaValueNow: '85',
      progressBar: '85%',
    },
    {
      skill: 'Next',
      ariaValueNow: '85',
      progressBar: '85%',
    },
    {
      skill: 'Python',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Django',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'FastApi',
      ariaValueNow: '80',
      progressBar: '80%',
    },
    {
      skill: 'MYSQL',
      ariaValueNow: '80',
      progressBar: '80%',
    },
    {
      skill: 'MongoDB',
      ariaValueNow: '80',
      progressBar: '80%',
    },
    {
      skill: 'Firebase',
      ariaValueNow: '85',
      progressBar: '85%',
    },
    {
      skill: 'Figma',
      ariaValueNow: '80',
      progressBar: '80%',
    },
    {
      skill: 'Wordpress',
      ariaValueNow: '80',
      progressBar: '80%',
    },
  ];

  const linkList = [
    { link: 'https://github.com/danieljml', icon: <FiGithub />, description: 'Github' },
    { link: 'https://www.linkedin.com/in/daniel-j-martinez-5a4a171ba/', icon: <FaLinkedinIn />, description: 'Linkedin' },
    {
      link: 'https://api.whatsapp.com/send?phone=+584121938935&text=Hello, I come from your website!',
      icon: <BsWhatsapp />,
      description: 'Whatsapp',
    },
    { link: '../pdf/Curriculum Daniel-Martinez en.pdf', icon: <BsFileEarmarkPdfFill />, description: 'Download CV' },
  ];

  const habilities = skillList.map(item => (
    <div key={shortid.generate()} className="progress">
      <span className="skill">{item.skill}</span>
      <div className="progress-bar-wrap">
        {
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={item.ariaValueNow}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: item.progressBar }}
          ></div>
        }
      </div>
    </div>
  ));

  const renderTooltip = (e, description) => (
    <Tooltip id="button-tooltip" {...e}>
      {description}
    </Tooltip>
  );

  const links = linkList.map(item => (
    <OverlayTrigger key={shortid.generate()} placement="bottom" delay={{ show: 250, hide: 300 }} overlay={e => renderTooltip(e, item.description)}>
      <a href={item.link} target="_blank" className="icon" rel="noreferrer" download>
        {item.icon}
      </a>
    </OverlayTrigger>
  ));

  const courseList = [
    {
      link: 'https://www.udemy.com/certificate/UC-17363385-c1fc-4589-aead-c2548a5128d3/',
      name: 'Master in Python',
      icon: <DiPython className="course__icon icon" />,
    },
    {
      link: 'https://www.udemy.com/certificate/UC-f1de1340-97ab-45ff-856b-026e3c4101e6/',
      name: 'Master in Javascript',
      icon: <DiJavascript1 className="course__icon icon" />,
    },
    {
      link: 'https://www.udemy.com/certificate/UC-43f1b5f9-962b-437e-8993-52147cf41580/',
      name: 'React and Firebase',
      icon: <DiReact className="course__icon icon" />,
    },
  ];

  const courses = courseList.map(item => {
    return (
      <a href={item.link} target="_blank" rel="noreferrer" className="link__course" key={shortid.generate()}>
        <BsDot />
        {item.name} {item.icon}
      </a>
    );
  });

  return (
    <section className="skills pb-0" id="about">
      <div className="container">
        <h1 className="title text-center mt-4">ABOUT ME</h1>
        <p className="text-center">INFORMATION ABOUT ME</p>
        <p className="text-center">"The path to success is always under construction"</p>

        <p className="text-start">
          I am a Fullstack Developer and UX designer, focused and ready for new challenges. The technologies I use are HTML5, CSS3, JavaScript, Jquery,
          Bootstrap, Node Js, React Js, Python, Django, Flask, MongoDB, MySQL, PostgreSQL, Git, GitHub, WordPress, Azure DevOps Services and Figma.
        </p>
        <h1 className="content__title">certificate courses: </h1>
        <div className="courses__content">{courses}</div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div
            className="
            col-lg-6
            container__image px-md-5"
          >
            <img src={perfilPhoto} className="img-fluid" alt="perfil" loading="lazy" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <div className="info">
              <div className="list border-list text-start">
                <label>Freelance:</label>
                <p>Avalible</p>
              </div>
              <div className="list text-start">
                <label>Country:</label>
                <p>Venezuela</p>
              </div>
            </div>
            <div className="social-icons m-3">{links}</div>
            <h1 className="title text-center title-skills mb-4">Skills</h1>
            <div className="skills-content">{habilities}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
