import React from 'react';
import './catalogItem.css';

import { Link } from 'react-router-dom';

import { trimString } from '../../functions';

const CatalogItem = (props) => {

  const {
    strCategoryThumb, 
    strCategory, 
    strCategoryDescription
  } = props;

  

  return (
    

    <div className="col">
      <div className="card shadow h-100 p-2 bg-body rounded">
        <img className="card-img-top" src={strCategoryThumb} alt={strCategory} title={strCategory} style={{ width: '100%', height: 225 }} />
        <div className="card-body">
          <h4 className="text-center">{strCategory}</h4>
          <p className="card-text">{trimString(strCategoryDescription, 120)}</p>
        </div>
        <Link to={`/category/${strCategory}`.toLowerCase()}>
          <button type="button" className=" btn btn-sm btn-outline-info w-100">View Category</button>
        </Link>
      </div>
    </div>

  );
};

export default CatalogItem;
