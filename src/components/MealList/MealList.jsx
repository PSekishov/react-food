import React from 'react';
import './mealList.css';

import { useNavigate } from 'react-router-dom';

import MealItem from '../MealItem';

const MealList = ({ meals }) => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="container mb-5">

      <button onClick={goBack} type="button" className="btn btn-light">Go To Back</button>
      <hr />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {
          meals.map((el) => (
            <MealItem key={el.idMeal} {...el} />
          ))
        }

      </div>
    </div>
  );
};

export default MealList;
