import React, { useEffect, useState } from 'react';
import './homePage.css';

import Preloader from '../../components/Preloader';
import CatalogList from '../../components/CatalogList';

import { getAllCategories } from '../../api';


const HomePage = () => {

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => setCatalog(data.categories));
  }, []);



  return (
    <>
      {!catalog.length ?
        <div className="container">
          <Preloader />
        </div> : 
        <CatalogList catalog={catalog} />
      }
    </>
  );
};

export default HomePage;
