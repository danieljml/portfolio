import React, { useEffect, useState } from 'react';
import './styles.css';
import shortid from 'shortid';
import expenses from '../../images/App-Expenses.png';
import Daw from '../../images/Form-Daw.png';
import customers from '../../images/custome-management.png';
import construction from '../../images/Homepage-Contruction.png';
import slider from '../../images/Testimonials-Slider.png';
import movies from '../../images/App-Movies.png';
import homeworks from '../../images/App-Tareas.png';
import whatsapp from '../../images/Whatsapp-clone.png';
import weather from '../../images/Weather-App.png';
import portafolio from '../../images/Portafolio.png';
import blackAndWhite from '../../images/Black-and-white.png';
import variedadesMonica from '../../images/Variedades-Monica.png';

import card from '../../images/Card-Component.png';
import article from '../../images/Article-Component.png';
import testimonials from '../../images/Testimonials-grid-section-main.png';
import video1 from '../../images/Video-1.png';
import video2 from '../../images/Video-2.png';

const Projects = () => {
  const projectList = [
    {
      dataAos: 'fade-right',
      img: expenses,
      h4: 'APP EXPENSES',
      p: 'REACT JS - FIREBASE - STYLE COMPONENT',
      href: 'https://app-lista-gastos-425c7.web.app/',
      category: 'website',
    },
    {
      dataAos: 'fade-right',
      img: Daw,
      h4: 'DAW COURSE PLATFORM',
      p: 'HTML - CSS - JS - PHP - MYSQL',
      href: 'https://github.com/danieljml/DAW-course-platform',
      category: 'website',
    },
    {
      dataAos: 'fade-right',
      img: customers,
      h4: 'CUSTOMER MANAGEMENT',
      p: 'REACT JS - PYTHON - FLASK - MYSQL',
      href: 'https://github.com/danieljml/customer-management',
      category: 'website',
    },
    {
      dataAos: 'fade-up',
      img: construction,
      h4: 'CONSTRUCTION WEBSITE',
      p: 'HTML - CSS - JS',
      href: 'https://danieljml.github.io/Homepage/',
      category: 'website',
    },

    {
      dataAos: 'fade-right',
      img: movies,
      h4: 'App-Movies',
      p: 'REACT JS - CONTEXT API - API REST',
      href: 'https://danieljml.github.io/App-Movies/',
      category: 'website',
    },
    {
      dataAos: 'fade-up',
      img: homeworks,
      h4: 'APP TO DO LIST',
      p: 'REACT JS - LOCALSTORAGE - CONTEXT API',
      href: 'https://danieljml.github.io/App-Tareas/',
      category: 'website',
    },
    {
      dataAos: 'fade-left',
      img: whatsapp,
      h4: 'APP WHATSAPP',
      p: 'REACT JS - FIREBASE - MATERIAL UI',
      href: 'https://whatsapp-clone-526b3.web.app/',
      category: 'website',
    },
    {
      dataAos: 'fade-right',
      img: weather,
      h4: 'APP WEATHER',
      p: 'REACT JS - API REST',
      href: 'https://danieljml.github.io/App-Weather/',
      category: 'website',
    },
    {
      dataAos: 'fade-up',
      img: portafolio,
      h4: 'PORTFOLIO FRONTEND',
      p: 'HTML - CSS - JS',
      href: 'https://danieljml.github.io/Portafolio/',
      category: 'website',
    },
    {
      dataAos: 'fade-left',
      img: blackAndWhite,
      h4: 'BUSINESS WEBPAGE',
      p: 'REACT JS - BOOTSTRAP 5',
      href: 'https://black-and-white-solutions.github.io/',
      category: 'website',
    },
    {
      dataAos: 'fade-left',
      img: slider,
      h4: 'SLIDERS TESTIMONIALS',
      p: 'HTML - CSS - JS',
      href: 'https://danieljml.github.io/Testimonials-Slider/',
      category: 'desing',
    },
    {
      dataAos: 'fade-right',
      img: card,
      h4: 'DESING CARD',
      p: 'HTML - CSS',
      href: 'https://danieljml.github.io/Card-Component/',
      category: 'desing',
    },
    {
      dataAos: 'fade-up',
      img: article,
      h4: 'DESING ARTICLE',
      p: 'HTML - CSS - JS',
      href: 'https://danieljml.github.io/Frontend-Mentor/',
      category: 'desing',
    },
    {
      dataAos: 'fade-left',
      img: testimonials,
      h4: 'DESING TESTIMONIALS',
      p: 'HTML - CSS',
      href: 'https://danieljml.github.io/Frontend-Mentor-Testimonials/',
      category: 'desing',
    },
    {
      dataAos: 'fade-right',
      img: variedadesMonica,
      h4: 'ECOMMERCE ONLINE',
      p: 'WORDPRESS - DIVI - HTML - CSS - JS',
      href: 'https://www.variedades-monica.com/',
      category: 'website',
    },
    {
      dataAos: 'fade-up',
      img: video1,
      h4: 'Video',
      p: 'FILMORA SKETCHUP',
      href: 'https://www.youtube.com/watch?v=TMT-NsjcNJw',
      category: 'video',
    },
    {
      dataAos: 'fade-left',
      img: video2,
      h4: 'Video',
      p: 'FILMORA SKETCHUP',
      href: 'https://www.youtube.com/watch?v=aYgIDuhjbVM',
      category: 'video',
    },
  ];
  const filterList = [
    { dataTarget: 'all', title: 'All' },
    { dataTarget: 'website', title: 'Web' },
    { dataTarget: 'desing', title: 'Desing' },
    { dataTarget: 'video', title: 'Video' },
  ];
  const [projectFilters, setProjectFilters] = useState(projectList);
  const [active, setActive] = useState(0);

  const projects = projectFilters.map(item => (
    <div key={shortid.generate()} className="col-lg-4 col-12 cardProjects" data-aos={item.dataAos} data-aos-duration="1000" category={item.category}>
      <img loading="lazy" className="img-projects" src={item.img} alt="" />
      <div className="overlay">
        <h4>{item.h4}</h4>
        <p>{item.p}</p>
        <a href={item.href} target="_blank" rel="noreferrer">
          <span className="bx bx-link-external" aria-hidden="true"></span>See Page
        </a>
      </div>
    </div>
  ));

  useEffect(() => {
    const activeCls = document.querySelectorAll('.category-item');
    if (active) {
      activeCls[active].classList.add('active');
    }
    activeCls[active].classList.add('active');
  }, [projectFilters, active]);

  const handlerFilter = (e, i) => {
    const dataTarget = e.target.getAttribute('data-target');
    if (dataTarget !== 'all') {
      const addingFilter = projectList.filter(item => item.category === dataTarget);
      setProjectFilters(addingFilter);
      setActive(i);
      return;
    }
    setProjectFilters(projectList);
    setActive(0);
  };

  const filters = filterList.map((item, i) => {
    return (
      <li onClick={e => handlerFilter(e, i)} key={shortid.generate()} data-target={item.dataTarget} className="category-item">
        {item.title}
      </li>
    );
  });

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h1 className="title text-center mt-4">Mini Projects</h1>
        <p className="text-center">SOME PRIVATE PROJECTS</p>
        <div className="container">
          <div className="row ">
            <div className="filter-buttons">
              <ul className="filter-btns d-flex">{filters}</ul>
            </div>
          </div>
        </div>
        <div className="row cardProject">{projects}</div>
      </div>
    </section>
  );
};

export default Projects;
