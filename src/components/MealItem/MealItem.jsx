import React from 'react';
import './mealItem.css';
import {Link} from 'react-router-dom';

const MealItem = (props) => {

  const {
    idMeal,
    strMeal,
    strMealThumb
  } = props;

  return (

    <div className="col">
      <div className="card shadow h-100 p-2 bg-body rounded">
        <img className="card-img-top" src={strMealThumb} alt={strMeal} title={strMeal} style={{ width: '100%', height: 225 }} />
        <div className="card-body">
          <h4 className="text-center">{strMeal}</h4>
        </div>
        <Link to={`/resipe/${idMeal}`.toLowerCase()}>
          <button type="button" className=" btn btn-sm btn-outline-info w-100">View Meal</button>
        </Link> 
      </div>
    </div>

  );
};

export default MealItem;
