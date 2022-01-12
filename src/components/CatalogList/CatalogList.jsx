import React from 'react';
import './catalogList.css';

import CatalogItem from '../CatalogItem';


const CatalogList = ({catalog}) => {


  return (


    <div className="container mb-5">
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          { 
            catalog.map((el) => (
              <CatalogItem key={el.idCategory} {...el}/>
            )) 
          } 

      </div>
    </div>

  );
};

export default CatalogList;
