import './styles.css';
import shortid from 'shortid';
import { Container } from 'react-bootstrap';
import { BiCodeAlt, BiUser, BiPurchaseTagAlt, BiCode } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';

function Navbar() {
  let navLinks = [
    {
      navLink: 'Introduction',
      href: '#',
      icon: <RiHome2Line className="icon" />,
    },
    {
      navLink: 'About me',
      href: '#about',
      icon: <BiUser className="icon" />,
    },
    {
      navLink: 'Services',
      href: '#services',
      icon: <BiPurchaseTagAlt className="icon" />,
    },
    {
      navLink: 'Experience',
      href: '#experience',
      icon: <MdWorkOutline className="icon" />,
    },
    {
      navLink: 'Projects',
      href: '#projects',
      icon: <BiCode className="icon" />,
    },
  ];

  const links = navLinks.map(item => (
    <li key={shortid.generate()} className="nav-item">
      <a className="nav-link active" aria-current="page" href={item.href}>
        {item.navLink}
      </a>
    </li>
  ));

  return (
    <>
      <Container id="header" loading="lazy" className="navbar sticky-top navbar-expand-lg" fluid>
        <Container className="header">
          <BiCodeAlt className="icon" href="#" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="mx-auto"></div>
            <ul className="navbar-nav" loading="lazy">
              {links}
            </ul>
          </div>
        </Container>
      </Container>
      <nav loading="lazy" className="nav_ux">
        <div className="nav__block_ux">
          {navLinks.map(item => (
            <li key={shortid.generate()}>{item.icon}</li>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
