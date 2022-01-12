import React from 'react';
import './footer.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-0 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
          </a>
          <span className="text-muted">2021 - {year} &copy; Pavel Sekishov</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-twitter"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-instagram"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-facebook"></i></a></li>
        </ul>
      </footer>
    </div>

  );

};

export default Footer;
