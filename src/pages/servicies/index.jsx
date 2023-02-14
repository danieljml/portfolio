import React from 'react';
import './styles.css';
import shortid from 'shortid';
import { AiOutlineDatabase, AiOutlineMobile, AiOutlineEdit, AiOutlineLaptop } from 'react-icons/ai';

const Services = () => {
  const servicesList = [
    {
      dataAos: 'fade-left',
      icon: <AiOutlineLaptop />,
      title: 'FRONTEND DEVELOMENT',
      description: 'I strive to reach a balance between functional and the design.',
    },
    {
      dataAos: 'fade-right',
      icon: <AiOutlineDatabase />,
      title: 'BACKEND DEVELOMENT',
      description: 'I make sure your app be secure and scalable.',
    },
    {
      dataAos: 'fade-left',
      icon: <AiOutlineMobile />,
      title: 'RESPONSIVE DESIGN',
      description: 'I make sure the web design is smartphone-capable',
    },
    {
      dataAos: 'fade-right',
      icon: <AiOutlineEdit />,
      title: 'PIXEL PERFECT',
      description: 'I`ll implement the code to look identical, down to the last pixel.',
    },
  ];

  const services = servicesList.map(item => (
    <div className="col-12 col-lg-6 card-services" key={shortid.generate()}>
      <div className="box" data-aos={item.dataAos} data-aos-duration="1000">
        <div className="icon">{item.icon}</div>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  ));
  return (
    <section className="services" id="services">
      <div className="container"></div>
      <h1 className="title text-center mt-4">Quality services</h1>
      <p className="text-center">IDEAS, CREATIVITY AND DESIGNS</p>
      <div className="container mt-5">
        <div className="row boxer">{services}</div>
      </div>
    </section>
  );
};

export default Services;
